class Division {
    constructor(x, y) {
      var options = {
          'isStatic': true,
      }
      this.body = Bodies.rectangle(x, y, 5, 200, options);
      this.width = 5;
      this.height = 200;
      
      World.add(world, this.body);
    }

    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
  