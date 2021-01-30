function keyPressed(key) {
  //applyForce(force: Vec2, point: Vec2, wake?: boolean): void
  switch (key) {
    case "w":
      dogBody.setLinearVelocity(Vec2(0.0, -500.0));

      break;
    case "a":
      dogBody.setLinearVelocity(Vec2(-500.0, 0.0));
      break;
    case "s":
      dogBody.setLinearVelocity(Vec2(0.0, 500.0));
      break;
    case "d":
      dogBody.setLinearVelocity(Vec2(500.0, 0.0));
      break;
    default:
      console.log(key);
  }
}
document.addEventListener("keydown", function (event) {
  var eventKey = event.key;
  keyPressed(eventKey);
});
