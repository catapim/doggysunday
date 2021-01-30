function render() {
   
    // iterate over bodies and fixtures
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // DOG
    var sprite = new Image();
    sprite.src="./src/img/dog.gif"
    console.log(sprite.src)
    let numColumns = 7;
    let numRows = 1;
    // Define the size of a frame
    let frameWidth = sprite.width / numColumns;
    let frameHeight = sprite.height / numRows;

    let currentFrame = 0

    setInterval(function()
    {
        // Pick a new frame
        currentFrame++;    
        // Make the frames loop
        let maxFrame = numColumns * numRows - 1;
        if (currentFrame > maxFrame){
            currentFrame = 0;
        }
    
        // Update rows and columns
        let column = currentFrame % numColumns;
        let row = Math.floor(currentFrame / numColumns);
    
        // Clear and draw
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(sprite, column * frameWidth, row * frameHeight, frameWidth, frameHeight, 10, 30, frameWidth, frameHeight);
    
    //Wait for next step in the loop
    }, 1);

    for (let body = world.getBodyList(); body; body = body.getNext()) {
        // for (var fixture = body.getFixtureList(); fixture; fixture = fixture.getNext()) {
        //     // draw or update fixture
        // }
     
        let p = body.getPosition();
        let userData=body.getUserData();
        if (userData == "fence") {
            ctx.fillStyle = "#000000";
            let shape=body.getFixtureList().getShape();


            ctx.moveTo(p.x, p.y);
            let v=[shape.getVertex(0),shape.getVertex(1),shape.getVertex(2),shape.getVertex(3)]
            ctx.lineTo(p.x+v[0].x, p.y+v[0].y);
            ctx.lineTo(p.x+v[1].x, p.y+v[1].y);
            ctx.lineTo(p.x+v[2].x, p.y+v[2].y);
            ctx.lineTo(p.x+v[3].x, p.y+v[3].y);

            ctx.stroke();
        } else if (userData == "sheep") {
            ctx.fillStyle = "#00FF00";
            ctx.fillRect(p.x-8, p.y-8, 16, 16);


        } else {
           
            ctx.fillStyle = "#FF0000";       
            // ctx.fillRect(p.x-8, p.y-8, 16, 16);
            ctx.drawImage(sprite,p.x-8, p.y-8, 16, 16)

        }
        

    }

    // request a new frame
    window.requestAnimationFrame(render);

}
window.requestAnimationFrame(render);
setInterval(function(){
    world.step(1/60,3,8);
    dog.dogBody.setLinearVelocity(Vec2(x_axis, y_axis));

    this.world.clearForces();
},30)