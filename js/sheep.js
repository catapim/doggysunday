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

// addFence(position_x:float,position_y:float,vertices:array)
new Sheep(20.0,20.0);
new Sheep(30.0,40.0);
new Sheep(50.0,60.0);
new Sheep(60.0,70.0);
new Sheep(90.0,25.0);
