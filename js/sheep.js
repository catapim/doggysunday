class Sheep {
	
	sheepSize = 0.1;
	ticks=0;
	animation_ticks=0;
	animation_frame=0;
	direction_frame=0;
	frightened=0;
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
	isFound() {
		if(this.body.getPosition().y<0) return true;
		return false;
	}
	tick() {
		this.animation_frame = Math.round((this.animation_ticks / 100) % 1);

		let v=this.body.getLinearVelocity();
		if(v.x>0.01) {
			this.direction_frame=6;
		} else if(v.y>0.01) {
			this.direction_frame=0;
		} else if(v.x<-0.01) {
			this.direction_frame=2;
		} else if(v.y<-0.01) {
			this.direction_frame=4;
				
		} else {
			this.direction_frame=0;
		}
		this.ticks++
		if(this.frightened>0) this.frightened-=1;
		let anim_velocity=20;
		this.animation_ticks=this.animation_ticks+1+Math.round(Math.abs(v.y*anim_velocity))+Math.round(Math.abs(v.x*anim_velocity));

		let p=this.body.getPosition();
		if(Math.random()>0.999) {
			if(this.frightened) {
			} else {
				if(this.isFound()==false) {
					let random_x=(Math.random()-0.5)*100
					let random_y=(Math.random()-0.5)*100
					// console.log(p.x);
					if(p.x>4) random_x=-20.0;
					if(p.x<2) random_x=20.0;

					this.move(random_x,random_y);
				}
			}
			
		}
	}

	// move(x_axis, y_axis) {
	// 	this.body.applyForce(Vec2(x_axis, y_axis), this.body.getPosition());

	// }
	move(x_axis, y_axis) {
		this.body.applyForce(Vec2(x_axis, y_axis), this.body.getPosition());
		


	}
	frighten() {
		this.frightened=1000;
	}
	render(ctx) {
        // console.log("render")
		let p = this.body.getPosition();
		let sheepSizeInPixels = SCALE * this.sheepSize;
		let anim_sprite = this.direction_frame + this.animation_frame;

		ctx.drawImage(
			sheep_sprite,
			Math.round(anim_sprite * SPRITE_SIZE),
			0,
			SPRITE_SIZE,
			SPRITE_SIZE,
			Math.round((camera_x-p.x) * SCALE), // position x
			Math.round((camera_y-p.y) * SCALE), // position y
			sheepSizeInPixels,
			sheepSizeInPixels

		)
	}
}
