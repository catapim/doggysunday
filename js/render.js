function render() {
   
    // iterate over bodies and fixtures
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    var dog_sprite = new Image();
    dog_sprite.src="./src/img/dog.gif"
    console.log(dog_sprite.src)

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
            ctx.drawImage(dog_sprite,p.x-8, p.y-8, 16, 16)
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