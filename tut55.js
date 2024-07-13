// NEW - without new this will only return undefined


function fun(){

    let fname= "kasf";
    this.fname=fname()
    return this;
    
}
console.log(  new fun());

// var obj = new fun();
// log(obj.fname)