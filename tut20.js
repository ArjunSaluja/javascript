// code execute in java script
// call stack
//{}- global execution context this variable
// javascript is single thread 
//1. global execution context
//2. function execution contet
//3. Eval execution context
//{}- memory creation phase, execution phase
let val1= 10
let val2= 5
function addNum(num1, num2){
    let total= num1+num2
    return total
}
let result1= addNum(val1 ,val2)
let result2 =addNum(18, 2)
// how it will xecute this
// 1 global execution
//2 memory phase
// val1- undefined
// val2 - undefined
// add num- defination
// result 1- undefined
// result2 - undefined
//3 execution phase
//val1-10
//val2-5
// result1 addnum - new variable environment + execution thread ->Memory Phase           Execution context -> ek baar compete hona ka baad delete hoga
                                                          // va1-undefined       num1-10
                                                          // val2- undefined     num2-5
                                                          // total- undefiend    total-15 return in globa
//result2 addnum - new variable environment + execution thread ->Memory Phase           Execution context -> ek baar compete hona ka baad delete hoga
                                                          // va1-undefined              num1-10
                                                          // val2- undefined            num2-5
                                                          // total- undefiend           total-15 return in global   
                                                          
function one(){
    console.log("one");
}                   
function two(){
    console.log("two");
}     
function three(){
    console.log("three");
}                                       
one()