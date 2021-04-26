// Function Declarations

function sum(a,b){
    var c = a+b;
     return c;
 }

 console.log(sum(10,20));//30
 console.log(sum(10));//Nan
 console.log(sum(10,30,40,50));//40

// Function Expressions

 const sum2 = function(a,b){

     if(typeof a === 'undefined'){ a=0; }//NaN olmasını engeller
     if(typeof b === 'undefined'){ b=0; }//NaN olmasını engeller

     var c = a+b;
     return c;
 }
 console.log(sum2(10,30));//40
 console.log(sum2(10)); //10
 console.log(sum2(10,30,40,50));//fazladan parametre gönderirsek sıkıntı olmaz fazladan olanları toplamaz.
// ES6 Default Parameters
const sum3 = function(a=0,b=0){//NaN olmasını engeller
    var c = a+b;
    return c;
}
console.log(sum3(10));//10
function argumentstanim (){//gönderilen elemanları bir diziye attı
    console.log(arguments);
}
argumentstanim(10,20,30,40);
function sumAll(){
    var total = 0;
    for(let i =0;i<arguments.length;i++){
         total+=arguments[i];   
    }
    return total;
}


console.log(sumAll(10,20,30,10,30));//fonksiyonda parametre olmamasına ragmen toplama işlemi yaptı.