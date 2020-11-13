var documenterSearchIndex = {"docs":
[{"location":"#BinaryBuilderBase.jl-Documentation-1","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.jl Documentation","text":"","category":"section"},{"location":"#","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.jl Documentation","text":"This is the reference documentation of BinaryBuilderBase.jl.","category":"page"},{"location":"#Index-1","page":"BinaryBuilderBase.jl Documentation","title":"Index","text":"","category":"section"},{"location":"#","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.jl Documentation","text":"","category":"page"},{"location":"#Types-1","page":"BinaryBuilderBase.jl Documentation","title":"Types","text":"","category":"section"},{"location":"#","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.jl Documentation","text":"Modules = [BinaryBuilderBase]\nOrder = [:type]","category":"page"},{"location":"#BinaryBuilderBase.AbstractDependency","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.AbstractDependency","text":"An AbstractDependency is a binary dependency of the JLL package.  Dependencies are installed to ${prefix} in the build environment.\n\nConcrete subtypes of AbstractDependency are\n\nDependency: a JLL package that is necessary for to build the package and to load the generated JLL package.\nBuildDependency: a JLL package that is necessary only to build the package.  This will not be a dependency of the generated JLL package.\n\n\n\n\n\n","category":"type"},{"location":"#BinaryBuilderBase.AbstractSource","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.AbstractSource","text":"An AbstractSource is something used as source to build the package.  Sources are installed to ${WORKSPACE}/srcdir in the build environment.\n\nConcrete subtypes of AbstractSource are:\n\nArchiveSource: a remote archive to download from the Internet;\nFileSource: a remote file to download from the Internet;\nGitSource: a remote Git repository to clone;\nDirectorySource: a local directory to mount.\n\n\n\n\n\n","category":"type"},{"location":"#BinaryBuilderBase.AnyPlatform","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.AnyPlatform","text":"AnyPlatform()\n\nA special platform to be used to build platform-independent tarballs, like those containing only header files.  FileProduct is the only product type allowed with this platform.\n\n\n\n\n\n","category":"type"},{"location":"#BinaryBuilderBase.ArchiveSource","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.ArchiveSource","text":"ArchiveSource(url::String, hash::String; unpack_target::String = \"\")\n\nSpecify a remote archive in one of the supported archive formats (e.g., TAR or ZIP balls) to be downloaded from the Internet from url.  hash is the 64-character SHA256 checksum of the file.\n\nIn the builder environment, the archive will be automatically unpacked to ${WORKSPACE}/srcdir, or in its subdirectory pointed to by the optional keyword unpack_target, if provided.\n\n\n\n\n\n","category":"type"},{"location":"#BinaryBuilderBase.BuildDependency","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.BuildDependency","text":"BuildDependency(dep::Union{PackageSpec,String})\n\nDefine a binary dependency that is necessary only to build the package.  The argument can be either a string with the name of the JLL package or a Pkg.PackageSpec.\n\n\n\n\n\n","category":"type"},{"location":"#BinaryBuilderBase.Dependency","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.Dependency","text":"Dependency(dep::Union{PackageSpec,String})\n\nDefine a binary dependency that is necessary to build the package and load the generated JLL package.  The argument can be either a string with the name of the JLL package or a Pkg.PackageSpec.\n\n\n\n\n\n","category":"type"},{"location":"#BinaryBuilderBase.DirectorySource","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.DirectorySource","text":"DirectorySource(path::String; target::String = basename(path), follow_symlinks=false)\n\nSpecify a local directory to mount from path.\n\nThe content of the directory will be mounted in ${WORKSPACE}/srcdir, or in its subdirectory pointed to by the optional keyword target, if provided. Symbolic links are replaced by a copy of the target when follow_symlinks is true.\n\n\n\n\n\n","category":"type"},{"location":"#BinaryBuilderBase.DockerRunner","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.DockerRunner","text":"DockerRunner\n\nUse docker as an execution engine; a reasonable backup for platforms that do not have user namespaces (e.g. MacOS, Windows).\n\n\n\n\n\n","category":"type"},{"location":"#BinaryBuilderBase.ExecutableProduct","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.ExecutableProduct","text":"An ExecutableProduct is a Product that represents an executable file.\n\nOn all platforms, an ExecutableProduct checks for existence of the file.  On non-Windows platforms, it will check for the executable bit being set.  On Windows platforms, it will check that the file ends with \".exe\", (adding it on automatically, if it is not already present).\n\n\n\n\n\n","category":"type"},{"location":"#BinaryBuilderBase.FileProduct","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.FileProduct","text":"FileProduct(path::AbstractString, varname::Symbol, dir_path = nothing)\n\nDeclares a FileProduct that points to a file located relative to the root of a Prefix, must simply exist to be satisfied.\n\n\n\n\n\n","category":"type"},{"location":"#BinaryBuilderBase.FileSource","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.FileSource","text":"FileSource(url::String, hash::String; filename::String = basename(url))\n\nSpecify a remote file to be downloaded from the Internet from url.  hash is the 64-character SHA256 checksum of the file.\n\nIn the builder environment, the file will be saved under ${WORKSPACE}/srcdir with the same name as the basename of the originating URL, unless the the keyword argument filename is specified.\n\n\n\n\n\n","category":"type"},{"location":"#BinaryBuilderBase.FrameworkProduct","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.FrameworkProduct","text":"A FrameworkProduct is a  Product that encapsulates a macOS Framework. It behaves mostly as a LibraryProduct for now, but is a distinct type. This implies that for cross-platform builds where a library is provided as a Framework on macOS and as a normal library on other platforms, two calls to BinaryBuilder's build_tarballs are needed: one with the LibraryProduct and all non-macOS platforms, and one with the FrameworkProduct and the MacOS platforms.\n\n\n\n\n\n","category":"type"},{"location":"#BinaryBuilderBase.GitSource","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.GitSource","text":"GitSource(url::String, hash::String; unpack_target::String = \"\")\n\nSpecify a remote Git repository to clone form url.  hash is the 40-character SHA1 revision to checkout after cloning.\n\nThe repository will be cloned in ${WORKSPACE}/srcdir, or in its subdirectory pointed to by the optional keyword unpack_target, if provided.\n\n\n\n\n\n","category":"type"},{"location":"#BinaryBuilderBase.LibraryProduct","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.LibraryProduct","text":"A LibraryProduct is a special kind of Product that not only needs to exist, but needs to be dlopen()'able.  You must know which directory the library will be installed to, and its name, e.g. to build a LibraryProduct that refers to \"/lib/libnettle.so\", the \"directory\" would be \"/lib\", and the \"libname\" would be \"libnettle\".  Note that a LibraryProduct can support multiple libnames, as some software projects change the libname based on the build configuration.\n\n\n\n\n\n","category":"type"},{"location":"#BinaryBuilderBase.Product","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.Product","text":"A Product is an expected result after building or installation of a package.\n\nExamples of Products include LibraryProduct, FrameworkProduct, ExecutableProduct and FileProduct. All Product types must define the following minimum set of functionality:\n\nlocate(::Product): given a Product, locate it within the wrapped Prefix returning its location as a string\nsatisfied(::Product): given a Product, determine whether it has been successfully satisfied (e.g. it is locateable and it passes all callbacks)\nvariable_name(::Product): return the variable name assigned to a Product\nrepr(::Product): Return a representation of this Product, useful for auto-generating source code that constructs Products, if that's your thing.\n\n\n\n\n\n","category":"type"},{"location":"#BinaryBuilderBase.UserNSRunner","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.UserNSRunner","text":"UserNSRunner\n\nA UserNSRunner represents an \"execution context\", an object that bundles all necessary information to run commands within the container that contains our crossbuild environment.  Use run() to actually run commands within the UserNSRunner, and runshell() as a quick way to get an interactive shell within the crossbuild environment.\n\n\n\n\n\n","category":"type"},{"location":"#Functions-1","page":"BinaryBuilderBase.jl Documentation","title":"Functions","text":"","category":"section"},{"location":"#","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.jl Documentation","text":"Modules = [BinaryBuilderBase]\nOrder = [:function]","category":"page"},{"location":"#BinaryBuilderBase.bindir-Tuple{Prefix}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.bindir","text":"bindir(prefix::Prefix)\n\nReturns the binary directory for the given prefix.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.choose_shards-Tuple{Base.BinaryPlatforms.AbstractPlatform}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.choose_shards","text":"choose_shards(p::AbstractPlatform; rootfs_build, ps_build, GCC_builds,\n                           LLVM_builds, archive_type)\n\nThis method chooses, given a Platform, which shards to download, extract and mount, returning a list of CompilerShard objects.  At the moment, this always consists of four shards, but that may not always be the case.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.compress_dir-Tuple{AbstractString}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.compress_dir","text":"compress_dir(dir::AbstractString;\n             compressor_stream = GzipCompressorStream,\n             level::Int = 9,\n             extension::AbstractString = \".gz\",\n             verbose::Bool = false)\n\nCompress all files in dir using the specified compressor_stream with compression level equal to level, appending extension to the filenames. Remove the original uncompressed files at the end.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.download_source","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.download_source","text":"download_source(source::AbstractSource; verbose::Bool = false)\n\nDownload the given source.  All downloads are cached within the BinaryBuilder downloads storage directory.\n\n\n\n\n\n","category":"function"},{"location":"#BinaryBuilderBase.expand_cxxstring_abis-Tuple{Base.BinaryPlatforms.AbstractPlatform}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.expand_cxxstring_abis","text":"expand_cxxstring_abis(p::AbstractPlatform; skip=Sys.isbsd)\n\nGiven a Platform, returns an array of Platforms with a spread of identical entries with the exception of the cxxstring_abi tag within the Platform object.  This is used to take, for example, a list of supported platforms and expand them to include multiple GCC versions for the purposes of ABI matching.\n\nIf the given Platform already specifies a cxxstring_abi (as opposed to nothing) only that Platform is returned.  If skip is a function for which skip(platform) evaluates to true, the given platform is not expanded.  By default FreeBSD and macOS platforms are skipped, due to their lack of a dependence on libstdc++ and not needing this compatibility shim.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.expand_gfortran_versions-Tuple{Base.BinaryPlatforms.AbstractPlatform}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.expand_gfortran_versions","text":"expand_gfortran_versions(p::AbstractPlatform)\n\nGiven a Platform, returns an array of Platforms with a spread of identical entries with the exception of the libgfortran_version tag within the Platform.  This is used to take, for example, a list of supported platforms and expand them to include multiple GCC versions for the purposes of ABI matching.  If the given Platform already specifies a libgfortran_version (as opposed to nothing) only that Platform is returned.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.expand_microarchitectures-Tuple{Base.BinaryPlatforms.AbstractPlatform}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.expand_microarchitectures","text":"expand_microarchitectures(p::AbstractPlatform)\n\nGiven a Platform, returns a vector of Platforms with differing march attributes as specified by the ARCHITECTURE_FLAGS mapping.  If the given Platform alread has a march tag specified, only that platform is returned.\n\njulia> using BinaryBuilderBase\n\njulia> expand_microarchitectures(Platform(\"x86_64\", \"freebsd\"))\n4-element Array{Platform,1}:\n ExtendedPlatform(Platform(\"x86_64\", \"freebsd\"); march=\"avx\")\n ExtendedPlatform(Platform(\"x86_64\", \"freebsd\"); march=\"avx2\")\n ExtendedPlatform(Platform(\"x86_64\", \"freebsd\"); march=\"avx512\")\n ExtendedPlatform(Platform(\"x86_64\", \"freebsd\"); march=\"x86_64\")\n\njulia> expand_microarchitectures(Platform(\"armv7l\", \"linux\")\n3-element Array{Platform,1}:\n ExtendedPlatform(Linux(:armv7l, libc=:glibc, call_abi=:eabihf); march=\"armv7l\")\n ExtendedPlatform(Linux(:armv7l, libc=:glibc, call_abi=:eabihf); march=\"neonvfpv4\")\n\njulia> expand_microarchitectures(Platform(\"aarch64\", \"linux\")\n3-element Array{Platform,1}:\n ExtendedPlatform(Platform(\"aarch64\", \"linux\"; libc=\"glibc\"); march=\"armv8\")\n ExtendedPlatform(Platform(\"aarch64\", \"linux\"; libc=\"glibc\"); march=\"carmel\")\n ExtendedPlatform(Platform(\"aarch64\", \"linux\"; libc=\"glibc\"); march=\"thunderx2\")\n\njulia> expand_microarchitectures(Platform(\"i686\", \"windows\")\n1-element Array{Windows,1}:\n Platform(\"i686\", \"windows\")\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.expand_microarchitectures-Tuple{Vector{var\"#s999\"} where var\"#s999\"<:Base.BinaryPlatforms.AbstractPlatform}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.expand_microarchitectures","text":"expand_microarchitectures(ps::Vector{<:Platform})\n\nExpand all platforms in the given vector with the supported microarchitectures.\n\njulia> using BinaryBuilderBase\n\njulia> expand_microarchitectures(filter!(p -> p isa Linux && libc(p) == :glibc, supported_platforms()))\n12-element Array{Platform,1}:\n Platform(\"i686\", \"linux\"; libc=\"glibc\")\n ExtendedPlatform(Platform(\"x86_64\", \"linux\"; libc=\"glibc\"); march=\"avx\")\n ExtendedPlatform(Platform(\"x86_64\", \"linux\"; libc=\"glibc\"); march=\"avx2\")\n ExtendedPlatform(Platform(\"x86_64\", \"linux\"; libc=\"glibc\"); march=\"avx512\")\n ExtendedPlatform(Platform(\"x86_64\", \"linux\"; libc=\"glibc\"); march=\"x86_64\")\n ExtendedPlatform(Platform(\"aarch64\", \"linux\"; libc=\"glibc\"); march=\"armv8\")\n ExtendedPlatform(Platform(\"aarch64\", \"linux\"; libc=\"glibc\"); march=\"carmel\")\n ExtendedPlatform(Platform(\"aarch64\", \"linux\"; libc=\"glibc\"); march=\"thunderx2\")\n ExtendedPlatform(Linux(:armv7l, libc=:glibc, call_abi=:eabihf); march=\"armv7l\")\n ExtendedPlatform(Linux(:armv7l, libc=:glibc, call_abi=:eabihf); march=\"neonvfpv4\")\n Platform(\"powerpc64le\", \"linux\"; libc=\"glibc\")\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.gcc_version-Tuple{Base.BinaryPlatforms.AbstractPlatform, Vector{BinaryBuilderBase.GCCBuild}}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.gcc_version","text":"gcc_version(p::AbstractPlatform, , GCC_builds::Vector{GCCBuild})\n\nReturns the closest matching GCC version number for the given particular platform, from the given set of options.  The compiler ABI and the microarchitecture of the platform will be taken into account.  If no match is found, returns an empty list.\n\nThis method assumes that the compiler ABI of the platform represents a platform that binaries will be run on, and thus versions are always rounded down; e.g. if the platform supports a libstdc++ version that corresponds to GCC 5.1.0, but the only GCC versions available to be picked from are 4.8.5 and 5.2.0, it will return 4.8.5, as binaries compiled with that version will run on this platform, whereas binaries compiled with 5.2.0 may not.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.generate_compiler_wrappers!-Tuple{Base.BinaryPlatforms.AbstractPlatform}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.generate_compiler_wrappers!","text":"generate_compiler_wrappers!(platform::AbstractPlatform; bin_path::AbstractString,\n                            host_platform::AbstractPlatform = Platform(\"x86_64\", \"linux\"; libc=\"musl\"),\n                            rust_platform::AbstractPlatform = Platform(\"x86_64\", \"linux\"; libc=\"glibc\"),\n                            compilers::Vector{Symbol} = [:c],\n                            allow_unsafe_flags::Bool = false,\n                            lock_microarchitecture::Bool = true)\n\nWe generate a set of compiler wrapper scripts within our build environment to force all build systems to honor the necessary sets of compiler flags to build for our systems. Note that while platform_envs() sets many environment variables, those values are intended to be optional/overridable.  These values, while still overridable by directly invoking a compiler binary directly (e.g. /opt/{target}/bin/{target}-gcc), are much more difficult to override, as the flags embedded in these wrappers are absolutely necessary, and even simple programs will not compile without them.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.get_concrete_platform-Tuple{Base.BinaryPlatforms.AbstractPlatform}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.get_concrete_platform","text":"get_concrete_platform(platform::AbstractPlatform;\n                      preferred_gcc_version = nothing,\n                      preferred_llvm_version = nothing,\n                      compilers = nothing)\n\nReturn the concrete platform for the given platform based on the GCC compiler ABI.  The set of shards is chosen by the keyword arguments (see choose_shards).\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.get_concrete_platform-Tuple{Platform, Vector{CompilerShard}}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.get_concrete_platform","text":"get_concrete_platform(platform::Platform, shards::Vector{CompilerShard})\n\nReturn the concrete platform for the given platform based on the GCC compiler ABI in the shards.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.includedir-Tuple{Prefix}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.includedir","text":"includedir(prefix::Prefix)\n\nReturns the include directory for the given prefix\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.libdirs","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.libdirs","text":"libdirs(prefix::Prefix, platform = HostPlatform())\n\nReturns the library directories for the given prefix (note that this differs between unix systems and windows systems, and between 32- and 64-bit systems).\n\n\n\n\n\n","category":"function"},{"location":"#BinaryBuilderBase.locate-Tuple{ExecutableProduct, Prefix}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.locate","text":"locate(ep::ExecutableProduct, prefix::Prefix;\n       platform::AbstractPlatform = HostPlatform(),\n       verbose::Bool = false,\n       isolate::Bool = false)\n\nIf the given executable file exists and is executable, return its path.\n\nOn all platforms, an ExecutableProduct checks for existence of the file.  On non-Windows platforms, it will check for the executable bit being set. On Windows platforms, it will check that the file ends with \".exe\", (adding it on automatically, if it is not already present).\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.locate-Tuple{FileProduct, Prefix}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.locate","text":"locate(fp::FileProduct, prefix::Prefix;\n       platform::AbstractPlatform = HostPlatform(),\n       verbose::Bool = false,\n       isolate::Bool = false)\n\nIf the given file exists, return its path.  The platform and isolate arguments are is ignored here, but included for uniformity.  For ease of use, we support a limited number of custom variable expansions such as ${target}, and ${nbits}, so that the detection of files within target-specific folders named things like /lib32/i686-linux-musl is simpler.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.locate-Tuple{LibraryProduct, Prefix}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.locate","text":"locate(lp::LibraryProduct, prefix::Prefix;\n       verbose::Bool = false,\n       platform::AbstractPlatform = HostPlatform())\n\nIf the given library exists (under any reasonable name) and is dlopen()able, (assuming it was built for the current platform) return its location.  Note that the dlopen() test is only run if the current platform matches the given platform keyword argument, as cross-compiled libraries cannot be dlopen()ed on foreign platforms.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.logdir-Tuple{Prefix}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.logdir","text":"logdir(prefix::Prefix)\n\nReturns the logs directory for the given prefix.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.package-Tuple{Prefix, AbstractString, VersionNumber}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.package","text":"package(prefix::Prefix, output_base::AbstractString,\n        version::VersionNumber;\n        platform::AbstractPlatform = HostPlatform(),\n        verbose::Bool = false, force::Bool = false)\n\nBuild a tarball of the prefix, storing the tarball at output_base, appending a version number, a platform-dependent suffix and a file extension. If no platform is given, defaults to current platform. Returns the full path to, the SHA256 hash and the git tree SHA1 of the generated tarball.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.preferred_cxxstring_abi-Tuple{Base.BinaryPlatforms.AbstractPlatform, CompilerShard}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.preferred_cxxstring_abi","text":"preferred_cxxstring_abi(platform::AbstractPlatform, shard::CompilerShard;\n                        gcc_builds::Vector{GCCBuild} = available_gcc_builds)\n\nReturn the C++ string ABI preferred by the given platform or GCCBootstrap shard.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.preferred_libgfortran_version-Tuple{Base.BinaryPlatforms.AbstractPlatform, CompilerShard}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.preferred_libgfortran_version","text":"preferred_libgfortran_version(platform::AbstractPlatform, shard::CompilerShard;\n                              gcc_builds::Vector{GCCBuild} = available_gcc_builds)\n\nReturn the libgfortran version preferred by the given platform or GCCBootstrap shard.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.satisfied-Tuple{Product, Prefix}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.satisfied","text":"satisfied(p::Product;\n          platform::AbstractPlatform = HostPlatform(),\n          verbose::Bool = false,\n          isolate::Bool = false)\n\nGiven a Product, return true if that Product is satisfied, e.g. whether a file exists that matches all criteria setup for that Product. If isolate is set to true, will isolate all checks from the main Julia process in the event that dlopen()'ing a library might cause issues.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.setup_dependencies-Tuple{Prefix, Vector{Pkg.Types.PackageSpec}, Base.BinaryPlatforms.AbstractPlatform}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.setup_dependencies","text":"setup_dependencies(prefix::Prefix, dependencies::Vector{PackageSpec}, platform::AbstractPlatform; verbose::Bool = false)\n\nGiven a list of JLL package specifiers, install their artifacts into the build prefix. The artifacts are installed into the global artifact store, then copied into a temporary location, then finally symlinked into the build prefix.  This allows us to (a) save download bandwidth by not downloading the same artifacts over and over again, (b) maintain separation in the event of catastrophic containment failure, avoiding hosing the main system if a build script decides to try to modify the dependent artifact files, and (c) keeping a record of what files are a part of dependencies as opposed to the package being built, in the form of symlinks to a specific artifacts directory.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.setup_workspace-Tuple{AbstractString, Vector{T} where T}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.setup_workspace","text":"setup_workspace(build_path::String, sources::Vector{SetupSource};\n                verbose::Bool = false)\n\nSets up a workspace within build_path, creating the directory structure needed by further steps, unpacking the source within build_path, and defining the environment variables that will be defined within the sandbox environment.\n\nThis method returns the Prefix to install things into, and the runner that can be used to launch commands within this workspace.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.supported_platforms-Tuple{}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.supported_platforms","text":"supported_platforms(;exclude::Union{Vector{<:Platform},Function}=x->false)\n\nReturn the list of supported platforms as an array of Platforms.  These are the platforms we officially support building for, if you see a mapping in get_shard_hash() that isn't represented here, it's probably because that platform is still considered \"in beta\".\n\nPlatforms can be excluded from the list by specifying an array of platforms to exclude i.e. supported_platforms(exclude=[Platform(\"i686\", \"windows\"), Platform(\"x86_64\", \"windows\")]) or a function that returns true for exclusions i.e.\n\nsupported_platforms(exclude=Sys.islinux)\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.temp_prefix-Tuple{Function}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.temp_prefix","text":"temp_prefix(func::Function)\n\nCreate a temporary prefix, passing the prefix into the user-defined function so that build/packaging operations can occur within the temporary prefix, which is then cleaned up after all operations are finished.  If the path provided exists already, it will be deleted.\n\nUsage example:\n\nout_path = abspath(\"./libfoo\")\ntemp_prefix() do p\n    # <insert build steps here>\n\n    # tarball up the built package\n    tarball_path, tarball_hash = package(p, out_path)\nend\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.variable_name-Tuple{Product}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.variable_name","text":"variable_name(p::Product)\n\nReturn the variable name associated with this Product as a string\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.abi_agnostic-Tuple{Platform}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.abi_agnostic","text":"abi_agnostic(p::AbstractPlatform)\n\nStrip out any tags that are not the basic annotations like libc and call_abi.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.accept_apple_sdk-Tuple{IO, IO}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.accept_apple_sdk","text":"accept_apple_sdk(ins::IO, outs::IO) -> Bool\n\nAsk the user whether they accept the terms of the macOS SDK, and return a boolean with their choice.  Write messages to outs, read input from ins.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.artifact_name-Tuple{CompilerShard}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.artifact_name","text":"artifact_name(cs::CompilerShard)\n\nReturn the bound artifact name for a particular shard.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.chown_cleanup-Tuple{DockerRunner}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.chown_cleanup","text":"chown_cleanup(dr::DockerRunner)\n\nOn Linux, the user id inside of the docker container doesn't correspond to ours on the outside, so permissions get all kinds of screwed up.  To fix this, we have to chown -R $(id -u):$(id -g) $prefix, which really sucks, but is still better than nothing.  This is why we prefer the UserNSRunner on Linux.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.collect_jlls-Tuple{Dict, Set{var\"#s4\"} where var\"#s4\"<:AbstractString}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.collect_jlls","text":"collect_jlls(manifest::Dict, dependencies::Vector{<:AbstractString})\n\nReturn a Set of all JLL packages in the manifest with dependencies being the list of direct dependencies of the environment.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.create_and_bind_mutable_artifact!-Tuple{Function, String}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.create_and_bind_mutable_artifact!","text":"create_and_bind_mutable_artifact!(f::Function, art_name::String)\n\nCreate (and bind) an artifact to MutableArtifacts.toml in one fell swoop. Used in things like .squashfs UID remapping and BB wizard state serialization.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.download_all_artifacts-Tuple{}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.download_all_artifacts","text":"download_all_shards(; verbose::Bool=false)\n\nHelper function to download all shards/helper binaries so that no matter what happens, you don't need an internet connection to build your precious, precious binaries.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.enable_apple_file-Tuple{}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.enable_apple_file","text":"enable_apple_file()\n\nReturn the path to file that, if exists, indicates that the user accepts to download macOS SDK.  The file is automatically created when the package is loaded if the environment variable BINARYBUILDER_AUTOMATIC_APPLE is set to \"true\".\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.generate_per_uid_squashfs","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.generate_per_uid_squashfs","text":"generate_per_uid_squashfs(cs, new_uid = getuid())\n\nIn order for the sandbox to work well, we need to have the uids of the squashfs images match the uid of the current unprivileged user.  Unfortunately there is no mount-time option to do this for us.  Fortunately, squashfs is simple enough that if the ID table is uncompressed, we can just manually patch the uids to be what we need.  This function performs this operation, by rewriting all UIDs and GIDs to the given new_uid (which defaults to the current user's UID)..\n\n\n\n\n\n","category":"function"},{"location":"#BinaryBuilderBase.get_mutable_artifact_path-Tuple{String}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.get_mutable_artifact_path","text":"get_mutable_artifact_path(art_name::String)\n\nConvenience wrapper to get an artifact bound within MutableArtifacts.toml. Returns nothing if artifact not bound yet.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.getgid-Tuple{}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.getgid","text":"getgid()\n\nWrapper around libc's getgid() function\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.getuid-Tuple{}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.getuid","text":"getuid()\n\nWrapper around libc's getuid() function\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.import_docker_image-Tuple{CompilerShard, String}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.import_docker_image","text":"import_docker_image(rootfs::CompilerShard; verbose::Bool = false)\n\nChecks to see if the given rootfs has been imported into docker yet; if it hasn't, then do so so that we can run things like:\n\ndocker run -ti binarybuilder_rootfs:v2018.08.27 /bin/bash\n\nWhich, after all, is the foundation upon which this whole doodad is built.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.is_ecryptfs-Tuple{AbstractString}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.is_ecryptfs","text":"is_ecryptfs(path::AbstractString; verbose::Bool=false)\n\nChecks to see if the given path (or any parent directory) is placed upon an ecryptfs mount.  This is known not to work on current kernels, see this bug for more details: https://bugzilla.kernel.org/show_bug.cgi?id=197603\n\nThis method returns whether it is encrypted or not, and what mountpoint it used to make that decision.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.is_mounted-Tuple{CompilerShard, AbstractString}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.is_mounted","text":"is_mounted(cs::CompilerShard, build_prefix::String)\n\nReturn true if the given shard is mounted.  Uses run() so will error out if something goes awry.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.macos_sdk_already_installed-Tuple{}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.macos_sdk_already_installed","text":"macos_sdk_already_installed()\n\nReturns true if any piece of the MacOS SDK is already installed.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.map_target-Tuple{CompilerShard}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.map_target","text":"map_target(cs::CompilerShard)\n\nReturn the location this compiler shard should be mounted at.  We basically analyze the name and platform of this shard and return a path based on that.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.mount-Tuple{CompilerShard, AbstractString}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.mount","text":"mount(cs::CompilerShard, build_prefix::String)\n\nMount a compiler shard, if possible.  Uses run() so will error out if something goes awry.  Note that this function only does something when using a .squashfs shard, with a UserNS or Docker runner, on Linux. All other combinations of shard archive type, runner and platform result in a no-op from this function.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.platform_envs-Tuple{Base.BinaryPlatforms.AbstractPlatform, AbstractString}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.platform_envs","text":"platform_envs(platform::AbstractPlatform)\n\nGiven a platform, generate a Dict mapping representing all the environment variables to be set within the build environment to force compiles toward the defined target architecture.  Examples of things set are PATH, CC, RANLIB, as well as nonstandard things like target.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.platform_exeext-Tuple{Base.BinaryPlatforms.AbstractPlatform}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.platform_exeext","text":"platform_exeext(p::AbstractPlatform)\n\nGet the executable extension for the given Platform.  Includes the leading ..\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.runshell","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.runshell","text":"runshell(platform::AbstractPlatform = HostPlatform())\n\nLaunch an interactive shell session within the user namespace, with environment setup to target the given platform.\n\n\n\n\n\n","category":"function"},{"location":"#BinaryBuilderBase.shard_mappings-Tuple{Vector{CompilerShard}}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.shard_mappings","text":"shard_mappings(shards::Vector{CompilerShard})\n\nReturn the default mappings for a set of compiler shards\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.shard_path-Tuple{CompilerShard}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.shard_path","text":"shard_path(cs::CompilerShard)\n\nReturn the path to this shard on-disk; for unpacked shards, this is a directory. For squashfs shards, this is a file.  This will not cause a shard to be downloaded.\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.uname-Tuple{}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.uname","text":"uname()\n\nOn Linux systems, return the strings returned by the uname() function in libc\n\n\n\n\n\n","category":"method"},{"location":"#BinaryBuilderBase.unmount-Tuple{CompilerShard, String}","page":"BinaryBuilderBase.jl Documentation","title":"BinaryBuilderBase.unmount","text":"unmount(cs::CompilerShard, build_prefix::String)\n\nUnmount a compiler shard from a given build prefix, if possible.  Uses run() so will error out if something goes awry.  Note that this function only does something when using a squashfs shard on Linux.  All other combinations of shard archive type and platform result in a no-op.\n\n\n\n\n\n","category":"method"}]
}
