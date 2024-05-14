//nested scope
function one(){
    const username="Hitesh"

    function two(){
        const website="youtube"
        console.log(username);
    }
 //   console.log(website);
   // two()//child function can access the parent variable
}
//one()

if (true){
    const username ="arjynj"
    if(username=== "arjynj"){
        const website="youtube"
       // console.log(username+website);

    }
   // console.log(website);
}
//console.log(username);


//++++++++++++++++++++++++++interesting++++++++++++++++++++++++

function addone (num) {
    return num+1
    
}
console.log(addone(5))


const addTwo =function (num){
    return num+2
}
addTwo(5)