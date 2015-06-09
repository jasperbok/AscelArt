var fs = require('fs');
var path = require('path');

var Artwork = require('./art/artwork');


var input = "/Users/jasperbok/Projects/ascelart/art/artwork.js";
var output = "/Users/jasperbok/Projects/ascelart/test.png";
var contents = fs.readFileSync(input, {encoding: 'utf-8'});

var art = new Artwork(contents, 20);
art.draw();
art.write(output);