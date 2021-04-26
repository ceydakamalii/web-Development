//Date Object


//get methods
let d=new Date();
console.log(d);
console.log(typeof d);
console.log(d.getFullYear());//yıl
console.log(d.getHours());//saati verir.
console.log(d.getDay());//haftanın kaçıncı günü olduğunu söyler(0.gün pazar)
console.log(d.getMonth());//0.ay ocak, 1.ay şubat
console.log(d.getDate());//ayın kaçıncı günü
//get-set methos
let d2=new Date();
let birthday=new Date(2000,7,12);
d2.setFullYear(2020);
d2.setHours(10);
d2.setMonth(10);
d2.setDate(20);
d2.setMinutes(45);
d2.setSeconds(20);
console.log(d2);
console.log(typeof d2);
console.log(d2.getFullYear());//yıl
console.log(d2.getHours());//saati verir.
console.log(d2.getMonth());//0.ay ocak 1.ay şubat
console.log(d2.getDate());
console.log(d2.getMinutes());
console.log(d2.getSeconds());
console.log(d2.getFullYear()-birthday.getFullYear());
console.log(d2.getMonth()-birthday.getMonth());
console.log(d2.getDate()-birthday.getDate());
