function particle() {
  this.loc = new createVector(random(width), random(height));
  this.vel = new createVector(random(-1, 1), random(-1, 1));
  this.acc = new createVector(0, 0);
  this.lineWith = (p) => {
    stroke(0, map(1300 - dist, 0, 1300, -1500, 255));
    strokeWeight(5);
    line(this.loc.x, this.loc.y, p.x, p.y);
  }
  this.applyForce = (f) => {
    this.acc.add(f);
  }
  this.move = () => {
    this.loc.add(this.vel);
    this.check();
    this.vel.add(this.acc);
    this.acc.mult(0);
  }
  this.check = () => {
    if(this.loc.x < 0)
    {
      this.loc.x = 0;
      this.vel.x *= -1;
    }
    if(this.loc.x > width)
    {
      this.loc.x = width;
      this.vel.x *= -1;
    }
    if(this.loc.y < 100)
    {
      this.loc.y = 100;
      this.vel.y *= -1;
    }
    if(this.loc.y > height)
    {
      this.loc.y = height;
      this.vel.y *= -1;
    }
  }
  this.display = () => {
    this.move();
    noStroke();
    fill(0);
    ellipseMode(CENTER);
    ellipse(this.loc.x, this.loc.y, 10, 10);
  } 
}