class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':0.2,
            'density':1.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
      //  this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill ("yellow")
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}

 function score(){
if (this.visibility<0 && this.visibility>-105){
  score ++;

}

}
