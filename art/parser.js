function parse(text) {
  var parts = text.split('\n');
  var colors = {};
  var document = [];
  var previousLineType = '';

  // If the last line is empty, remove it.
  if (!parts[parts.length - 1].replace('\n', '')) {
    parts = parts.slice(0, parts.length -1);
  }

  parts.forEach(function(p, i) {
    // Matches lines like 'a=#ff0000' which are treated as color settings.
    var regex = /^(.{1})=(#[0-9a-fA-F]{3,6})$/g;
    var result = regex.exec(p);

    // This is a color configuration line.
    if (result) {
      previousLineType = 'color';
      colors[result[1]] = result[2];
    }
    // This is padding.
    else if (!p.trim() && previousLineType === 'color') {
      previousLineType = 'whitespace';
    }
    // This is content.
    else {
      document.push(p);
      previousLineType = 'content';
    }
  });

  return {
    colors: colors,
    document: document
  };
}

module.exports = parse;