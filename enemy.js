class Enemy{
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
        push();
        translate(pos.x,pos.y);
        var pos = this.body.position
        this.velocityX = -2;
        pos.x = catapult.x;
        pos.y = catapult.y;
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

    touch(){
        ifTouching(catapult)={

        }
    }

    remove(){
        
    }
}