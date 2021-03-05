const UTILS = require('../utils/utils');
const QUOTES = require('../models/quotes');
const READY_TEXT = require('../models/ready-text');

/**
 * @typedef {Object} RequestQuery - the Request Query from the URL
 * @property {string} paragraphs - the number of paragraphs to be generated
 */

/**
 * @typedef {Object} ResultPageData - an Object containing the necessary data to render the Results Page
 * @property {string} readyText a random message displayed to the user when the paragraphs have been generated
 * @property {Array<Paragraph>} paragraphs an Array of Paragraph Objects
 */

/**
 * @typedef {Object} Paragraph - the Request Query from the URL
 * @property {string} text - the number of paragraphs to be generated
 */

/**
 * Generates the necessary data to display the Results Page
 * @param {RequestQuery} query
 * @returns {ResultPageData}
 */
exports.getPageData = (query) => {
  return {
    readyText: getRandomQuote(READY_TEXT),
    paragraphs: generateParagraphs(sanitizeParagraphParam(query.paragraphs)),
  };
};

/**
 * Sanitizes the `paragraph` parameter from the Request Query
 * @param {string} param
 * @returns {number} the number of paragraphs to be produced
 */
function sanitizeParagraphParam(param) {
  const defaultNum = 1;
  const maxAllowed = 25;
  let requested = parseInt(param);

  if (Number.isNaN(requested) || requested <= 0) {
    return defaultNum;
  }

  return requested > maxAllowed ? maxAllowed : requested;
}

/**
 * Generates an Array of Paragraph Objects
 * @param {number} n number of paragraphs to generate
 * @returns {Array<Paragraph>}
 */
function generateParagraphs(n) {
  const paragraphs = [];
  for (let i = 0; i < n; i++) {
    paragraphs.push(makeParagraph());
  }
  return paragraphs;
}

/**
 * Creates a 5-7 sentence Paragraph Object
 * @returns {Paragraph}
 */
function makeParagraph() {
  const numberOfSentences = UTILS.getRandomInt(5, 7);
  const sentences = [];
  for (let i = 0; i < numberOfSentences; i++) {
    sentences.push(getRandomQuote(QUOTES));
  }
  return { text: sentences.join(' ') };
}

/**
 * Returns a single random quote
 * @param {Array<string>} strArr
 * @returns {string}
 */
function getRandomQuote(strArr) {
  const rando = UTILS.getRandomInt(0, strArr.length - 1);
  return strArr[rando];
}
