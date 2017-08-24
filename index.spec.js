const preprocessor = require('./index');
const p = preprocessor;

describe('define', () => {
  it('can be used with var', () => {
    expect(p(`
// #define PI
var PI = 3.1416;
// #end
const pi = PI;
`)).toBe(`
const pi = 3.1416;
`);
  })
});

it('should not otherwise change the input', () => {
  expect(p('ana are mere')).toBe('ana are mere');
});
