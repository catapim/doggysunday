// Camera
var camera_x=0.0;
var camera_y=0.0;
var camera_center_x=(document.body.clientWidth/2)/SCALE;
var camera_center_y=(document.body.clientHeight/2)/SCALE;
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



// HOUSE
var house_sprite = new Image();
house_sprite.src="./src/img/house.gif"


//Set the frame rate
var fps = 60;
//Get the start time
var start = Date.now()
var last_frame=Date.now();
var ticks=0;
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
let cloud_x=100;
let cloud_y=1000;
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

    // document.getElementById("how-to");
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
        // requestAnimationFrame(0)
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
    // house
    let house_x=200;
    let house_y=-100;
    ctx.drawImage(
        house_sprite,
        (camera_x*SCALE)-house_x,
        camera_y*SCALE-house_y,
        128,
        128

    )
    // cloud
    for(let i=0;i<cloud_sprites.length;i++) {
        let cloud_x=(i*1000)+(this.ticks*i/10);
        let cloud_y=i*400;
        cloud_x=(cloud_x%4000)-1000;
        cloud_y=cloud_y%4000;
        ctx.drawImage(
            cloud_sprites[i],
            // 0,0,
            (camera_x*SCALE)-cloud_x,
            camera_y*SCALE-cloud_y,
            4000,
            1000,
            // requestAnimationFrame(0);
        )
    }

    

    // request a new frame
    window.requestAnimationFrame(render);

}
window.requestAnimationFrame(render);


// randomSheepSound();
function render_score() {
    document.getElementById("score").innerHTML="SHEEP FOUND "+sheep_found+" / "+TOTAL_SHEEP;

}
setInterval(function(){
    // var current = Date.now(),
    // elapsed = current - start;
    // start = current;
    // console.log(elapsed);
// randomSheepSound();

    ticks++;
    world.step(1/60);
    bodylist=world.getBodyList();
    // dog.dogBody.setLinearVelocity(Vec2(x_axis, y_axis));
    world.clearForces();
    // loop through sheep
    sheep_count=0;
    // sheep_found=0;
    for(let i=0;i<herd.length;i++) {
        herd[i].tick();
        if(herd[i].isFound()) sheep_count+=1;
    }
    if(sheep_count!=sheep_found) {
        sheep_found=sheep_count;
        render_score();
    }

    // dog
    if(typeof(dog)!="undefined") {
        dog.move(x_axis,y_axis);
        dog.tick();
        let dp=dog.dogBody.getPosition(); // dog position
        // update camera
        camera_x=dp.x+camera_center_x;
        camera_y=dp.y+camera_center_y;
        if(will_bark) {
            will_bark=false;
            if(!dog.bark_cooldown>0) {
                dog.bark();
                // loop music
                loopMusic();
                    
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
                        force_x=force_x+Math.random()-0.5;
    
                        // if(sp.y>dp.y) {
                        //     // dog is to the left of sheep
                        //     force_y=10.0;
                        // }
                        // if(sp.y<dp.y) {
                        //     // dog is to the left of sheep
                        //     force_y=-10.0;
                        // }
    
    
                        if(force_x!=0||force_y!=0) {
                            herd[i].move(force_x,force_y)
                            herd[i].frighten();
                            if(Math.random()>0.2) {
                                setTimeout(function(){
                                    // playSound("sheep",Math.min(1.0,Math.max(0.0,2.0-d)));

                                    playSound("sheep",0.4);
                        
                                },Math.random()*300)
                            }
                        }
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
render_score();
