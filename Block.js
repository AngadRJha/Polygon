class Block{
    constructor(x,y){
        var options = {
            restitution:1.4,
            
        }     
        
        this.height=40;
        this.width=30;
        this.x=x
        this.y=y
        this.body= Bodies.rectangle(x,y,30,40,options);
        World.add(world,this.body)
}
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    
}

}