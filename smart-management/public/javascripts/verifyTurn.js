
function verifyTurn(movements, idGame, player, game){
  //catch id of last movement
  var idLastMovement;
  for(let i = 0; i < movements.length; i++){
    if (movements[i].id == idGame) {
      idLastMovement = i;
    }
  }

  //check if the last movement was executed by same player
  var correctTurn = false;
  if (typeof idLastMovement != 'undefined') {
    if (movements[idLastMovement].player != player) {
      correctTurn = true;
    }
  } else {
    if (game.firstPlayer == player) {
        correctTurn = true;
    }
  }

  return correctTurn;
}

module.exports = {verifyTurn};
