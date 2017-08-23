const preprocessor = require('./index');
const p = preprocessor;

describe('define', () => {
  it('should inline constant expressions', () => {
    expect(p(`
// #define radians
const radians = deg => deg * Math.PI / 180;
// #define end
const startAngle = radians(20);
`)).toBe(`
const startAngle = 1.0472;
`);
  })
});

it('should not otherwise change the input', () => {
  expect(p('ana are mere')).toBe('ana are mere');
});
