const WIDTH=6400;
const HEIGHT=4800;
const SCALE=256;
const SPRITE_SIZE=32;
const TOTAL_SHEEP=30;
var Vec2 = planck.Vec2;

// Define the gravity vector.
var gravity = Vec2(0.0, 0.0);

// Construct a world object, which will hold and simulate the rigid bodies.
var world = planck.World({allowSleep:true,gravity:gravity,positionIterations:1});



// Define the dynamic body. We set its position and call the body factory.
// var dogBody = world.createBody({
//     type: 'dynamic',
//     position: Vec2(100.0, 100.0),
// });

// Define another box shape for our dynamic body.
// var dogBox = planck.Box(8.0, 8.0);

// Define the dynamic body fixture.
// var dogFixtureDef = {
//     shape: dogBox,
//     // Set the box density to be non-zero, so it will be dynamic.
//     density: 1.0,
//     // Override the default friction.
//     friction: 0.3,
// };

// Add the shape to the body.
// dogBody.createFixture(dogFixtureDef);

// Prepare for simulation. Typically we use a time step of 1/60 of a
// second (60Hz) and 10 iterations. This provides a high quality simulation
// in most game scenarios.
var timeStep = 1.0 / 30.0;
var velocityIterations = 1;
var positionIterations = 1;
let flowers=[];
let bush=[];

for(i=0;i<1000;i++) {
    let x=Math.round(Math.random()*10000);

    let y=Math.round(Math.random()*10000);
    flowers.push([x,y])
    bush.push([x*0.3,y*0.5])
}

// // This is our little game loop.
// for (var i = 0; i < 60; ++i) {
//     // Instruct the world to perform a single step of simulation.
//     // It is generally best to keep the time step and iterations fixed.
//     world.step(timeStep, velocityIterations, positionIterations);

//     // Now print the position and angle of the body.
//     var position = body.getPosition();
//     var angle = body.getAngle();

//     console.log(position.x.toFixed(2), position.y.toFixed(2), angle.toFixed(2));
// }