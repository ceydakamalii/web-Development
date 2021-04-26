// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.
let tarih=new Date();
console.log(tarih);
console.log("Yıl:",tarih.getFullYear());
console.log("Haftanın kaçıncı Günü:",tarih.getDay());
console.log("Ayın kaçıncı Günü:",tarih.getDate());
console.log("Ay:",tarih.getMonth()+1);
// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.
var tarih2=new Date('07/12/2000 13:15:45');//(ay/gün/yıl)
console.log(tarih2);
var tarih3 = new Date(2010,7,24,14,50,10);
//new Date içi yıl,ay,gün,saat,dakika,saniye,haftanın kaçıncı günü olduğu
console.log(tarih3);
//1/1/1990 tarihinden bir gün öncesini gösteriniz.
var tarih4 = new Date('1/1/1990');
var dayOfMonth = tarih4.getDate();
tarih4.setDate(dayOfMonth-1);
console.log(tarih4);
// iki tarih arasındaki geçen zamanı bulunuz.
var start = new Date('1/1/1990');
var end = new Date('2/10/1992');
var milisecond = end - start;
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun = saat / 24;
console.log('milisecond :'+milisecond)
console.log('saniye : '+ saniye);
console.log('dakika :'+ dakika);
console.log('saat :' + saat);
console.log('gun : '+gun);
// ** Yaş hesaplama nasıl yapılır ?
var birthday=new Date("12/07/2000");
var fark=Date.now()-birthday.getTime();//1970 tarihlerine göre ikisinin milisecondalarını buldu
console.log(fark);//milisecond cinsinden
var age=new Date(fark);
console.log(age);
console.log(age.getFullYear()-1970);//1970 e göre geçen zamanı verdi hep milisecondda
//console.log(birthday.getTime());//o tarihi miliseconda çeviriyoruz.
//console.log(Date.now());//şuanki zamanın miliseconda çeviriyoruz.


// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır ?

var annelerGunu = new Date();
console.log(annelerGunu);
console.log(annelerGunu.getDate());
console.log("GÜN: "+annelerGunu.getDay());//günün sırasını verir. cuma 5 ,pazartesi 1 gibi
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2019);// yıl 2019 sormuş
annelerGunu.setDate(1);//1.günden başlar
annelerGunu.setMonth(4);//mayıs ayı
while(annelerGunu.getDay()!=0){//diğer hafta geçene kadar devam eder.
    annelerGunu.setDate(annelerGunu.getDate()+1);
}
console.log(annelerGunu);
annelerGunu.setDate(annelerGunu.getDate()+7);
console.log(annelerGunu);

var a=new Date("10/10/2016");
var b=new Date('10/11/2018');
var son=b-a;
var sn=son/1000;
var dk=sn/60;
var sa=dk/60;
var gu=sa/24;
console.log(sa);
