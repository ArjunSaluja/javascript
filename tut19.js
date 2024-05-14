// Immediately Invoked Funvtion Expressions(IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()
// how iife declared
(function chai(){// name iife 
    console.log(`DB CONNECTED`);
})();

//iife scope is used to remove global scope pollution
// we can use this iife in arrow function also and we should put this ; after the task is coopleted

((name)=>{// simpple iffe 
console.log( `db connectd 124 ${name}`);
})('arjun')