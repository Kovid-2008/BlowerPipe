class Ball{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r;
   
        var options = {
          restitution:0.8,
          density:0.1,
          isStatic:false
        }
   
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body)
    
    }
   
    show(){

        var pos = this.body.position;
        var angle = this.body.angle;
        fill("blue");
        push();
        ellipseMode(RADIUS);
        ellipse(this.x, this.y, this.r, this.r);
        pop();

    }
   }