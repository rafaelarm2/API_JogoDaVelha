
//Cria um novo movimento de acordo com os campos do requisition.body
function newMovement(req, movements){
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
