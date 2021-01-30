function render() {
   
    world.step(1/60,1,1);
        
    this.world.clearForces();
    Dog.setLinearVelocity(Vec2(x_axis, y_axis));
    // iterate over bodies and fixtures
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

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
            ctx.lineTo(p.x+shape.getVertex(0).x, p.y+shape.getVertex(0).y);
            ctx.lineTo(p.x+shape.getVertex(1).x, p.y+shape.getVertex(1).y);
            ctx.lineTo(p.x+shape.getVertex(2).x, p.y+shape.getVertex(2).y);
            ctx.lineTo(p.x+shape.getVertex(3).x, p.y+shape.getVertex(3).y);

            ctx.stroke();
        } else if (userData == "sheep") {
            ctx.fillStyle = "#00FF00";
            ctx.fillRect(p.x-8, p.y-8, 16, 16);


        } else {
           
            ctx.fillStyle = "#FF0000";

       
            ctx.fillRect(p.x-8, p.y-8, 16, 16);

        }
        

    }

    // request a new frame
    window.requestAnimationFrame(render);

}
window.requestAnimationFrame(render);