var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = StaticTools","category":"page"},{"location":"#StaticTools","page":"Home","title":"StaticTools","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for StaticTools.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [StaticTools]","category":"page"},{"location":"#StaticTools.SplitMix64","page":"Home","title":"StaticTools.SplitMix64","text":"SplitMix64([seed::Bits64])\n\nInitialize the internal state of a StaticCompiler-safe (non-allocating) SplitMix64 deterministic pseudorandom number generator, optionally specifying a 64-bit seed (which may be a Float64, Int64, or UInt64).\n\nIf a seed is not specified, StaticTools.time() will be used, which returns the current Unix epoch time in seconds.\n\nSee also:\n\nsplitmix64, rand\n\nExamples\n\njulia> seed = StaticTools.time() # Pick a seed\n1649890154\n\njulia> rng = SplitMix64(seed) # Initialize the generator\nSplitMix64{Int64}((1649890154,))\n\njulia> splitmix64(rng) # Draw a pseudorandom `UInt64` from the generator\n0xca764ac7b7ea31e8\n\njulia> rand(rng) # Draw a `Float64` between 0 and 1\n0.8704883051360292\n\n\n\n\n\n","category":"type"},{"location":"#StaticTools.Xoshiro256✴︎✴︎","page":"Home","title":"StaticTools.Xoshiro256✴︎✴︎","text":"Xoshiro256✴︎✴︎(seed::NTuple{4,Bits64})\n\nInitialize the internal state of a StaticCompiler-safe (non-allocating) Xoshiro256✴︎✴︎ deterministic pseudorandom number generator, specifying a 256-bit seed, which should be specified as an NTuple of four 64-bit numbers (all either Float64, Int64, or UInt64).\n\nSee also:\n\nxoshiro256✴︎✴︎, static_rng, rand\n\nExamples\n\njulia> seed = (0x9b134eccd2e63538, 0xd74ab64b2c3ecc9b, 0x70ba9c07628c27bf, 0x270a2eb658e6130b)\n(0x9b134eccd2e63538, 0xd74ab64b2c3ecc9b, 0x70ba9c07628c27bf, 0x270a2eb658e6130b)\n\njulia> rng = Xoshiro256✴︎✴︎(seed) # Initialize the generator\nXoshiro256✴︎✴︎{UInt64}((0x9b134eccd2e63538, 0xd74ab64b2c3ecc9b, 0x70ba9c07628c27bf, 0x270a2eb658e6130b))\n\njulia> xoshiro256✴︎✴︎(rng) # Draw a pseudorandom `UInt64` from the generator\n0x11059b6384fba06a\n\njulia> rand(rng) # Draw a `Float64` between 0 and 1\n0.9856766307398369\n\n\n\n\n\n","category":"type"},{"location":"#StaticTools.getc-Tuple{Ptr{StaticTools.FILE}}","page":"Home","title":"StaticTools.getc","text":"getc(fp::Ptr{FILE})\n\nLibc getc function, accessed by direct llvmcall.\n\nReads a single character from file pointer fp, returning as Int32 (-1 on EOF).\n\nExamples\n\njulia> getc(stdinp())\nc\n99\n\n\n\n\n\n","category":"method"},{"location":"#StaticTools.getchar-Tuple{}","page":"Home","title":"StaticTools.getchar","text":"getchar()\n\nLibc getchar function, accessed by direct llvmcall.\n\nReads a single character from standard input stdin, returning as UInt8.\n\nExamples\n\njulia> getchar()\nc\n0x63\n\n\n\n\n\n","category":"method"},{"location":"#StaticTools.gets!","page":"Home","title":"StaticTools.gets!","text":"gets!(s::MallocString, fp::Ptr{FILE}, n::Integer=length(s))\n\nLibc fgets function, accessed by direct llvmcall.\n\nRead up to n characters from the filestream specified by file pointer fp to the MallocString s.\n\nExamples\n\njulia> s = MallocString(undef, 100)\nm\"\"\n\njulia> gets!(s, stdinp(), 3)\nPtr{UInt8} @0x00007fb15afce550\n\njulia> s\nm\"\n\"\n\n\n\n\n\n","category":"function"},{"location":"#StaticTools.newline-Tuple{}","page":"Home","title":"StaticTools.newline","text":"newline([fp::Ptr{FILE}])\n\nPrints a single newline () to a file pointer fp, defaulting  to stdout if not specified.\n\nReturns 0 on success.\n\nExamples\n\njulia> putchar('C')\n0\n\njulia> newline() # flushes stdout\nC\n0\n\n\n\n\n\n","category":"method"},{"location":"#StaticTools.parsedlm-Tuple{Any, Char}","page":"Home","title":"StaticTools.parsedlm","text":"parsedlm([T::Type], filepath::String, delimiter::Char)\n\nParse a delimited text file, given a filepath and delimiter, and return the parsed contents as a MallocMatrix{T}, that is a 2D MallocArray containing numbers of type T.\n\nIf not specified, the parse type T will default to Float64.\n\nExamples\n\njulia> using StaticTools\n\njulia> m = (1:10) * (1:10)';\n\njulia> fp = fopen(c\"testfile.tsv\", c\"w\"); printf(fp, m); fclose(fp);\n\njulia> parsedlm(Int32, c\"testfile.tsv\", '\t')\n10×10 MallocMatrix{Int32}:\n  1   2   3   4   5   6   7   8   9   10\n  2   4   6   8  10  12  14  16  18   20\n  3   6   9  12  15  18  21  24  27   30\n  4   8  12  16  20  24  28  32  36   40\n  5  10  15  20  25  30  35  40  45   50\n  6  12  18  24  30  36  42  48  54   60\n  7  14  21  28  35  42  49  56  63   70\n  8  16  24  32  40  48  56  64  72   80\n  9  18  27  36  45  54  63  72  81   90\n 10  20  30  40  50  60  70  80  90  100\n\n\n\n\n\n","category":"method"},{"location":"#StaticTools.putchar-Tuple{Char}","page":"Home","title":"StaticTools.putchar","text":"putchar([fp::Ptr{FILE}], c::Union{Char,UInt8})\n\nLibc putchar / fputc function, accessed by direct llvmcall.\n\nPrints a single character c (either a Char or a raw UInt8) to a file pointer fp, defaulting to the current standard output stdout if not specified.\n\nReturns 0 on success.\n\nExamples\n\njulia> putchar('C')\n0\n\njulia> putchar(0x63)\n0\n\njulia> putchar('\n') # Newline, flushes stdout\nCc\n0\n\n\n\n\n\n","category":"method"},{"location":"#StaticTools.puts-Tuple{Union{MallocString, MallocArray}}","page":"Home","title":"StaticTools.puts","text":"puts([fp::Ptr{FILE}], s)\n\nLibc puts/fputs function, accessed by direct llvmcall.\n\nPrints a string s (specified either as a raw Ptr{UInt8} or else a string type such as StaticString or MallocString for which a valid pointer can be obtained) to a filestream specified by the file pointer fp, defaulting to the current standard output stdout if not specified.\n\nReturns 0 on success.\n\nExamples\n\njulia> getchar()\nc\n0x63\n\n\n\n\n\n","category":"method"},{"location":"#StaticTools.splitmix64","page":"Home","title":"StaticTools.splitmix64","text":"splitmix64([rng::SplitMix64])\n\nA StaticCompiler-safe (non-allocating) implementation of the SplitMix64 deterministic pseudorandom number generator.\n\nSee also:\n\nSplitMix64, rand\n\nExamples\n\njulia> seed = StaticTools.time() # Pick a seed\n1649890154\n\njulia> rng = SplitMix64(seed) # Initialize the generator\nSplitMix64{Int64}((1649890154,))\n\njulia> splitmix64(rng) # Draw a pseudorandom `UInt64` from the generator\n0xca764ac7b7ea31e8\n\njulia> rand(rng) # Draw a `Float64` between 0 and 1\n0.8704883051360292\n\n\n\n\n\n","category":"function"},{"location":"#StaticTools.static_rng","page":"Home","title":"StaticTools.static_rng","text":"static_rng([seed::Bits64])\n\nInitialize a StaticCompiler-safe (non-allocating) deterministic pseudorandom number generator, optionally specifying a 64-bit seed (which may be any 64-bit primitive numeric type – that is, Float64, Int64, or UInt64).\n\nIn particular, static_rng uses the specified seed value (or if not specified, the current result of StaticTools.time()) to initialize a simple SplitMix64 generator, which is then in turn used to bootstrap the larger seed required for a Xoshiro256✴︎✴︎ generator.\n\nExamples\n\njulia> rng = static_rng()\nXoshiro256✴︎✴︎{UInt64}((0x2d4c7aa97cc1a621, 0x63460fc58ff25249, 0x81498572d44bd2ec, 0x2d4e96d3a7e9fdd2))\n\njulia> rand(rng) # Draw a `Float64` between 0 and 1\n0.6577585429879329\n\njulia> rand(rng)\n0.4711097758403277\n\n\n\n\n\n","category":"function"},{"location":"#StaticTools.stderrp-Tuple{}","page":"Home","title":"StaticTools.stderrp","text":"stderrp()\n\nZero-argument function which returns a raw pointer to the current standard error filestream, stderr.\n\nExamples\n\njulia> stderrp()\nPtr{StaticTools.FILE} @0x00007fffc92b9240\n\njulia> printf(stderrp(), c\"Hi there!\n\")\nHi there!\n10\n\n\n\n\n\n","category":"method"},{"location":"#StaticTools.stdinp-Tuple{}","page":"Home","title":"StaticTools.stdinp","text":"stdinp()\n\nZero-argument function which returns a raw pointer to the current standard input filestream, stdin.\n\nExamples\n\njulia> stdinp()\nPtr{StaticTools.FILE} @0x00007fffc92b9110\n\n\n\n\n\n","category":"method"},{"location":"#StaticTools.stdoutp-Tuple{}","page":"Home","title":"StaticTools.stdoutp","text":"stdoutp()\n\nZero-argument function which returns a raw pointer to the current standard output filestream, stdout.\n\nExamples\n\njulia> stdoutp()\nPtr{StaticTools.FILE} @0x00007fffc92b91a8\n\njulia> printf(stdoutp(), c\"Hi there!\n\")\nHi there!\n10\n\n\n\n\n\n","category":"method"},{"location":"#StaticTools.xoshiro256✴︎✴︎-Tuple{Xoshiro256✴︎✴︎}","page":"Home","title":"StaticTools.xoshiro256✴︎✴︎","text":"xoshiro256✴︎✴︎(rng::Xoshiro256✴︎✴︎)\n\nA StaticCompiler-safe (non-allocating) implementation of the Xoshiro256✴︎✴︎ deterministic pseudorandom number generator, written in LLVM IR and invoked via llvmcall.\n\nSee also:\n\nXoshiro256✴︎✴︎, static_rng, rand\n\nExamples\n\njulia> seed = (0x9b134eccd2e63538, 0xd74ab64b2c3ecc9b, 0x70ba9c07628c27bf, 0x270a2eb658e6130b);\n\njulia> rng = Xoshiro256✴︎✴︎(seed) # Initialize the generator\nXoshiro256✴︎✴︎{UInt64}((0x9b134eccd2e63538, 0xd74ab64b2c3ecc9b, 0x70ba9c07628c27bf, 0x270a2eb658e6130b))\n\njulia> xoshiro256✴︎✴︎(rng) # Draw a pseudorandom `UInt64` from the generator\n0x11059b6384fba06a\n\njulia> rand(rng) # Draw a `Float64` between 0 and 1\n0.9856766307398369\n\n\n\n\n\n","category":"method"}]
}
