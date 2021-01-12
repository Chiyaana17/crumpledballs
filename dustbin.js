class dustbin{
    constructor(x,y,w,h){
        this.width=w
        this.height=h
    var properties={
        isStatic:true
    }
    this.body=Matter.Bodies.rectangle(x,y,this.width,this.height)
    Matter.World.add(world,this.body)
}
    display(){
        rectMode (CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}
