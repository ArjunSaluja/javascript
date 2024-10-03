class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name}make a noise`);
    }
}

class dog{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name}make a noise`);
    }
}
let d =new dog('rufus');
d.speak();