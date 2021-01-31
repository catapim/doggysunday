var isKeyPressed = false;
var force = 0.1;
var x_axis = 0.0;
var y_axis = 0.0;
var right_pressed = false;
var left_pressed = false;
var up_pressed = false;
var down_presed = false;
var will_bark = false;
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "w":
      // dogBody.setLinearVelocity(Vec2(0.0, -500.0));
      // y_axis = force * 1;
      // isKeyPressed = !isKeyPressed
      // dogBody.setLinearVelocity(Vec2(0.0, -500.0));
      up_pressed=true;
      break;
    case "a":
      // dogBody.setLinearVelocity(Vec2(-500.0, 0.0));
      // x_axis = force * 1;
      // isKeyPressed = !isKeyPressed
      left_pressed=true;
      break;
    case "s":
      // dogBody.setLinearVelocity(Vec2(0.0, 500.0));
      // isKeyPressed = !isKeyPressed
      // y_axis = force * -1;
      down_presed=true;
      break;
    case "d":
      // dogBody.setLinearVelocity(Vec2(500.0, 0.0));
      // isKeyPressed = !isKeyPressed
      // x_axis = force * -1;
      right_pressed=true;
      break;
    default:
    // console.log(key);
  }
});

document.addEventListener("keyup", function (event) {
  switch (event.key) {
    case "w":
      // y_axis = 0.0;
      up_pressed=false;
    case "s":
      // y_axis = 0.0;
      down_presed=false;
    case "a":
      // x_axis = 0.0;
      left_pressed=false;
    case "d":
      // x_axis = 0.0;
      right_pressed=false;
  }
});
var timeout = 3;
document.addEventListener("keyup", function (event) {
  if (event.key === " ") {
      will_bark = true;
  } 
});


