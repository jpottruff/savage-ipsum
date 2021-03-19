/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * @param {number} min - the lowest value 
 * @param {number} max - the highest value
 * @returns {number} a random number between min and max 
 */
exports.getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}