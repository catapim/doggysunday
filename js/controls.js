
function keyPressed(key) {
    //applyForce(force: Vec2, point: Vec2, wake?: boolean): void
  switch (key) {
    case "w":
        dogBody.applyForce(Vec2(1.0, -20.0), Vec2(-300.0, -200.0), true);
        break;
    case "a":
        dogBody.applyForce(Vec2(-10.0, -10.0), Vec2(400.0, 200.0), true);
        break;
    case "s":
        dogBody.applyForce(Vec2(3.0, 3.0), Vec2(-300.0, -200.0), true);
        break;
    case "d":
        dogBody.applyForce(Vec2(400000.0, 0.0), Vec2(0.0, 0.0), true);
        break;
    default:
      console.log(key);
  }
}
document.addEventListener("keypress", function (event) {
  var eventKey = event.key;
  keyPressed(eventKey)
  // if (eventKey === "d") {
  //   console.log("event is d");
  //   dogBody.applyForce(Vec2(1.0, 1.0), Vec2(2.0, 2.0), true);
  // }
});