function getKey() {
  document.addEventListener("keypress", function (event) {
    var eventKey = event.key;
    console.log(eventKey);
    keyPressed(eventKey)
    // if (eventKey === "d") {
    //   console.log("event is d");
    //   dogBody.applyForce(Vec2(1.0, 1.0), Vec2(2.0, 2.0), true);
    // }
  });
}

function keyPressed(key) {
  switch (key) {
    case "w":
        dogBody.applyForce(Vec2(1.0, 1.0), Vec2(3.0, 3.0), true);
        break;
    case "a":
        dogBody.applyForce(Vec2(1.0, 1.0), Vec2(8.0, 8.0), true);
        break;
    case "s":
        dogBody.applyForce(Vec2(1.0, 1.0), Vec2(10.0, 10.0), true);
        break;
    case "d":
        dogBody.applyForce(Vec2(1.0, 1.0), Vec2(20.0, 20.0), true);
        break;
    default:
      console.log(key);
  }
}
