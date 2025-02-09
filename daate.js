// Date  and timee 
// data define in milisec
let myDate =new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);



let myCreatedDate= new Date(2023, 0,23)
console.log(myCreatedDate.toDateString());


let myDate1= new Date("2023-01-14")
console.log(myDate1.toLocaleString());

//Time stamp

let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(myDate1.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate2=new Date()
console.log(newDate2);
console.log(newDate2.getMonth()+1);


// nwDate3.toLocaleString(`default`,{
//     weekday:"long"
// })