
//Busca o jogo com um determinado ID
function findGame(games, id){
  var game = {};
  for(let i = 0; i < games.length; i++){
    if (games[i].id == id.toString()) {
      game = games[i];
    }
  }

  return game;
}

module.exports = {findGame};
