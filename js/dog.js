class Dog {
  dogBody = null;
  dogSize = 0.1;
  ticks = 0;
  animation_frame = 0;
  direction_frame = 0;
  animation_ticks=0;

  sprite_frame =0;
  barking=false;
  bark_cooldown=0;
  constructor(x, y) {
    // Define the ground body.
    let dogBodyDef = {
      position: Vec2(x, y),
      userData: "dog",
      type: "dynamic",
      linearDamping: 10.0,
      angularDamping: 0.01,
      allowSleep: false,
    };

    // Call the body factory which allocates memory for the ground body
    // from a pool and creates the ground box shape (also from a pool).
    // The body is also added to the world.
    this.dogBody = world.createBody(dogBodyDef);

    // Define the ground box shape.
    // The extents are the half-widths of the box.
    var dogBox = planck.Circle(Vec2(0.0, 0.0), this.dogSize / 2);
    // let box = planck.Circle(Vec2(0.0,0.0), 8.0);

    // Define the dynamic body fixture.
    var dogFixtureDef = {
      shape: dogBox,
      // Set the box density to be non-zero, so it will be dynamic.
      density: 1.0,
      // Override the default friction.
      friction: 0.3,
    };

    // Add the ground fixture to the ground body.
    // body.createFixture(box, 0.0);
    this.dogBody.createFixture(dogFixtureDef);
  }
  bark() {
    this.barking=true;
    this.bark_cooldown=32;
    playSound("bark",1.0)
  }
  tick() {
    this.animation_frame = Math.round((this.animation_ticks / 100) % 1);
    if(this.bark_cooldown>0) this.bark_cooldown=this.bark_cooldown-1;
  
    let v=this.dogBody.getLinearVelocity();
    let moving=true;
		if(v.x>0.02) {
			this.direction_frame=2;
		} else if(v.y>0.01) {
			this.direction_frame=0;
		} else if(v.x<-0.02) {
			this.direction_frame=6;
		} else if(v.y<-0.01) {
			this.direction_frame=4;
				
		} else {
      this.direction_frame=4;
      moving=false;
    }
    let anim_velocity=10;
    this.animation_ticks=this.animation_ticks+1+Math.round(Math.max(Math.abs(v.y*anim_velocity),Math.abs(v.x*anim_velocity)));
    if((Math.random()>0.1)&&moving==true&&this.ticks%10==0) playSound("step",0.8);

    this.sprite_frame = this.direction_frame + this.animation_frame;
    this.ticks++;
  }
  move(x_axis, y_axis) {
    this.dogBody.applyForce(Vec2(x_axis, y_axis), this.dogBody.getPosition());
  }
  render(ctx) {
    // console.log('dog render');
    let p = this.dogBody.getPosition();
    let dogSizeInPixels = SCALE * this.dogSize;
    

    ctx.drawImage(
      dog_sprite, // image
      this.sprite_frame * SPRITE_SIZE, // start clipping x
      0, // start clipping y
      SPRITE_SIZE, // width clip
      SPRITE_SIZE, // height clip
      (camera_x-p.x) * SCALE, // position x
      (camera_y-p.y) * SCALE, // position y
      dogSizeInPixels,
      dogSizeInPixels
    );
  }
}
