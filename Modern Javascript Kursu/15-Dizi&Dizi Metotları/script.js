// Arrays

let names = ['çınar','sena','ada','yiğit'];
let years = [2017,1970,1990,1998];
let mix = ['sadık','turan',1983,null,undefined,['sinema','kitap']];

// // get array item
// console.log(names[0])
// console.log(names[3])

// // set array item
// names[names.length]='emel';

// // add item
// years.push(1986); dizinin sonuna 1986 ekler
// years.unshift(1986); dizinin başına ekler

// // remove item
// years.pop(); son elemanı siler
// years.shift(); ilk elemanı siler

// //indexof
let index = names.indexOf('ada'); //ada dizinin kaçıncı indeksi bunu bulur.
console.log(' index : '+index);

// // reverse
// names.reverse(); diziyi ters çevirir.

// // sort
// years.sort(); diziyi küçükten büyüğe sıralar

// //concat
// let val = years.concat(names);// years dizisinin sonuna names dizisini ekledi 
// console.log(val);

// splice
// console.log(names);
//names.splice(0,1);// 0.elemandan başlayarak ilk elemanı sil(0.indexteki eleman silinir)
//console.log(names)
// names.splice(2,0,'seda');//2.elemandan sonra 0 eleman sil ve oraya 'seda' yaz
// names.splice(2,1,'seda');//2.elemandan başla bir eleman sil ve oraya 'seda' yaz
function over18(year){
    let age = 2018 - year;
    return age>=18;
}

// find
// let val = years.find(over18); years dizisini over18 fonkuna gönderiyoruz ilk true değeri bize döndürür.

// filter
let val = years.filter(over18);//true dönen dizi elemanları bir dizide toplar

console.log(val);

console.log(names);
console.log(names.length);
console.log(typeof names);

// console.log(years);
// console.log(mix);