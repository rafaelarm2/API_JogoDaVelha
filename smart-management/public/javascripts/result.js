const row = 2;
const col = 2;


function result(movements, id) {
  var tableGame = new Array(2);

  for (var i = 0; i < x.length; i++) {
    tableGame[i] = new Array(2);
  }

  for(let i = 0; i < movements.length; i++){
    if (movements[i].id == id) {
      movementsOfAGame[movements[i].position.x][movements[i].position.y] = movements[i].player;
    }
  }

  checkCol(movementsOfAGame);
}

function checkCol(movements) {

}

function checkRow(movements) {

}

function checkDiagonal1(movements) {

}


function checkDiagonal2(movements) {

}
