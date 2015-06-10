# AscelArt

AscelArt is a command line utility that takes a textfile as input and outputs it
as pixel art.

The name is a lame combination of ASCII and pixel art.


## Installation

AscelArt requires


## Usage

ascelart -i \<input file\> -o \<output file\> [-s \<scale\>]


## Creating input files

You create a source file by simply creating a plain text file in your favorite
editor. An example file that will product a primitive smiley could look
something like this:

    ........
    ..#..#..
    ........
    .#....#.
    ..####..
    ........

AscelArt has default colors for some characters, but they will almost never be
what you want, so you can define colors in your source document as follows:

    .=#e4c029
    #=#000
    ........
    ..#..#..
    ........
    .#....#.
    ..####..
    ........

As you can see, you can use any line in your source file to define a color or
a particular character. This follows the format

    <character>=<hex color code>

You can also add an optional blank line between your color declarations and
the actual content of your file, like this:

    .=#e4c029
    #=#000
    
    ........
    ..#..#..
    ........
    .#....#.
    ..####..
    ........
