const preprocessor = require('./index');
const fixtures = require('./fixtures');
const p = preprocessor;

beforeEach(() => {
  process.env = {};
});

describe('ifenv', () => {
  it('should keep lines if exists', () => {
    process.env['STEAM'] = 1;
    expect(p(fixtures.steam)).toBe(fixtures.steam_ok);
  });

  it('should remove lines if not exists', () => {
    expect(p(fixtures.steam)).toBe(fixtures.steam_not);
  });

  it('should remove else if exists', () => {
    process.env['GOG'] = 1;
    expect(p(fixtures.dual)).toBe(fixtures.dual_ok);
  });

  it('should keep else if not exists', () => {
    expect(p(fixtures.dual)).toBe(fixtures.dual_not);
  });
});

it('should not otherwise change the input', () => {
  expect(p(fixtures.identity)).toBe(fixtures.identity);
});
