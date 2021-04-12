class ball{
    constructor(x,y,radius){
        var options = {
            restitution:0.9,
            density:1,
            friction:0.7
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}