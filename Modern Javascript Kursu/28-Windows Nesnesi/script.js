//sayfadaki tüm değişkenler,metotlar windowundur.
let val;
var a=10;
function abc(){
    return 0;
} 
val =window;
console.log(val);
//alert,promp,confirm windowundur window.alert ile alert aynı şeydir diğerleri içinde geçerlidir bu
// alert
// alert('Merhaba');

// prompt
// var val = prompt('bir sayı giriniz ');  

// confirm
// val = confirm('emin misiniz ?');
// if(val){
//     console.log('ok');
// }else{
//     console.log('no');
// }

// scroll
// val = window.scrollX; //şuan x düzleminde nerede diyor scroll sağ sol yapınca değişir
// val = window.scrollY;//şuan y düzleminde nerede diyor scroll aşağı yukarı yapınca değişir.
//window.scrollX===scrollX aynı şeydirler
//window.scrollY===scrollY aynı şeylerdir.

// location

val = window.location;//Tarayıcıdaki her şeyin adresini verir
console.log(val);
val = window.location.href;//tarayıcının adresi
console.log(val);
val = window.location.hostname;//tarayıcının host adı
console.log(val);
val = window.location.host;//tarayıcının host değeri
console.log(val);
val = window.location.protocol;// http veya https
console.log(val);
val = window.location.search;//
console.log(val);
//window.location.href='http://sadikturan.com';
//window.location.reload(); //sayfayı durmadan yeniler
val=window.navigator;//tarayıcıyla ilgili ekstra bilgiler
console.log(val);
val=window.document;//sayfadaki html kodları
console.log(val);
val=window.document.getElementById('yazi');//id si yazi olan etiketi getirir.
console.log(val);