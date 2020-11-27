class Ground {
    constructor(x,y,width,height){
        var option = {
            isStatic:true,
            density:1
        }
        this.height=height;
        this.width=width;
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect (pos.x,pos.y,this.width,this.height);
    }
}