// truthy - string ka andhar true value is a truthy value 
const userEmail = ""
if(userEmail){
    console.log("got usr email");
}
else{
    console.log("not");
}
// falsy values- false, 0 , -0, BigIny 0n, "", null , undefined, NaN
// truthy values- "0" , 'false', " ",[],{}, function(){}
// if(userEmail.length===0){
//     console.log("arrat is emty");
// }
// false== 0 - true, false==''- true, 0='' true
// implement in object 
const emptyobj ={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
}


// nullish coalesing operator(??): null undefined

let val1;
val1=5??10
val2= null??10
val3= undefined??15
console.log(val1);
console.log(val2);
console.log(val3);

//terniary operator

//condition ? true :false

const iceTeaprice= 100
iceTeaprice >= 80? console.log("lss than 80 "): console.log("more than 80");