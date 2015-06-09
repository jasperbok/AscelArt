var fs = require('fs');
var path = require('path');

var configure = require('./config/configure');
var settings = require('./config/settings');
var Artwork = require('./art/artwork');

configure(process);

var contents = fs.readFileSync(settings.inFile, {encoding: 'utf-8'});

var art = new Artwork(contents, 20);
art.draw();
art.write(settings.outFile);