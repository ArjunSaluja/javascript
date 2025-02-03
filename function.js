function fun () {

    var a=2;// this is lexial scope  for another function
    console.log("asssdsd"+a);

    function fun2(){
        console.log("kasam sa "+a);// lexial scope
    }
    fun2();
}
fun();
// agar isko ma fun 2 ma var a=2; karta to error show hojata 