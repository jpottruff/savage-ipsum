const generateService = require('../services/generate.service');

const MOCK_QUERY = {
  paragraphs: '2',
};

describe('getPageData()', () => {
  const results = generateService.getPageData(MOCK_QUERY);

  test('it should return an object containing keys of `readyText` and `paragraphs`', () => {
    const resultKeys = Object.keys(results).sort();
    const expectedKeys = ['readyText', 'paragraphs'].sort();
    expect(resultKeys).toEqual(expectedKeys);
  });
});
