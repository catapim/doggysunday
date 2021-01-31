class Dog {
    dogBody=null;
    constructor(x,y) {
        // Define the ground body.
        let dogBodyDef = {
            position: Vec2(x, y),
            userData: "dog",
            type: 'dynamic',
            linearDamping: 10.0,
            angularDamping: 0.01
        };

        // Call the body factory which allocates memory for the ground body
        // from a pool and creates the ground box shape (also from a pool).
        // The body is also added to the world.
        this.dogBody = world.createBody(dogBodyDef);

        // Define the ground box shape.
        // The extents are the half-widths of the box.
        var dogBox = planck.Box(0.1, 0.1);
        // let box = planck.Circle(Vec2(0.0,0.0), 8.0);

        // Define the dynamic body fixture.
        var dogFixtureDef = {
            shape: dogBox,
            // Set the box density to be non-zero, so it will be dynamic.
            density: 1.0,
            // Override the default friction.
            friction: 0.3,
        };

        
        // Add the ground fixture to the ground body.
        // body.createFixture(box, 0.0);
        this.dogBody.createFixture(dogFixtureDef);

    }
    
}

// var sheepNum = 5
// var i;
// for (i =0; i < sheepNum; i++) {
//     var xRandom = 20+Math.floor(Math.random()*sheepNum*10);
//     var yRandom = 20+Math.floor(Math.random()*sheepNum*30);
// }