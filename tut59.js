// JS IS SYNCHRONUS ek ka baad ek dusra ka wait karna padaga
// console.log("tjis");
// console.log("is");
// console.log("synchromous");

// asynchronous-settimeout is use in that in a proper manner

console.log("thids");
setTimeout(()=>{
    console.log("asynchronus");
},5000)// it will print after 5 sec
console.log("is");