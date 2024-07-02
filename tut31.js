//types of function 
let a= 23; // global- it will acess outisde the functiom

function local(){
    let b=14;//local- it wwill inside the function
    console.log(b);
}
local();
// function()- annonyms function


let fun = function(){
    console.log("hello");
}
fun();

//


(function(){
    console.log('hassssh');
})();

//arrow function
let as = (a,b)=>console.log(a+b);

as(23,34);