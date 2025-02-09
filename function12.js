//for in
const myObject={
    js:'Javascript',
    cpp:'c++',
    rb:'ruby'
}
// forin (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
for (const key in myObject) {
   // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programing=["js","rb","py","java"]
for (const key in programing) {
    //console.log(programing[key]);
}
//map is not used in for in loop



//for each loop
const pro=["js","rb","py","java"]
// pro.forEach( function (item){//call back function don"t have ther the name 
// console.log(item);
// })

// pro.forEach((item)=>{// arrow function
// console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// pro.forEach(printMe)


pro.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const Mycoding =[
    {
        languageName:"Javascript",
        languageFilename:"js"
    },
    {
        languageName:"Java",
        languageFilename:"java"
    },
    {
    languageName:"python",
    languageFilename:"py"
},   
    
]
Mycoding.forEach((item)=>{
    console.log(item.languageName);
})