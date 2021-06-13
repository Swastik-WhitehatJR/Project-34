class Ground {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var r = Math.round(random(1, 255));
    var g = Math.round(random(1, 255));
    var b = Math.round(random(1, 255));
    rectMode(CENTER);
    fill(r, g, b)
    rect(pos.x, pos.y, this.width, this.height);
  }
};