class Fence {
    constructor(x,y,vertices) {
        // Define the ground body.
        var groundBodyDef = {
            position: Vec2(x, y),
            userData: "fence"
        };

        // Call the body factory which allocates memory for the ground body
        // from a pool and creates the ground box shape (also from a pool).
        // The body is also added to the world.
        var groundBody = world.createBody(groundBodyDef);

        // Define the ground box shape.
        // The extents are the half-widths of the box.
        var groundBox = planck.Polygon([
            Vec2(vertices[0][0],vertices[0][1]),
            Vec2(vertices[1][0],vertices[1][1]),
            Vec2(vertices[2][0],vertices[2][1]),
            Vec2(vertices[3][0],vertices[3][1])
        ]);

        // Add the ground fixture to the ground body.
        groundBody.createFixture(groundBox, 0.0);
    }
}

// addFence(position_x:float,position_y:float,vertices:array)
new Fence(0.0,0.0,[
    [0.0,0.0],
    [10.0,0.0],
    [10.0,HEIGHT],
    [0.0,HEIGHT]
]);
new Fence(0.0,0.0,[
    [0.0,0.0],
    [WIDTH,0.0],
    [WIDTH,10.0],
    [0.0,10.0]
]);


new Fence(200.0,0.0,[
    [0.0,0.0],
    [10.0,0.0],
    [10.0,200,0],
    [0.0,200.0]
]);


new Fence(50.0,200.0,[
    [0.0,0.0],
    [50.0,0.0],
    [50.0,20,0],
    [0.0,20.0]
]);
