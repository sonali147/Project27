class Bob {
  constructor(x, y, radius) {
    var options = {
        'restitution':1,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.r = radius;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    fill(235, 73, 213);
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r, this.r);
    pop();
  }

};
