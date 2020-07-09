const {"v4": uuidv4} = require('uuid');

function newGame(req, res){
  //Gerador para ID
  const idGame = uuidv4();

  //Bloco de código que que foi usado para teste
  //const idGame = 1;

  //Gerador para o primeiro jogador
  var firstPlayer = '';
  if (Math.floor(Math.random() * 2) == 0) {
    firstPlayer = 'X'
  } else {
    firstPlayer = 'O'
  }

  const game = {
      id: idGame,
      firstPlayer: firstPlayer
  };

  return game;
}

module.exports = {newGame};
