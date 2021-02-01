const express = require('express');
const router = express.Router();
const generateController = require('../../controllers/generate.controller');
// const QUOTES = require('../../models/quotes');

router.get('/', (req, res) => generateController.generate(req, res));

module.exports = router;