// offscreen canvas for the grass
canvas.grassCanvas = document.createElement('canvas');
canvas.grassCanvas.width=canvas.width;
canvas.grassCanvas.height=canvas.height;
var grass_ctx=canvas.grassCanvas.getContext('2d');
// BG
var bg = new Image();
bg.src="./src/img/grass-32.gif" 
bg.onload = function () {
    console.log("image is loaded");
    var grass_pattern = grass_ctx.createPattern(bg, 'repeat');
    console.log(grass_pattern);
    grass_ctx.fillStyle = grass_pattern
    // grass_ctx.fillStyle = 'orange'; //set fill color
    grass_ctx.fillRect(0,0, WIDTH, HEIGHT)
    
}
// FLOWERS
var flower_sprite = new Image();
flower_sprite.src="./src/img/white-flower.gif"
let flowers=[];
for(i=0;i<1000;i++) {
    let x=Math.round(Math.random()*10000);
    let y=Math.round(Math.random()*10000);
    flowers.push([x,y])
}
flower_sprite.onload=function() {
    console.log("flower sprite loaded");

    for(let i=0;i<flowers.length;i++) {
        // console.log(flower);
        // console.log(flowerd[0])
        grass_ctx.drawImage(
            flower_sprite,
            flowers[i][0],
            flowers[i][1],
            32,
            32
    
        )
    }
}
// BUSHES

var bush_sprite = new Image();
bush_sprite.src="./src/img/bush.gif"

let bushes=[];
for(i=0;i<1000;i++) {
    let x=Math.round(Math.random()*10000);
    let y=Math.round(Math.random()*10000);
    bushes.push([x*0.3,y*0.5])
}
bush_sprite.onload=function() {

    for(let i=0;i<bushes.length;i++) {
        // console.log(flower);
        // console.log(flowerd[0])
        grass_ctx.drawImage(
            bush_sprite,
            bushes[i][0],
            bushes[i][1],
            32,
            32

        )
        // requestAnimationFrame(0)
    }
}