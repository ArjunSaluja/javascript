//constructor
//they should be executed only wiyh "new" operator
// they are named with capital letter first
// technicalyy are regular function.

function User(name){
    this.name=name;

}
console.log(new User("jack"));

let person = new User("jack");

console.log(person.name);