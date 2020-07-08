const {"v4": uuidv4} = require('uuid');

function newGame(){
  //Generate ID
  const idGame = uuidv4();

  //Generate first player
  var firstPlayer = '';
  if (Math.floor(Math.random() * 2) == 0) {
    firstPlayer = 'X'
  } else {
    firstPlayer = 'O'
  }

  const game = {
      idGame: idGame,
      firstPlayer: firstPlayer
  };

  return game;
}

module.exports = {newGame};
