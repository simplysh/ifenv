const NEWLINE = /\n/g;

function preprocessor(buffer) {
  let output = [];

  for (line of buffer.split(NEWLINE)) {
    output.push(line);
  }

  return output.join('\n');
}

module.exports = preprocessor;
