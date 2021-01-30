const express = require('express');
const router = express.Router();
const QUOTES = require('../../models/quotes');

router.get('/', (req, res) => res.json({quotes: QUOTES}));

module.exports = router;