//stackmemory(primitive)-copy of that part , heapmemory(non primitive)-reference

let myYoutubename="arjuntheone"

let anothername= myYoutubename
anothername="chai our code"

console.log(myYoutubename);
console.log(anothername);

//heap

let userOne={
    email: "user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="arjun@com"

console.log(userOne.email);
console.log(userTwo.email);
