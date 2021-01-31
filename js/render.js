// Camera
var camera_x=0.0;
var camera_y=0.0;

// DOG
var dog_sprite = new Image();
dog_sprite.src="./src/img/dog.gif"
// BG
var bg = new Image();
bg.src="./src/img/grass-32.gif" 
// SHEEP
var sheep_sprite = new Image();
sheep_sprite.src="./src/img/sheep.gif"
// FLOWER
var flower_sprite = new Image();
flower_sprite.src="./src/img/white-flower.gif"
// BUSH
var bush_sprite = new Image();
bush_sprite.src="./src/img/bush.gif"

//Set the frame rate
var fps = 60;
//Get the start time
var start = Date.now()
var last_frame=Date.now();
var elapsed;
function drawPolygon(shape) {
    var vertices = shape.m_vertices;
    ctx.fillStyle = "#000000";
    ctx.beginPath(); 

    for (var i = 0; i < vertices.length; i++) {
        var v = vertices[i];
        let x=((camera_x-v.x)*SCALE)+16;
        let y=((camera_y-v.y)*SCALE)+16;
        
        if (i == 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x,y);

        }


    }
    ctx.fill();
    ctx.closePath();
      

};
let sheep_found=0;
function render() {
    
    // iterate over bodies and fixtures
    // ctx.clearRect(0, 0, WIDTH, HEIGHT);
    // BACKGROUND
    var pattern = ctx.createPattern(bg, 'repeat');
    ctx.fillStyle = pattern
    ctx.fillRect(0,0, WIDTH, HEIGHT)
    dt=Date.now()-elapsed;
    elapsed=Date.now();
    // document.getElementById("debug-info").innerHTML=camera_x;
    // score
    document.getElementById("score").innerHTML="SHEEP FOUND "+sheep_found+" / "+TOTAL_SHEEP;
    document.getElementById("how-to");
    // document.getElementById("cloud").innerHTML="<img src=\"./src/img/cloud.gif\">";

    // setTimeout()


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

    // draw flowers
    // ctx.drawImage(
    //     flower_sprite,
    //     0,
    //     0

    // )
    for(let i=0;i<flowers.length;i++) {
        // console.log(flower);
        // console.log(flowerd[0])
        ctx.drawImage(
            flower_sprite,
            (camera_x*SCALE)-flowers[i][0],
            (camera_y*SCALE)-flowers[i][1],
            32,
            32
    
        )
    }

    for(let i=0;i<bush.length;i++) {
        // console.log(flower);
        // console.log(flowerd[0])
        ctx.drawImage(
            bush_sprite,
            (camera_x*SCALE)-bush[i][0],
            (camera_y*SCALE)-bush[i][1],
            32,
            32
    
        )
    }

    

        for (let body = world.getBodyList(); body; body = body.getNext()) {
            for (var fixture = body.getFixtureList(); fixture; fixture = fixture.getNext()) {
                // draw or update fixture
                if(body.isStatic()) {
                    drawPolygon(fixture.getShape())

                }
            }
         
            let p = body.getPosition();
            let userData=body.getUserData();
            if (userData == "fence") {
                // ctx.fillStyle = "#000000";
                // let shape=body.getFixtureList().getShape();
    
                // ctx.beginPath(); 
                // ctx.moveTo(p.x, p.y);
                // let v=[shape.getVertex(0),shape.getVertex(1),shape.getVertex(2),shape.getVertex(3)]
                // ctx.lineTo(p.x+v[0].x*SCALE, p.y+v[0].y*SCALE);
                // ctx.lineTo(p.x+v[1].x*SCALE, p.y+v[1].y*SCALE);
                // ctx.lineTo(p.x+v[2].x*SCALE, p.y+v[2].y*SCALE);
                // ctx.lineTo(p.x+v[3].x*SCALE, p.y+v[3].y*SCALE);
    
                // ctx.stroke();
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
playSound("doggy_sunday")
setInterval(function(){
    // var current = Date.now(),
    // elapsed = current - start;
    // start = current;
    // console.log(elapsed);
    
    world.step(1/60);
    bodylist=world.getBodyList();
    // dog.dogBody.setLinearVelocity(Vec2(x_axis, y_axis));
    world.clearForces();
    // loop through sheep
    sheep_found=0;
    for(let i=0;i<herd.length;i++) {
        herd[i].tick();
        if(herd[i].isFound()) sheep_found+=1;
    }
    // dog
    if(typeof(dog)!="undefined") {
        dog.move(x_axis,y_axis);
        dog.tick();
        let dp=dog.dogBody.getPosition(); // dog position
        // update camera
        camera_x=dp.x+1.0;
        camera_y=dp.y+1.0;
        if(will_bark) {
            will_bark=false;
            if(!dog.bark_cooldown>0) {
                dog.bark();

                    
                for(let i=0;i<herd.length;i++) {
              
                    let sp=herd[i].body.getPosition(); // sheep position
                    var d = Math.sqrt( (sp.x-dp.x)*(sp.x-dp.x) + (sp.y-dp.y)*(sp.y-dp.y) ); // distance
                    if(d<1 && !herd[i].isFound()) {
                        let force_x=0;
                        let force_y=0;
                        // console.log(dp.y,sp.y)
                        let sheep_force=50.0-(d*2);
                        let angle=Math.atan2(sp.y-dp.y,sp.x-dp.x);
                        // console.log(angle);
                        // if(sp.x>dp.x) {
                        //     // dog is to the left of sheep
                        //     force_x=sheep_force;
                        // } else {
                        //     // dog is to the right of sheep
                        //     force_x=-sheep_force;
                        // }
                        force_x=Math.cos(angle)*sheep_force;
                        force_y=Math.sin(angle)*sheep_force;

    
                        // if(sp.y>dp.y) {
                        //     // dog is to the left of sheep
                        //     force_y=10.0;
                        // }
                        // if(sp.y<dp.y) {
                        //     // dog is to the left of sheep
                        //     force_y=-10.0;
                        // }
    
    
                        if(force_x!=0||force_y!=0) herd[i].move(force_x,force_y)
                    }
                

                }
            } 
        }
    // } else if (typeof(sheep)!="undefined") {
        // is);
    }
    

},1000/60)

// setTimeout(function(){
//     console.log('hide')
//     document.getElementById("how-to").style.display="none"
// }, 10000)