//object

let obj ={
    name: "bravo",
    age :21,
    "last name":"arjun",// agar space deta ha to erroe ajata ha isliya hmko string ka andhar store karna
    fun : function(){
        console.log(" i am functio m");
    }
}
// console.log(obj["age"]);
// obj.fun();// we can also creatz an array

// let a="key2";
// obj.key="item"
// obj[a]="item2"
// console.log(obj);

for(let i in  obj){// we can use  of also instead of in// Object.keys(obj)
    console.log(i);

    console.log(obj[i]);
}