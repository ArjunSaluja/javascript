// symbol- represents a unique identifier

// let sym = Symbol("id");

// let sym1= Symbol("id");
// console.log(sym.toString);
// console.log(sym.description);

// console.log(sym==sym1);// false because they are unique

let id =Symbol("id");

let obj={
    name:"john",
    // [id]:1
    age:20


}
obj[id]=1;

console.log(obj.name);

for(let key in obj){
    console.log(key);
}