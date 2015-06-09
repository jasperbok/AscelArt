var fs = require('fs');
var path = require('path');

var configure = require('./config/configure');
var settings = require('./config/settings');
var Artwork = require('./art/artwork');

configure(process);

// Check whether the input file exists and read it if it does.
if (fs.existsSync(settings.inFile) && fs.lstatSync(settings.inFile).isFile()) {
  var contents = fs.readFileSync(settings.inFile, {encoding: 'utf-8'});
  var art = new Artwork(contents, 5);

  art.draw();
  art.write(settings.outFile);
}
else {
  console.error("The given input file does not exist or isn't a file.");
  process.exit(1);
}