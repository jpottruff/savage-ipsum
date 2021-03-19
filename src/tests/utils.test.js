const utils = require('../utils/utils');

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

describe('getRandomInt()', () => {
  const min = 1;
  const max = 10;
  const result = utils.getRandomInt(min, max);

  test('it should return a number', () => {
    expect(result).not.toBeNaN();
  });

  test('it should be within the range (min, max) passed in', () => {
    expect(result).toBeWithinRange(min, max);
  });
});
