// 1 - Can ve Ada 'nın boy ve kg bilgilerini alın.
// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
//  ** Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

// 0 - 18,4: Zayıf
// 18,5 - 24,9: Normal
// 25,0 - 29,9: Fazla Kilolu
// 30,0 - 34,9: Şişman (Obez)

let IndexCan;
let IndexAda;

const kgCan = 60;
const kgAda = 40;

const heigtCan = 1.70;
const heigtAda = 1.50;

IndexCan= 60 / ((1.70)**2);
console.log(IndexCan);//Normal
IndexAda= 40 / ((1.50)**2);
console.log(IndexAda);//Zayıf
console.log(IndexAda.toFixed(2),IndexCan.toFixed(3));
let adaHigherIndex = IndexAda>IndexCan; //false
let canHigherIndex = IndexCan>IndexAda; //true
console.log("Ada'nın kilo indeksi can'ın kilo indeksinden daha büyük : "+adaHigherIndex);
console.log("Can'ın kilo indeksi ada'nın kilo indeksinden daha büyük : "+canHigherIndex);
let AdaZayif = (IndexAda>=0) && (IndexAda<=18.4);
let AdaNormal = (IndexAda>=18.5) && (IndexAda<=24.9);
let AdaKilolu = (IndexAda>=25) && (IndexAda<=29.9);
let AdaSisman = (IndexAda>=30) && (IndexAda<=34.9);

console.log("Ada zayıf mı:"+AdaZayif);
console.log("Ada'nın kilosu normal mi: "+AdaNormal);
console.log("Ada kilolu mu : "+AdaKilolu);
console.log("Ada şişman mı : "+AdaSisman);

let CanZayif= (IndexCan>=0) && (IndexCan<=18.4);
let CanNormal=(IndexCan>=18.5) && (IndexCan<=24.9);
let CanKilolu=(IndexCan>=25) && (IndexCan<=29.9);
let CanSisman=(IndexCan>=30) && (IndexCan<=34.9);

console.log("Can zayıf MI:"+CanZayif);
console.log("Can'nın kilosu normal Mİ: "+CanNormal);
console.log("Can kilolu mu : "+CanKilolu);
console.log("Can şişman mı : "+CanSisman);


