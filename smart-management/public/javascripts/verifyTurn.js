
//Verifica se é o player correto que está jogando em um determinado turno
function verifyTurn(movements, idGame, player, game){

  //Pega o último movimento realizado
  var idLastMovement;
  for(let i = 0; i < movements.length; i++){
    if (movements[i].id == idGame) {
      idLastMovement = i;
    }
  }

  //Compara com o player que está tentando realizar o próximo movimento
  //Se não houver movimentos, compara com o firstPlayer de game
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
