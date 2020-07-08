function verifyMovement(movements, id, x, y) {
  isValid = true;
  //verify if is between 0 to 2
  if ((x > 2 || x < 0) || (y > 2 || y < 0)) {
    isValid = false;
      return (isValid);
  }

  //verify if already exists
  for(let i = 0; i < movements.length; i++){
    if (movements[i].id == id && movements[i].position.x == x && movements[i].position.x == y) {
      isValid = false;
    }
  }

  return (isValid);
}


module.exports = {verifyMovement};
