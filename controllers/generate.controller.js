const generateService = require('../services/generate.service');

exports.generate = function (req, res) {
    res.render('index', {paragraphs: generateService.generateParagraphs(req.query)})
}