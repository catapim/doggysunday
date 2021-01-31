var isKeyPressed = false
var force=0.1;
var x_axis=0.0;
var y_axis=0.0;

document.addEventListener("keydown", function (event) {
  
  switch (event.key) {
    case "w":
      // dogBody.setLinearVelocity(Vec2(0.0, -500.0));
      y_axis=force*-1;
      // isKeyPressed = !isKeyPressed
      // dogBody.setLinearVelocity(Vec2(0.0, -500.0));

      break;
    case "a":
      // dogBody.setLinearVelocity(Vec2(-500.0, 0.0));
      x_axis=force*-1;
      // isKeyPressed = !isKeyPressed
      break;
    case "s":
      // dogBody.setLinearVelocity(Vec2(0.0, 500.0));
      // isKeyPressed = !isKeyPressed
      y_axis=force;
      break;
    case "d":
      // dogBody.setLinearVelocity(Vec2(500.0, 0.0));
      // isKeyPressed = !isKeyPressed
      x_axis=force;
      break;
    default:
      // console.log(key);
  }

});

document.addEventListener("keyup", function (event) {
  switch(event.key) {
    case "w":
      y_axis=0.0;
    case "s":
      y_axis=0.0;
    case "a":
      x_axis=0.0;
    case "d":
      x_axis=0.0;
  }

});

