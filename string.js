//string new concept
const name="arjun"
const repoCount= 12

//console.log(name+repocount+value) bhout purana ha 


console.log(`Hello my name ${name} and my repo Count is${repoCount} `);

const gameName= new String('Arjun-ccchh')
console.log(gameName[0]);
console.log(gameName[3]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const newstring= gameName.substring(0 ,4)
console.log(newstring);


const anotherString= gameName.slice(-8, 4)
console.log(anotherString);

const n3ii=" arjun  "
console.log(n3ii);
console.log(n3ii.trim());//space will remove using the trim


const url="https://hites.com/hitesg%20level"
console.log(url.replace('20','-'))
console.log(url.includes('sunday'));

console.log(gameName.split('-'));