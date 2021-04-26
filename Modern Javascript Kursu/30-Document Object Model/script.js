let val;

val = window.document;//tüm html kodları gelir.
console.log(val);
val = document.all;//tüm html kodları collection olarak gelir ve tüm etiketleri element olarak kabul eder
console.log(val);
val = document.all.length;//kaç element olduğunu söyler
console.log(val);
val = document.all[2];//2.etiketi verir.
console.log(val);
val = document.head;//head kısmına ulaşıyoruz
console.log(val);
val = document.body;//body kısmına ulaşıyoruz.
console.log(val);
val = document.anchors;//sayfadaki tüm linkleri collection olarak veririr.(a etiketi)
console.log(val);
val = document.URL;//sayfanın urlsi
console.log(val);
val = document.domain;//sayfanın domaini
console.log(val);
val = document.images;//sayfadaki tüm imagesleri veririr
console.log(val);
val = document.title;//sayfanın başlığını verir.
console.log(val);
val = document.forms;//sayfadaki form etiketini veririr.
console.log(val);
val = document.forms[0];//formun 0.indexteki elementini verir.
console.log(val);
val = document.forms[0].id;//formun 0.elementinin id sini verir.
console.log(val);
val = document.forms[0].method;//
console.log(val);
val = document.forms[0].action;
console.log(val);
val = document.scripts;//scripts taglarını getirir.
console.log(val);
val = document.scripts[2];//2.indisteki script tagı
console.log(val);
val = document.scripts[2].getAttribute('src');//2.indisteki script tagının src attributesinde ne yazdığını verir.
console.log(val);
val=document.getElementById('txtTaskName');
console.log(val);


