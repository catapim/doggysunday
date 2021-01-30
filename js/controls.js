var isKeyPressed = false

function keyPressed(key) {
  //applyForce(force: Vec2, point: Vec2, wake?: boolean): void
  switch (key) {
    case "w":
      dogBody.setLinearVelocity(Vec2(0.0, -500.0));
      // isKeyPressed = !isKeyPressed
      // dogBody.setLinearVelocity(Vec2(0.0, -500.0));

      break;
    case "a":
      dogBody.setLinearVelocity(Vec2(-500.0, 0.0));
      
      // isKeyPressed = !isKeyPressed
      break;
    case "s":
      dogBody.setLinearVelocity(Vec2(0.0, 500.0));
      // isKeyPressed = !isKeyPressed
      
      break;
    case "d":
      dogBody.setLinearVelocity(Vec2(500.0, 0.0));
      // isKeyPressed = !isKeyPressed
      
      break;
    default:
      console.log(key);
  }
}
document.addEventListener("keypress", function (event) {
  var eventKey = event.key;
  // console.log(isKeyPressed)
  // isKeyPressed = !isKeyPressed
  // if (isKeyPressed === true) {
  keyPressed(eventKey);
  // } else {
  //   dogBody.setLinearVelocity(Vec2(0.0,0.0))

  // }

});

