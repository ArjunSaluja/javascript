let emp={};
emp.name="john";
console.log(Object.getOwnPropertyDescriptor(emp,"name"));


// Object.defineProperty(emp,"age",
// {
//     value:21,
//     writable:true;
//     comfigurable:true;
//     enumerable:true;
// });