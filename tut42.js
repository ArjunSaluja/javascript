// sets

const arr=[ 10,20,30,40 ,30];

console.log(arr);
const s= new Set ([10,20,30,40,30]);// unique value in that

s.add(60);

s.add("hello");

console.log(s);
length=0;
for(let element of s){
    length++;
}
console.log(length);