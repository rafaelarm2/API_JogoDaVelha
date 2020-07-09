
//Verifica como fica a situação da "matriz" do jogo da velha para cada novo movimento e calcula resultado
function result(movements, id) {
  var gameInfo = {
    status : "Partida em andamento"
  };

  //inicialização das variáveis de apoio
  var colX = [0,0,0], colO = [0,0,0], rowX = [0,0,0], rowO = [0,0,0];
  var dia1X = 0, dia1O = 0, dia2X = 0, dia2O = 0, contMovement = 0;
  const dim_matrix = 2;

  //Para cada movimento salvo para o jogo definido pelo id, modifique o contador para cada coluna/linha/diagonal
  //de acordo com o jogador (X ou O) que fez a jogada. Se qualquer um dos contadores chegar a 3, significa que a
  //partida acabou. Se contMovement chegar a 9 significa que não é possível fazer mais jogadas.
  for(let i = 0; i < movements.length; i++){
    if (movements[i].id == id) {
      contMovement++;

      if (movements[i].player == "X") {
        colX[movements[i].position.x]++;
        rowX[movements[i].position.y]++;

        if (movements[i].position.x == movements[i].position.y) {
          dia2X++;
        }

        if ((movements[i].position.x + movements[i].position.y) == dim_matrix) {
          dia1X++;
        }

      } else {
        colO[movements[i].position.x]++;
        rowO[movements[i].position.y]++;

        if (movements[i].position.x == movements[i].position.y) {
          dia2O++;
        }

        if ((movements[i].position.x + movements[i].position.y) == dim_matrix) {
          dia1O++;
        }
      }

    }
  }

  //Define os resultados de acordo com os contadores
  if (contMovement == 9) {
    gameInfo = {
      status : "Partida finalizada",
      result : "Draw"
    };
  }

  if (colO[0] == 3 || colO[1] == 3 || colO[2] == 3 || rowO[0] == 3 || rowO[1] == 3 || rowO[2] == 3 || dia1O == 3 || dia2O == 3) {
    gameInfo = {
      status : "Partida finalizada",
      result : "O"
    };
  }

  if (colX[0] == 3 || colX[1] == 3 || colX[2] == 3 || rowX[0] == 3 || rowX[1] == 3 || rowX[2] == 3 || dia1X == 3 || dia2X == 3) {
    gameInfo = {
      status : "Partida finalizada",
      result : "X"
    };
  }

  return gameInfo;
}

module.exports = {result};
