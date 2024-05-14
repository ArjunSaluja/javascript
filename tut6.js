//data type summary

//primitive data type- call by value karka deta ha and 7 type ka hota ha 
//*string,number, boolean, null,undefined,symbol(unique),bigint

// declare a symbol
const id= Symbol('123')
const anoherId=Symbol('123')
console.log(id===anoherId);

//bigint
// at last put n after no.
//Refernce type or non primitive
//array, object,function

//array
const hero=["shaktiman","naagraj", "valo"]
//object
let myObj={
    name:"Arjun",
    age:22,
}
//function declare through variable

const myFunction=function(){
    console.log("hello world");
}

