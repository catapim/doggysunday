class Dog {
  dogBody = null;
  dogSize = 0.1;
  ticks = 0;
  animation_frame = 0;
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
    this.bark_cooldown=100;
    console.log("GUAU");
  }
  tick() {
    this.animation_frame = Math.round((this.ticks / 100) % 1);
    if(this.bark_cooldown>0) this.bark_cooldown=this.bark_cooldown-1;
  
    this.ticks++;
  }
  move(x_axis, y_axis) {
    this.dogBody.applyForce(Vec2(x_axis, y_axis), this.dogBody.getPosition());
  }
  render(ctx) {
    // console.log('dog render');
    let p = this.dogBody.getPosition();
    let dogSizeInPixels = SCALE * this.dogSize;

    let anim_sprite = 0 + this.animation_frame;

    ctx.drawImage(
      dog_sprite,
      anim_sprite * SPRITE_SIZE,
      0,
      SPRITE_SIZE,
      SPRITE_SIZE,
      p.x * SCALE,
      p.y * SCALE,
      dogSizeInPixels,
      dogSizeInPixels
    );
  }
}
