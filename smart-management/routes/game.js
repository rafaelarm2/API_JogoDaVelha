const express = require('express');
const router = express.Router();
const {newGame} = require('../public/javascripts/newGame.js');
games = [];

router.post('/', function(req, res, next) {
  var game = newGame();
  games.push(game);
  res.redirect('/');
  //res.redirect('/game/get');
});

// router.get('/get', function(req, res, next) {
//   console.log(games);
//   res.redirect('/');
// });


module.exports = router;
