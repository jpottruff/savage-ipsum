const generateService = require('../services/generate.service');

exports.generate = function (req, res) {
  res.render('results', { pageData: generateService.getPageData(req.query) });
};
