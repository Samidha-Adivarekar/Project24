
class Circle{
    constructor(x,y,radius){

        this.body = Bodies.circle(x,y,radius);
      //this.width = width;
        //this.height = height;
        this.radius=radius;
        World.add(world, this.body);
    
        
        }
        display(){
          var pos = this.body.position;
          fill("blue");
           ellipse(pos.x, pos.y, this.radius, this.radius);
           
        }
        
}



