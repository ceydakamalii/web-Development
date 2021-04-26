var num = 15.123456789;
console.log("Sayi:"+ num);

// toplamda 3 basamaklı sayı kullan
console.log("toplamda 3 basamaklı sayı:"+ num.toPrecision(3));
// ondalık kısmı 3 basamakta sınırla
console.log("ondalık kısmı 3 basamakta sınırla: "+ num.toFixed(3));
// en yakın sayıya yuvarla
var num2=Math.round(num);
console.log("en yakın sayıya yuvarla:"+ num2);
// aşağı yuvarla
var num3=Math.floor(num);
console.log("aşağı yuvarla:"+ num3);
// yukarı yuvarla
var num4=Math.ceil(num);
console.log("yukarı yuvarla:"+ num4);
// 1,2,10,56,20 sayılarından en küçüğü ve en büyüğünü bul
console.log("Dizi içindekiler",1,2,10,56,20);
var num5=Math.min(1,2,10,56,20);
console.log("en küçük sayi:"+ num5);
var num6=Math.max(1,2,10,56,20);
console.log("en büyük sayi:"+ num6);
// sayı aralığını kullanıcının belirleyeceği rastgele bir sayı üretin.
var min=10;
var max=55;
var num7=Math.floor((min+Math.random()*(max-min)));
console.log(num7);
/* Bir personelin yaptığı mesai'ye göre aldığı maaşı hesaplayalım.
   ** Brüt maaş  : 3700 TL
   ** Brüt mesai : 10.3 TL
   Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir ?
   Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir ?
*/
var brut=3700;
var mesai=10.3;
var brutmesai=42;
var toplamBrutMaas = brut + (mesai*brutmesai);
console.log(toplamBrutMaas.toFixed(2));
brut=brut-brut*0.25
toplamBrutMaas= brut + (mesai*brutmesai);
console.log(toplamBrutMaas.toFixed(2));
