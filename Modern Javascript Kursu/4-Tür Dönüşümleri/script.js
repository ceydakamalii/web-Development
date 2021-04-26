let num1='5';
let num2='9';
console.log(num1+num2);//59
console.log(typeof num1);//string
console.log(typeof num2);//string
num1=Number('5');
num2=Number('9');
console.log(num1+num2);//14

let val;

//Number to String
val=String(10);
console.log(val);
console.log(typeof val);
console.log(val.length);//2 basamaklı olduğundan 2 yazar.

//bool to String
val=String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);

//date to String
val=String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

//array to String
val = String([1,2,3,4]);
console.log(val);
console.log(typeof val);
console.log(val.length);

//toString()
val =(10).toString();//değişkenleri stringe çevirir.
console.log(val);
console.log(typeof val);
console.log(val.length);


//String to Number
val=Number("10");
console.log(val);
console.log(typeof val);
console.log(val.length);//length sadece stringlere özel
console.log(val.toFixed());//sonuna sıfır ekler noktadan sonra 10.000 gibi ama değer olmadığından yine 10 yazar
console.log(val.toFixed(2));//10.00 yazar.

//bool to Number
val=Number(true);//true numaber değeri 1 ,false number değeri 0 dır.
console.log(val);
console.log(typeof val);
val=Number(false);
console.log(val);
console.log(typeof val);
val=Number(null);
console.log(val);//Number değeri 0 dır 
console.log(typeof val);
val=Number('a');
console.log(val);//NaN değeri yani numbera dönüşmeyen değer demek
console.log(typeof val);
val=Number([1,2,3,4]);
console.log(val);//NaN değeri yani numbera dönüşmeyen değer demek
console.log(typeof val);

//parseInt
//parseFloat
val=parseInt('10');
console.log(val);
console.log(typeof val);

val=parseInt('10.5');
console.log(val);//yuvarladı 10 olarak yazdı değeri
console.log(typeof val);

val=parseFloat('10.5');
console.log(val);
console.log(typeof val);






