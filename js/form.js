class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("Play");
        this.greeting=createElement("h3");
    }
    display(){
        this.input.position(130,160);
        this.button.position(250,200);
        var title=createElement("h1");
        title.html("Car Racing Game");
        title.position(130,0);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.updateCount(playerCount);
            player.update();
           this.greeting.html("Hello"+player.name);
           this.greeting.position(130,160);
        })
    }

}