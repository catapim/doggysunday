// DOG
var dog_sprite = new Image();
dog_sprite.src="./src/img/dog.gif"
// BG
var bg = new Image();
bg.src="./src/img/grass-32.gif" 
// SHEEP
var sheep_sprite = new Image();
sheep_sprite.src="./src/img/sheep.gif"
//Set the frame rate
var fps = 60;
//Get the start time
var start = Date.now()
var last_frame=Date.now();
var elapsed;
function render() {
    
    // iterate over bodies and fixtures
    // ctx.clearRect(0, 0, WIDTH, HEIGHT);
    // BACKGROUND
    var pattern = ctx.createPattern(bg, 'repeat');
    ctx.fillStyle = pattern
    ctx.fillRect(0,0, WIDTH, HEIGHT)
    dt=Date.now()-elapsed;
    elapsed=Date.now();
    document.getElementById("debug-info").innerHTML=x_axis;
    // // DOG

    // let numColumns = 7;
    // let numRows = 1;
    // // Define the size of a frame
    // let frameWidth = dog_sprite.width / numColumns;
    // let frameHeight = dog_sprite.height / numRows;

    // let currentFrame = 0

    // setInterval(function()
    // {
    //     // Pick a new frame
    //     currentFrame++;    
    //     // Make the frames loop
    //     let maxFrame = numColumns * numRows - 1;
    //     if (currentFrame > maxFrame){
    //         currentFrame = 0;
    //     }
    
    //     // Update rows and columns
    //     let column = currentFrame % numColumns;
    //     let row = Math.floor(currentFrame / numColumns);
    
    //     // Clear and draw
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     ctx.drawImage(dog_sprite, column * frameWidth, row * frameHeight, frameWidth, frameHeight, 10, 30, frameWidth, frameHeight);
    
    // //Wait for next step in the loop
    // }, 1);
    // if(bodylist) {
        for (let body = world.getBodyList(); body; body = body.getNext()) {
            // for (var fixture = body.getFixtureList(); fixture; fixture = fixture.getNext()) {
            //     // draw or update fixture
            // }
         
            let p = body.getPosition();
            let userData=body.getUserData();
            if (userData == "fence") {
                ctx.fillStyle = "#000000";
                let shape=body.getFixtureList().getShape();
    
                ctx.beginPath(); 
                ctx.moveTo(p.x, p.y);
                let v=[shape.getVertex(0),shape.getVertex(1),shape.getVertex(2),shape.getVertex(3)]
                ctx.lineTo(p.x+v[0].x*SCALE, p.y+v[0].y*SCALE);
                ctx.lineTo(p.x+v[1].x*SCALE, p.y+v[1].y*SCALE);
                ctx.lineTo(p.x+v[2].x*SCALE, p.y+v[2].y*SCALE);
                ctx.lineTo(p.x+v[3].x*SCALE, p.y+v[3].y*SCALE);
    
                ctx.stroke();
            } else if (userData == "sheep") {
                // sheep.render(ctx)
                // ctx.fillStyle = "#ffcccc";
                // let x=p.x*SCALE
                // let y=p.y*SCALE
                // ctx.fillRect(x, y, SCALE*0.1, SCALE*0.1);
                // sheep.render(ctx)
    
    
            } 
            for(sheep of herd) {
                sheep.render(ctx);
            }
            dog.render(ctx);
        }
    // }
    

    // request a new frame
    window.requestAnimationFrame(render);

}
window.requestAnimationFrame(render);
setInterval(function(){
    // var current = Date.now(),
    // elapsed = current - start;
    // start = current;
    // console.log(elapsed);
    
    world.step(1/60);
    bodylist=world.getBodyList();
    // dog.dogBody.setLinearVelocity(Vec2(x_axis, y_axis));
    world.clearForces();
    if(typeof(dog)!="undefined") {
        dog.move(x_axis,y_axis);
        dog.tick();
    // } else if (typeof(sheep)!="undefined") {
        // is);
    }
    

},1000/60)