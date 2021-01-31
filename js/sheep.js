class Sheep {
	
	sheepSize = 0.1;
	ticks=0;
	animation_frame=0;
	
	constructor(x,y) {
        // Define the ground body.
        let sheepBodyDef = {
            position: Vec2(x, y),
            userData: "sheep",
            type: 'dynamic',
            linearDamping: 1.0,
            angularDamping: 0.01,
            allowSleep:false,
            bullet: false
        };

        // Call the body factory which allocates memory for the ground body
        // from a pool and creates the ground box shape (also from a pool).
        // The body is also added to the world.
        this.body = world.createBody(sheepBodyDef);

        // Define the ground box shape.
        // The extents are the half-widths of the box.
        let box = planck.Circle(Vec2(0.0,0.0), 0.05);


        // Add the ground fixture to the ground body.
		this.body.createFixture(box, 0.0);
		
	}
	tick() {
		this.animation_frame=Math.round((this.ticks/100)%1);
		this.ticks++
	}

	// move(x_axis, y_axis) {
	// 	this.body.applyForce(Vec2(x_axis, y_axis), this.body.getPosition());

	// }
	move(x_axis, y_axis) {
		this.body.applyForce(Vec2(x_axis, y_axis), this.body.getPosition());
	  }
	render(ctx) {
        // console.log("render")
		let p = this.body.getPosition();
		let sheepSizeInPixels = SCALE * this.sheepSize;
		let anim_sprite = 0 + this.animation_frame;

		ctx.drawImage(
			sheep_sprite,
			anim_sprite * SPRITE_SIZE,
			0,
			SPRITE_SIZE,
			SPRITE_SIZE,
			p.x * SCALE,
			p.y * SCALE,
			sheepSizeInPixels,
			sheepSizeInPixels

		)
	}
}
