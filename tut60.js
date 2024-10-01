// function fun(val){
//     console.log(val);
// }
// function add(a,b, callback){
// let sum= a+b;
// callback(sum);
// }
// add(5,10,fun)
// //CALLBACKFUNCTION

function loadingData(callback){
    setTimeout(()=>{
        console.log("1) loading data...");
        callback();
    },4000)
    
}
function collectingData(){
    console.log("2)collecting data,,,");
}
function approvingData(){
    console.log("3) approving data...");
}
function approved(){
    console.log("4) approved...");
}
loadingData(function(){
collectingData();
approvingData();
approved();
});