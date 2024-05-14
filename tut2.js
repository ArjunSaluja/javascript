const accountId=12345
let accountEmail= "arjun@12345"
var accountPassword="12345"
accountCity="jaipur"
//variable declare karna ka 2 method - let, var;
// scope ko {}yeah bola jata ha

//accountId= 5// not allowed ha const ko nhi change kar sakta
/*
Prefer not to use var because of issue in block scope and function scope
*/
accountEmail= "love.com"
accountPassword="212321"
accountCity="ajmer"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])