class GROUND {

constructor(x,y,w,h){
    var options = {
        isStatic : true 
    }
  this.ground = Bodies.rectangle(x,y,w,h,options);

  World.add (world , this.ground);
 
  this.width = w 
  this.height = h;

}

display (){
    var p = this.ground.position ;

    rectMode(CENTER);
    fill(255);
    rect(p.x, p.y, this.width, this.height); 
}

}