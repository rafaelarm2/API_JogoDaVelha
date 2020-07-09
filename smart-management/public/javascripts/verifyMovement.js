
//Verifica se o movimento já existe e se está entre 0 e 2
function verifyMovement(movements, id, x, y) {
  isValid = true;

  if ((x > 2 || x < 0) || (y > 2 || y < 0)) {
    isValid = false;
      return (isValid);
  }

  for(let i = 0; i < movements.length; i++){
    if (movements[i].id == id && movements[i].position.x == x && movements[i].position.y == y) {
      isValid = false;
    }
  }

  return (isValid);
}


module.exports = {verifyMovement};
