var fs = require('fs');
var path = require('path');

var input = "/Users/jasperbok/Projects/ascelart/test.txt";

var contents = fs.readFileSync(input, {encoding: 'utf-8'});



function Artwork(text) {
  this.source = text;
  this.lines = text.split('\n');
  this.width = this.getWidth();
  this.height = this.getHeight();
}

Artwork.prototype.getWidth = function getWidth() {
  var l = 0;

  this.lines.forEach(function(p) {
    l = p.length > l ? p.length : l;
  });

  return l;
};

Artwork.prototype.getHeight = function getHeight() {
  return this.lines.length - 1;
};

var art = new Artwork(contents);
console.log(art.width);
console.log(art.height);