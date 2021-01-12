class ground{
    constructor(x,y,w,h){
   this.width=w   
   this.height=h 
   var properties= {isStatic:true}
  this.body=Matter.Bodies.rectangle(width/2,height-10,width,20,properties)
  Matter.World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        var star=this.body.position
    rect(star.x,star.y,this.width,this.height)
    }
}