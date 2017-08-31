const NEWLINE = /[\r\n]/g;
const IFENV = /\/\/\s?#ifenv\s(\S*)/;
const ELSE = /\/\/\s?#else/;
const ENDIF = /\/\/\s?#endif/;

function preprocessor(buffer) {
  const lines = buffer.split(NEWLINE);
  const out = [];
  let index = 0;

  while (index < lines.length) {
    let line = lines[index];

    if (IFENV.test(line)) {
      const [, token] = line.match(IFENV);
      let keep = process.env[token] !== undefined;

      line = lines[++index];

      while (!ENDIF.test(line)) {
        if (ELSE.test(line)) {
          keep = !keep;

          line = lines[++index];
          continue;
        }

        if (keep) { out.push(line); }

        line = lines[++index];
      }

      index = index + 1;
      continue;
    }

    out.push(line);
    index = index + 1;
  }

  return out.join('\n');
}

module.exports = preprocessor;
