let val;
const a=10;
const b=5;
let c=3;
const d=5;
// 1-Aritmatik Operatörler
val=a+b;
console.log(val);
console.log(typeof val);
val=a-b;
console.log(val);
console.log(typeof val);
val=a*b;
console.log(val);
console.log(typeof val);
val=a/b;
console.log(val);
console.log(typeof val);
val=a%b;
console.log(val);
console.log(typeof val);
val=c++;//ilk vala 3 ü atar sonra arttırma işlemi yapar ve c 4 olur.
console.log("c++ :"+ val);
console.log("c:"+c);
console.log(typeof val);
c=3;
val=++c;
console.log("++c : "+val);
console.log(typeof val);
console.log("c:"+c);
c=3;
val=c--;
console.log(val);
console.log(typeof val);
c=3;
val=--c;
console.log(val);
console.log(typeof val);




// 2-Atama Operatörler
val =a;
console.log(val);
console.log(typeof val);
val+=a;
console.log(val);
console.log(typeof val);
val -=a;
console.log(val);
console.log(typeof val);
val*=a;
console.log(val);
console.log(typeof val);
val /=a;
console.log(val);
console.log(typeof val);
val %=a;
console.log(val);
console.log(typeof val);




// 3-Karşılaştırma Operatörleri

val= a==b;
console.log(val);
console.log(typeof val);

val = b==c;
console.log(val);
console.log(typeof val);

val = 3=='3'; //sadece değere bakıyor türlerine bakmıyo
console.log(val);
console.log(typeof val);
val= 3==="3"; //hem değer hem tür eşitliğine bakıyor
console.log(val);
console.log(typeof val);
val= 3!="3";
console.log(val);
console.log(typeof val);
val= 3!=="3";
console.log(val);
console.log(typeof val); 
val = a<b;
console.log(val);
console.log(typeof val); 
val= 5>=5;
console.log(val);
console.log(typeof val); 
val = 5>="5";//sadece değere bakar ondan true
console.log(val);
console.log(typeof val); 



// 4-Mantıksal Operatörler
//&& And operatörü
val=  (a>b) && (a>c) ;
console.log(val);

// || Or operatörü
val = (a>b) || (a<c);
console.log(val);

// ! Not operatörü
val = !(a>b);
console.log(val);