const express = require('express');
const router = express.Router();
const {newGame} = require('../public/javascripts/newGame.js');

router.post('/', function(req, res, next) {
  newGame(req, res);
});

module.exports = router;
