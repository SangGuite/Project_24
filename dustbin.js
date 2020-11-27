class Dustbin {
    constructor(x,y,width,height){
        var option = {
            isStatic:true
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("white");
        rectMode(CENTER);
        rect (pos.x,pos.y,this.width,this.height);
    }
}