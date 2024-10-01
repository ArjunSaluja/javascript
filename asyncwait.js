function loadingData(){
  console.log("1) loading data...");
    
}
function collectingData(){
    console.log("2)collecting data,,,");
}
function approvingData(){
    console.log("3) approving data...");
}
function approved(){
    console.log("4) approved...");
}

async function Ex(){
    await loadingData();
    await collectingData();
    await approvingData();
    await approved();

}
Ex();