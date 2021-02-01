const UTILS = require('../utils/utils');
const QUOTES = require('../models/quotes');

/**
 * Generates an array of paragraphs based on the request query
 * @param {Object} query
 * @returns {Object[]} an array of paragraph objects
 */
exports.generateParagraphs = function generateParagraphs(query) {
    let numberOfParagraphs = parseInt(query.paragraphs);
    if (Number.isNaN(numberOfParagraphs) || numberOfParagraphs === 0) {
        numberOfParagraphs = 1 
    }
    const paragraphs = []; 
    for (let i = 0; i < numberOfParagraphs; i++) {
        paragraphs.push(makeParagraph());
    }
    return paragraphs;
}

/**
 * Creates a paragraph object with 5-7 sentences
 * @returns {Object} an object with a paragraph string
 */
function makeParagraph() {
    const numberOfSentences = UTILS.getRandomInt(5, 7);
    const content = [];
    for (let i = 0; i < numberOfSentences; i++) {
        content.push(getRandomQuote());
    }
    return { paragraph: content.join(' ') };  
}

/**
 * Returns a single quote from the array of quotes
 * @returns {string} string quote
 */
function getRandomQuote() {
    const rando = UTILS.getRandomInt(0, QUOTES.length - 1);
    return QUOTES[rando];
}