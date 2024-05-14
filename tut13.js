//object singlteon

const tinderUser = new Object()// singleton object
const tinderUser2 = {}// non singleton
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn= false

//console.log(tinderUser);

const regularUser = {
    email:"arjun@gmail",
    fullname:{
        userfullname:{
            firstname:"arjun",
            Lastname:"saluja"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);
// merge the object

const objj1 ={1 :"a", 2: "b"}
const objj2 ={3:"c", 4:"d"}

//const obj3 = Object.assign({} ,objj1, objj2)
const obj3={ ...objj1,...objj2}
console.log(obj3);

const users =[
    {
    id:1, 
    email:"saluja2@GMAILC."
},
{
    id:32, 
    email:"saja2@GMAILC."
},
{
    id:3, 
    email:"luja2@GMAILC."



},
]

users[1].emailmail
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloogedi'));