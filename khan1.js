class Man2{
    constructor(x, y, width, height) {
        var options = {
          isStatic:true,
            'restitution':0.1,
            'friction':5.0,
            'density':4.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/man.png");
       
        World.add(world, this.body);  
      }
      jump(){
        this.body.velocity.y = -10;
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        
        pop();
      }
  }