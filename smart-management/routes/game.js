const express = require('express');
const router = express.Router();

const {newGame} = require('../public/javascripts/newGame.js');
const {newMovement} = require('../public/javascripts/newMovement.js');
const {findGame} = require('../public/javascripts/findGame.js');
const {verifyTurn} = require('../public/javascripts/verifyTurn.js');
const {verifyMovement} = require('../public/javascripts/verifyMovement.js');
const {result} = require('../public/javascripts/result.js');

var games = [];
var movements = [];

router.post('/', function(req, res, next) {
  const game = newGame();
  games.push(game);
  res.send(game);
});

router.post('/:id/movement', function(req, res, next) {
  game = findGame(games, req.params.id.toString());

  if (typeof game.id != 'undefined') {

      if (verifyTurn(movements, req.params.id, req.body.movement.player, game)) {
        if (verifyMovement(movements, req.params.id, req.body.movement.position.x, req.body.movement.position.y)) {
          const movement = newMovement(req);
          movements.push(movement);
          //result();
          res.send(movement);
        } else {
          res.send({"msg": "Movimento inválido"})
        }
      } else {
        res.send({"msg": "Não é turno do jogador"})
      }

  } else {
    res.send({"msg": "Partida não encontrada"})
  }

});


module.exports = router;
