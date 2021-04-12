class rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    attach(body){
        this.sling.pointA = body;
    }
    
    fly(){
        this.sling.pointA = null;
    }
    display(){
        push();
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        stroke(48,22,8);
        strokeWeight(7);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}