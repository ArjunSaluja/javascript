//recursion- function cll itself
//1 to10
//  for(let i=1; i<=10; i++){
//     console.log(i);
//  }
//  function printNumberrecursive(n){
// if(n<=10){
//     console.log(n);
//     printNumberrecursive(n+1)
// }
//  }
//  printNumberrecursive(1)

//FACTORIAL

function fact(n){
if(n==0){
    return 1;

}
else{
    return n*fact(n-1);
}
}
console.log(fact(5));