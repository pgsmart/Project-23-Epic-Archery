class Arrow{
    constructor(x,y,w,h){
        var options = {
            isStatic: true,
            density: 0.02
        }

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Matter.Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        this.image = loadImage("assets/arrow.png")
        World.add(world,this.body);
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
    }
    shoot(){
        var arrowAngle = playerArcher.angle + 90;
        var velocity = p5.Vector.fromAngle(arrowAngle * (3.14/180))
        velocity.mult(0.3);

        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:velocity.x * 180/3.14,y:velocity.y* 180/3.14})
    }
}