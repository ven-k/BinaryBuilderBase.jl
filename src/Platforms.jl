using Pkg.BinaryPlatforms, Logging

export AnyPlatform, ExtendedPlatform

"""
    AnyPlatform()

A special platform to be used to build platform-independent tarballs, like those
containing only header files.  [`FileProduct`](@ref) is the only product type
allowed with this platform.
"""
struct AnyPlatform <: Platform end
abi_agnostic(p::AnyPlatform) = p
Pkg.BinaryPlatforms.platform_name(::AnyPlatform) = "AnyPlatform"
Pkg.BinaryPlatforms.triplet(::AnyPlatform) = "any"
# Fallback on x86_64-linux-musl, but this shouldn't really matter in practice.
Pkg.BinaryPlatforms.arch(::AnyPlatform) = arch(Linux(:x86_64, libc=:musl))
Base.show(io::IO, ::AnyPlatform) = print(io, "AnyPlatform()")

## The extended platforms, to represent platforms beyond the standard ones in
## Pkg.BinaryPlatforms.
"""
    ExtendedPlatform(p::Platform; kwargs...)

Extend the given platform with extra information.  The key and the value can be
arbitrary, with the conditions that they should only use alhanumerical
characters, the underscore, or the dot (the latter only for the value).

This type is, for example, used to tag a standard platform from
`Pkg.BinaryPlatforms` with additional features besides the C library or the
compiler ABI.

```jldoctest
julia> ExtendedPlatform(Linux(:x86_64; libc=:glibc, compiler_abi=CompilerABI(; libgfortran_version=v"4")); march = "avx", cuda = "9.2")
ExtendedPlatform(Linux(:x86_64, libc=:glibc, compiler_abi=CompilerABI(libgfortran_version=v"4.0.0")); march="avx", cuda="9.2")
```
"""
struct ExtendedPlatform{P<:Platform} <: Platform
    p::P
    ext::Dict{String,String}
end
ExtendedPlatform(p::Platform; kwargs...) =
    ExtendedPlatform(p, Dict(string(k) => string(v) for (k, v) in pairs(kwargs)))
function ExtendedPlatform(p::ExtendedPlatform; kwargs...)
    for (k, v) in pairs(kwargs)
        key = String(k)
        if haskey(p.ext, key) && p.ext[key] != v
            error("The input platform has an incompatible feature $(key => p.ext[key])")
        end
    end
    ExtendedPlatform(p.p, merge(p.ext, Dict(string(k) => string(v) for (k, v) in pairs(kwargs))))
end

Pkg.BinaryPlatforms.platform_name(::ExtendedPlatform) = "ExtendedPlatform"
Pkg.BinaryPlatforms.arch(ep::ExtendedPlatform) = arch(ep.p)
Pkg.BinaryPlatforms.libc(ep::ExtendedPlatform) = libc(ep.p)
Pkg.BinaryPlatforms.call_abi(ep::ExtendedPlatform) = call_abi(ep.p)
Pkg.BinaryPlatforms.compiler_abi(ep::ExtendedPlatform) = compiler_abi(ep.p)
Pkg.BinaryPlatforms.triplet(ep::ExtendedPlatform) =
    triplet(ep.p) * join(["-$(k)+$(ep.ext[k])" for k in sort(collect(keys(ep.ext)))])

# This function also strips out the extra features of the type
abi_agnostic(ep::ExtendedPlatform) = abi_agnostic(ep.p)

function Base.show(io::IO, ep::ExtendedPlatform)
    print(io, BinaryPlatforms.platform_name(ep), "(", ep.p)
    length(ep.ext) > 0 && print(io, ";")
    join(io, [" $(k)=$(repr(v))" for (k, v) in ep.ext], ",")
    print(io, ")")
end

function tryparse_standard_platform(machine::AbstractString)
    p = with_logger(NullLogger()) do
        BinaryPlatforms.platform_key_abi(machine)
    end
    if isa(p, UnknownPlatform)
        return nothing
    end
    return p
end

function Base.tryparse(::Type{ExtendedPlatform}, str::AbstractString)
    # Fast-track `AnyPlatform`
    if str == "any"
        return AnyPlatform()
    end
    split_str = split(str, "-")
    idx = findfirst(str -> occursin("+", str), split_str)
    if idx === nothing
        # There are no key-value pairs, parse the entire string with
        # `tryparse_standard_platform`
        return tryparse_standard_platform(str)
    end
    base_platform = tryparse_standard_platform(join(split_str[1:max(1, idx - 1)], '-'))
    if base_platform === nothing
        return nothing
    end
    extra = Dict{String,String}()
    # Build up the extra features
    for kv in split_str[idx:end]
        # Split the extra feature with the delimiter we expect between the key
        # and the value
        key_value = split(kv, '+')
        if length(key_value) != 2
            # The string doesn't represent a key-value pair, give up
            return nothing
        end
        extra[key_value[1]] = key_value[2]
    end
    # Return the extended platform parsed
    ExtendedPlatform(base_platform, extra)
end

function Base.parse(T::Type{ExtendedPlatform}, str::AbstractString)
    parsed = tryparse(T, str)
    if parsed === nothing
        throw(ArgumentError("Cannot parse \"$(str)\" as an $(T)"))
    end
    return parsed
end

Base.:(==)(a::ExtendedPlatform, b::ExtendedPlatform) = a.p == b.p && a.ext == b.ext

# Extending the same platform: match only if the base platforms match and the
# same keys in the dictionaries have the same values
Pkg.BinaryPlatforms.platforms_match(a::ExtendedPlatform{P}, b::ExtendedPlatform{P}) where {P<:Platform} =
    platforms_match(a.p, b.p) &&  all(a.ext[k] == b.ext[k] for k in keys(a.ext) ∩ keys(b.ext))
# The wrapped platform is the same as the other one: the arguments match if the
# wrapper platform and the other one match
Pkg.BinaryPlatforms.platforms_match(a::ExtendedPlatform{P}, b::P) where {P<:Platform} = platforms_match(a.p, b)
Pkg.BinaryPlatforms.platforms_match(a::P, b::ExtendedPlatform{P}) where {P<:Platform} = platforms_match(a, b.p)
# Extending a platform different from the other one: do not match
Pkg.BinaryPlatforms.platforms_match(a::ExtendedPlatform{P1}, b::P2) where {P1<:Platform, P2<:Platform} = false
Pkg.BinaryPlatforms.platforms_match(a::P1, b::ExtendedPlatform{P2}) where {P1<:Platform, P2<:Platform} = false
# Extending different platforms: do not match
Pkg.BinaryPlatforms.platforms_match(a::ExtendedPlatform{P1}, b::ExtendedPlatform{P2}) where {P1<:Platform, P2<:Platform} = false
