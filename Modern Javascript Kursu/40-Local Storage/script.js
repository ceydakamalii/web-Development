// LOCAL STORAGE(Hafızada saklama)
//local storage ve session storage arasındaki fark tarayıcı kapandığında session hafızadan siler elemanları falat local storagqe silmez.
let val;

// set item

const firstName = localStorage.setItem('firstName','Sadık');
//localStorage.setItem(,)içine ilk hangi değişken saklancak onu yazıyoruz sonra değişkenin değeri ne onu yazıyor.
const lastName = localStorage.setItem('lastName','Turan');
//console.log(localStorage); 2 lemanlı firstname ve lastname
let hobies = ['sinema','araba','gezmek'];

// get item
val = localStorage.getItem('firstName');
console.log(val);
val = localStorage.getItem('lastName');
console.log(val);

// remove item
// localStorage.removeItem('firstName');
// localStorage.removeItem('lastName');

// clear bütün bilgileri hafızadan siler.length 0 olur.
// localStorage.clear();

// set array to storage
hobiler =localStorage.setItem('hobies',hobies);
val=localStorage.getItem('hobies');
console.log(val);
console.log(typeof val);

console.log(localStorage);
localStorage.setItem('hobies',JSON.stringify(hobies));
//JSON.stringify hobileri bir dizi şeklinde veriyor ama json kullanmadan hobiler dizi şeklinde değil

val = JSON.parse(localStorage.getItem('hobies'));
//JSON.parse hafızada saklanan bir objeyi kullanmamızı sağlıyor.
console.log(val);
console.log(localStorage);


// SESSION STORAGE
// const city = sessionStorage.setItem('city','Kocaeli');
// const country = sessionStorage.setItem('country','Türkiye');

//  console.log(sessionStorage);