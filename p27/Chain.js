class Chain {
    //constructor(bodyA, pointB){
    constructor(bodyA, bodyB, pointB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: pointB
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    show(){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        var offset = {x : this.chain.pointB.x, y : this.chain.pointB.y}
        push();
        stroke(0);
        strokeWeight(4);
        line(posA.x, posA.y, posB.x + offset.x, posB.y + offset.y);
        pop();
    }


}
