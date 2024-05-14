//Function package ma banndh kardiya

 function sayMyName(){
    // console.log("h");
    // console.log("h");
    // console.log("h");
    // console.log("h");
    // console.log("h");

 }
 //sayMyName()// execute karna ka syntax

// function addTwoNumber( number1, number2)// () inside the bracket is known as parameter
// {
//     console.log(number1+number2);
  
// }
// addTwoNumber(3, 5)// in this they know as arrgument
// addTwoNumber(3,"4")


function addTwoNumber(number1, number2){
    let result= number1+number2
    return result
    // return number1+ number2
}
const result= addTwoNumber( 9,8)
//console.log("Result:", result);

function loginUserMessage(username){
    if( username=== undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
loginUserMessage("arjun")

console.log(loginUserMessage("arjun"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());



// function calculateCartPrice(...num1){//... is known as rest operator and spread operator
//     return num1
// }
// console.log(calculateCartPrice(200, 400));

function calculateCartPrice( val1, val2,...num1){//... is known as rest operator and spread operator
    return num1
}
console.log(calculateCartPrice(200, 400,500, 6000));



const user = {
    username: "Arjun",
    price:199
}
function handleObject(anyobject){
 console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject(
    {
        username:"arjun",
        price: 399
    }

)


const myNewArray = [ 200, 400 , 100 ,600]

function returnSecondValue(getArray){
 return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200 , 400, 500 , 1000]));

