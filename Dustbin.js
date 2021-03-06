class Dustbin {
    constructor(x, y) {
      var options = {
          isStatic:true
      }
      this.x = x;
      this.y = y;
      this.bottom = Bodies.rectangle(this.x, this.y, 200, 20,options);
      this.right = Bodies.rectangle(this.x - 90, this.y - 50, 20, 100, options);
      this.left = Bodies.rectangle(this.x + 90, this.y - 50, 20, 100,options);
  
      World.add(world, this.bottom);
      World.add(world, this.right);
      World.add(world, this.left);
    }
  
    display() {
      rectMode(CENTER)
      noStroke();
      fill(255);
      rect(this.bottom.position.x, this.bottom.position.y, 200, 20);
      rect(this.left.position.x, this.left.position.y, 20, 100);
      rect(this.right.position.x, this.right.position.y, 20, 100);
  
    }
}