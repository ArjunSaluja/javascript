//Single ton - constructue

//object literals
//Symbol

const mySym = Symbol("key1")
const Juser


={

    name:"Hitesh",
    age:18,
    [mySym]:"myKey1",//Square bracket show the symbol
    location:"jaipur",
    email:"hiteshgoogle.com",
    isLoggedIn: false,
    lastLoginDaays: ["MOnday","Saturday"]

}
console.log(Juser["email"]);
console.log(Juser.email);
console.log(Juser);
console.log(Juser[mySym]);

//Object.freeze(Juser)//now we will not able to change the value of Juser

Juser.greeting= function(){
    console.log("HelloJs");
}

Juser.greeting2=function(){
    console.log(`hello js,${this.name}`);
}
console.log(Juser.greeting);
console.log(Juser.greeting());


console.log(Juser.greeting2());