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

/* Rota para criar novo jogo*/
router.post('/', function(req, res, next) {
  const game = newGame();
  games.push(game);
  res.send(game);
});

/* Rota para criar um novo movimento para um determinado jogo*/
router.post('/:id/movement', function(req, res, next) {
  game = findGame(games, req.params.id.toString());

  if (typeof game.id != 'undefined') {

      if (verifyTurn(movements, req.params.id, req.body.movement.player, game)) {
        if (verifyMovement(movements, req.params.id, req.body.movement.position.x, req.body.movement.position.y)) {
          const movement = newMovement(req);
          movements.push(movement, movements, req.params.id);

          gameInfo = result(movements, req.params.id);

          if (gameInfo.status == "Partida em andamento") {
            res.send(movement);
          } else {
            res.send(gameInfo)
          }

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
