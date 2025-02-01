class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name}make a noise`);
    }
}

class dog extends Animal{
    constructor(name){
        super(name);
    }
   
}
let d =new dog('rufus');
d.speak();