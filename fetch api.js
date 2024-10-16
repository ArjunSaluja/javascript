fetch('myfile.txt')
.then(response=>{

    if(!response.ok){
        throw new Error('netwoek is not responding');
    }
    return response.text();

})
.then(data=>console.log(data));
.catch(error=>console.log(error));
