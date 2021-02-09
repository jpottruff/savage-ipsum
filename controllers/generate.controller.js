const generateService = require('../services/generate.service');

exports.generate = function (req, res) {
    res.render('results', {paragraphs: generateService.generateParagraphs(req.query)})
}