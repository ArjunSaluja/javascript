var obj={
    fName:"john"

}
var obj2={
    lName:"smith"
}
obj2.__proto__=obj;
console.log(obj2.fName);
