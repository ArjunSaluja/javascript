//Array

// const myArr=[0,1,3,2,4,5,]
// console.log(myArr[1]);
//shallow copy - is an object is copy whose properties share thesame reffernce(point to same value)
//deep copy- properties do not share the same reffernce
//const myHerro= new Array(1,2,34,4)


// console.log(myArr);
//myArr.push(24)//add at last

// // myArr.pop();
//console.log(myArr)//remove last eleny
// myArr.unshift(8)
// console.log(myArr);//add the element at first
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(4));

// const newArrr= myArr.join();//string form
// console.log(newArrr);
// console.log(myArr);
// // slice , splice

// console.log("A" ,myArr);
// const myn1=myArr.slice(1,3)
// console.log(myn1);
// console.log("B",myArr);
// // const myn2=myArr.splice(1,3)
// console.log(myn2);
// console.log("C",myArr);


const marvel_heros=["thor", "IronMan","spiderman"]
 const dc_heros=["superman", "Flash"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

//merge two array
const allHeros= marvel_heros.concat(dc_heros)
console.log(allHeros);

//spread operaters

//flat array

const another_array=[1,2,3,[23,34],34,57]
const real_array=another_array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("Arjun"));
console.log(Array.from("Arjun"));
console.log(Array.from({name:"Arjun"}));//intresting case

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3));