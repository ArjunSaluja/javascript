class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name}make a noise`);
    }


static sing(name){
    console.log(`${name}sings tunuk tunuk`);
}
}

let d= new Animal('huskey');
Animal.sing(d.name);

class Game{
    static score=0;
    constructor(){
        this.isPlaying=false;
    }
    start(){
        this.isPlaying=true;
        console.log(`the game has started`);
    }
    end(){
        this.isPlaying=false;
        console.log(`the game has ended`);
        Game.updateScore();
    }
    static updateScore(){
        Game.score++;
        console.log(`Score: ${Game.score}`);

    }
}

const game=new Game;
game.start();
game.end();
game.end();