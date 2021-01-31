class Sheep {
    constructor(x,y) {
        // Define the ground body.
        let bodyDef = {
            position: Vec2(x, y),
            userData: "sheep",
            type: 'dynamic',
            linearDamping: 1.0,
            angularDamping: 0.01,
            allowSleep:true,
            bullet: false
        };

        // Call the body factory which allocates memory for the ground body
        // from a pool and creates the ground box shape (also from a pool).
        // The body is also added to the world.
        let body = world.createBody(bodyDef);

        // Define the ground box shape.
        // The extents are the half-widths of the box.
        let box = planck.Circle(Vec2(0.0,0.0), 0.1);


        // Add the ground fixture to the ground body.
        body.createFixture(box, 0.0);
    }
}
