function newMovement(req){
  //console.log(req);
  movement = {
    id : req.body.movement.id,
    player : req.body.movement.player,
    position : {
      x: parseInt(req.body.movement.position.x),
      y: parseInt(req.body.movement.position.y)
    }
  }
  return movement;
}

module.exports = {newMovement}
