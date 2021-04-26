// ** Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

// ** Müşteri adı
// ** Müşteri soyadı
// ** Müşteri tc kimlik
// ** Müşteri sipariş toplamı
// ** Müşteri cinsiyet
// ** Müşteri adres bilgisi
// ** Müşteri hobiler

var ad='Ceyda';
var soyadı='Kamalı';
const tc=3295309678;
var toplamsiparis=205.6;
var cinsiyet=true;//true kız , false erkek
var adres={
    sehir:"Bilecik",
    ulke:"Turkiye",
    mahalle:"Besiktas"

}
var hobiler=["yüzme","film izleme","yürüyüs"];

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.

var order1='100';
var order2='150';
console.log(Number(order1)+Number(order2));

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.
var order3="100.2";
var order4="100.5";
order3=Number(order3);
order4=Number(order4);
console.log(order3+order4);

//Bir üstteki siparişleri tam sayı olarak topla
var order5="100.2";
var order6="100.5";
console.log(parseInt(order5)+parseInt(order6));

//Aşağıda verilen doğum yılına göre yaş hesapla
var yearOfBirth=1986;//2021-1986=35
var yas= (new Date().getFullYear()) - yearOfBirth;
console.log(yas);

//Aşağıdaki String ifadenin karakter uzunluğunu bulunuz
var course='Modern Javascript Kursu';
console.log(course.length);

