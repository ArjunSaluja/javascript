 ////           ///////////////        FILTER   ///////////////////////////////////////// ///////////////////////
// const coding =["js","ruby","java"]
// const value = coding.forEach((item)=>{
//     console.log(item); // it will not return value 
// })
// console.log(value);
const myNums=[ 1,2,34,56,6]

const newNums=myNums.filter((num)=> num >4)// it wull take call back in  that we write the condition also and if we open the scope{} we have to write the return
console.log(newNums);
