class paper{
    constructor(x,y,r){
    this.radius=r
    //this.width=w
    //this.height=h
    /*var properties={
    isStatic:false
    }*/
    this.body=Matter.Bodies.circle(x,y,r/*,properties*/)
    Matter.World.add(world,this.body)
}
display(){
       circle(this.body.position.x,this.body.position.y,this.radius*2)
   }}