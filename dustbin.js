class Dustbin{

    constructor(x,y,width,height){
    var options = { 
        isStatic: true,
        restitution:0,
         friction:1,
         density:10
    }
  
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body); 
  
    }
  
    display(){
    rectMode(CENTER);
    fill("Red");
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
     }
  
  }    