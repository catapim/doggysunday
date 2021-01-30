class Sheep {
    constructor(x,y) {
        // Define the ground body.
        let bodyDef = {
            position: Vec2(x, y),
            userData: "sheep",
            type: 'dynamic'
        };

        // Call the body factory which allocates memory for the ground body
        // from a pool and creates the ground box shape (also from a pool).
        // The body is also added to the world.
        let body = world.createBody(bodyDef);

        // Define the ground box shape.
        // The extents are the half-widths of the box.
        let box = planck.Box(1.0, 1.0);


        // Add the ground fixture to the ground body.
        body.createFixture(box, 0.0);
    }
}

var sheepNum = 20
var i;
for (i =0; i < sheepNum; i++) {
    var xRandom = Math.floor(Math.random()*sheepNum*1);
    var yRandom = Math.floor(Math.random()*sheepNum*3);
    new Sheep(xRandom, yRandom)
}