class Ground {
    constructor(x, y, width, height) {
      var options = {
          'isStatic': true,
      }
      this.body = Bodies.rectangle(x, y, 500, 20, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
  