// offscreen canvas for the clouds
canvas.cloudCanvas = document.createElement('canvas');
canvas.cloudCanvas.width=canvas.width;
canvas.cloudCanvas.height=canvas.height;
var clouds_ctx=canvas.cloudCanvas.getContext('2d');

for(let i=0;i<8;i++) {
    var cloud_sprite = new Image();
    cloud_sprite.src="./src/img/cloud0"+i+".png"
    cloud_sprite.onload=function() {
        console.log("cloud loaded",i);
        clouds_ctx.drawImage(cloud_sprite,Math.round(Math.random()*8000),(i*300)+1500,4000,1000);
    }
}