const user ={
    username:"arjun",
    price:99,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to websie`);// this keyword is used to is ma jitna bhi scope ha usko aceess karna ka liya and current context ko declare karna
        //console.log(this);
    }
}

// user.welcomemessage()
//  user.username="arnav"
//  user.welcomemessage()

//console.log(this);

// function chai(){
//     console.log(this);
// }
// chai()

// const chai = function(){
//     let username = 'arjun'
//     console.log(this.username);
// }
// chai()
const chai = () =>{
    let username = 'arjun'
    console.log(this.username);
}
//chai()


// const addTwo = (num1, num2)=>{
//     return num1+num2
// }

// console.log(addTwo(4,9));
const addTwo = (num1, num2)=>( num1+num2)


console.log(addTwo(4,9));