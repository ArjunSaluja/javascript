// multi dimesional array

let arr=[

["john",30   ],//0
["thomas",40],//1
["robert",22]//2
]

// console.log(arr);
// console.log(arr[1][0]);



// arr.forEach(element => {
//     element.forEach(val=>{
//         console.log(val);
//     })
// });


for(let ar of arr){
    for(i of ar){
        console.log(i);
    }
}