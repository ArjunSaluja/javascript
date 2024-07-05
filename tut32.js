//Array

let name =["john","jane","cena"]
console.log(name);
console.log(name[2]);
console.log(name.length);
let difernetdatatype=["arjun",1,null,true]
difernetdatatype.push("ansh")//at last
difernetdatatype.unshift("karan")//At front
difernetdatatype.splice(1,2);// to delelte domething
console.log(difernetdatatype);

// method 
let num=[1,2,3,4,5,6];
num.forEach((val,index,array)=>{
    console.log(val+" "+index+" ");
})
//to add two array
let num1=[1,2,34,5,6,7];
let num2=[11,22,33,4,44,55];
console.log(num1.concat(num2));
console.log(num1.indexOf(5));
console.log(num1.reverse());
console.log(num1.sort());

let a =num1.slice(1,4);
console.log(a);

let b= num1.filter((val)=>{
    if(val>=10 && val<=25){
        return val;
    }
});
console.log(b);
//we can also find the element.

let ass='10,20,38'
let arr = num.split(',');
arr.forEach(element=>{
    console.log(element);
});
console.log(arr);
let jo =arr.join(" and");
console.log(jo);