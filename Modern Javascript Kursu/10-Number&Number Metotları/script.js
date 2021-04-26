// Numbers

let val;

val = Number('10');
console.log(val);
console.log(typeof val);
val = parseInt('10');
console.log(val);
console.log(typeof val);
val = parseFloat('10.5');
console.log(val);
console.log(typeof val);
val=parseInt('10a');
console.log("10a : "+val);
console.log(typeof val);
val = parseInt('a10a');
console.log("a10a: "+val);
console.log(typeof val);
val = isNaN('10');//isNaN() içine yazılan ifade numaber oluyorsa false olamıyorsa true döndürür
console.log(val);
console.log(typeof val);
val = isNaN('a10');
console.log(val);
console.log(typeof val);
console.log("*******");
//toPrecision(),toFixed türü stringe çevirir.
var num = 10.12456789;
var num2 = num.toPrecision(7);//ilk 7 rakamı alır ve son rakamı yuvarlar ve string yapar.
console.log(num2);
console.log(typeof num2);
console.log("****");
var num3=num.toPrecision(4);
console.log(num3);
console.log("*****");
// val = num.toFixed(2);
var num4=num.toFixed(3);//virgülden sonraki 3 basamağı ve tam kısmı yaz
console.log(num4);
console.log(typeof num4);
console.log("*********");
var num5=num.toFixed();
console.log(num5);
console.log(typeof num5);
console.log("*********");
var num6=num.toPrecision();
console.log(num6);
console.log(typeof num6);

val = Math.PI;//pi sayısı 
console.log(val);
console.log(typeof val);
val = Math.round(2.4);//en yakın sayıya yuvarlar
console.log(val);
console.log(typeof val);
val = Math.round(2.7);
console.log(val);
console.log(typeof val);
val = Math.ceil(2.4);//her zaman bir üst sayıya yuvarlanır yakınlık söz konusu değil 
console.log(val);
console.log(typeof val);
val = Math.ceil(2.6);
console.log(val);
console.log(typeof val);
val = Math.floor(2.4);//her zaman bir alt sayıya yuvarlanır yakınlık söz konusu değildir.
console.log(val);
console.log(typeof val);
val = Math.floor(2.7);
console.log(val);
console.log(typeof val);
val = Math.sqrt(64);//64 ün karekökü
console.log(val);
console.log(typeof val);
val = Math.pow(2,4);// 2 üzeri 4 yani 16
console.log(val);
console.log(typeof val);
val = Math.abs(-100);//mutlak değere alır sonucu her zaman pozitif
console.log(val);
console.log(typeof val);
val = Math.min(1,2,3,2,4,9);
console.log(val);
console.log(typeof val);
val = Math.max(4,5,6,4,98,7);
console.log(val);
console.log(typeof val);
val = Math.floor(Math.random()*100+1);
console.log(val);
console.log(typeof val);
