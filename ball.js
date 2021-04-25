class Ball{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':0.2,
            'density':1.5
        }
        this.body = Bodies.circle(x, y, radius, options);
       
        this.radius = radius;
      //  this.image = loadImage("sprites/base.png");
      this.poly=loadImage("polygon.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill ("yellow")
        imageMode(CENTER);
        image( this.poly,0, 0, this.radius, this.radius);
        pop();
      }
}