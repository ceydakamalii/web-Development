  
// Strings

const firstName = 'Sadık';
const lastName = "Turan";
let hobbies = 'sinema spor kitap yazılım';
const age=35;

let val;

// string concatenation

val = firstName +" "+ lastName;
val = 'Sadık';
val +=' Turan';
console.log(val);
console.log(typeof val);

val = 'Benim adım '+firstName+' '+ lastName+ ' ve yaşım ' + age + ' izmit\'te yaşıyorum.';
console.log(val);
console.log(typeof val);
val = firstName +" "+ lastName;
//string concat
val = firstName.concat(' ',lastName);//firstname ile lastnameyi birleştiriyor arasına boşluk koyuyor
console.log("concat işlemi: "+val);
console.log(typeof val);
val = firstName +" "+ lastName;
// string uppercase - lowercase
val = val.toUpperCase();//harfleri büyük yazar
console.log(val);
console.log(typeof val);
val = firstName +" "+ lastName;
val = val.toLowerCase();//harfleri küçük yazar
console.log(val);
console.log(typeof val);
val = firstName +" "+ lastName;
// string replace değişim yapar
console.log("val: "+val);
val = '  '+val.replace('Sadık','çınar')+'     ';//sadik değerini çınarla değiştirdi
console.log(val);
console.log(typeof val);
val = firstName +" "+ lastName;
// trim
val = val.trim();//baştaki ve sondaki boşlukları siler.
console.log(val);
console.log(typeof val);
val = firstName +" "+ lastName;
// substring 
val = val.substring(3,8); //3.indexten 8.indekse kadar yazar. start değeri girmek zorundasın
console.log(val);
console.log(typeof val);
val = firstName +" "+ lastName;
// slice
val = val.slice(6); //substring ile aynı işi yapar end değeri girmek zorunda değilsin
console.log(val);
console.log(typeof val);
val = firstName +" "+ lastName;
val = val.indexOf('x');
console.log(val);
console.log(typeof val);
val = firstName +" "+ lastName;
val = val[1];//1.indeksi veriri
console.log(val);
console.log(typeof val);
val = firstName +" "+ lastName;
//string length
val = val.length;//uzunluk boşlukta sayılır.
console.log(val);
console.log(typeof val);
val = firstName +" "+ lastName;
console.log("val: "+val);
//split işlemi dizite çevirir.
val =hobbies.split(' ');//let hobbies = 'sinema spor kitap yazılım';

console.log(val);
console.log(typeof val);