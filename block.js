class Block{
    constructor(x,y){
        var options = {
            restitution : 0.2,
            friction : 0.1
        }
        this.body = Bodies.rectangle(x,y,10,20,options);
        this.width = 10;
        this.height = 20;
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

    remove(){
        
    }
}