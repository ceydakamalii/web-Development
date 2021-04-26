// Demo : Arrays

// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.
var araba=['Bmw','Mercedes','Opel','Mazda'];
// var arr2 = new Array("Bmw","Merdeces","Opel","Mazda")
console.log("Araba dizisi--> "+ araba);
// Dizi kaç elemanlıdır ?
console.log("Araba dizi "+araba.length+" elemanlıdır");
// Dizinin ilk ve son elemanı nedir ?
var ilk=araba[0];
var son=araba[araba.length-1];
console.log("Arabanın ilk elemanı "+ilk+ " araba dizisinin son elemanı "+son);
// "Renault" değerini dizinin sonuna ekleyin.
araba[araba.length] = "Renault";
araba[araba.length] = "Fiat";
araba.push('Toyota');
// "Seat" değerini dizinin başına ekleyin.
araba.unshift('Seat');
// "Seat" değerini siliniz.
araba.shift('Seat');
// "Toyota" değerini siliniz.
araba.pop('Toyota');
// Dizi elemanlarını ters çevirin
araba.reverse();
console.log(araba);
// Dizi elemanlarını alfabetik olarak sıralayın
araba.sort();
console.log(araba);
// [1,2,5,80] dizisini sıralayın
var dizi=[1,2,5,80];
function siralama(a,b){
    if (a>b) return 1;
    if (a==b) return 0;
    if (a<b)  return -1;
}
console.log(dizi.sort(siralama));
// "Opel" değeri dizinin bir elemanımıdır ?
console.log(araba);
console.log(araba.includes('Opel'));
// var str = "Chevrolet,Dacia";
// ifadesini diziye çeviriniz.
var str='Chevrolet,Dacia';
var str2=str.split(',');
console.log(str2);
// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.
var str3=araba.concat(str2);
console.log(str3);
// Oluşturulan diziden son 2 elemanı siliniz.
console.log(str3.pop());
console.log(str3.pop());
console.log(str3);
//str4=str3.splice(6,2);
//console.log(str4);
//console.log(str3.splice(6,2));
//console.log(str3.slice(6,8)); slice(6,8) dizideki 6.indisten başla 8.indise kadar al ve bunları farklı diziye kopyala
/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
     
     studentA : Yiğit Bilgi 2010
     StudentB : Sena Turan  1999
     studentC : Ahmet Turan 1998   
*/
var studentA = ['Yigit',"Bilgi",2010];
var studentB =['Sena','Turan',1999];
var studentC=['Ahmet','Turan',1998];
var students=[studentA,studentB,studentC];
console.log(students[0]);

console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students[1][0]);
console.log(students[1][1]);
console.log(students[1][2]);

console.log(students[2][0]);
console.log(students[2][1]);
console.log(students[2][2]);

console.log(students)

