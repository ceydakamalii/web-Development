var sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

var url = "http://sadikturan.com/Modern Javascipt KURSU sıfırdan ileri seviye ü ö ş";

// cümle kaç karakterlidir ?
console.log("sentence "+sentence.length+" karakterlidir");
// kaç kelimeden oluşuyor ?
console.log("Sentence " + sentence.trim().split(' ').length+" kelimeden oluşur.");
// Tüm cümleyi küçük harfe çevirin.
console.log("Tüm kelimeyi küçük hale çevrimi-->"+ sentence.toLocaleLowerCase());
console.log("Tüm kelimeyi büyük hale çevrimi-->"+ sentence.toUpperCase());
var sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business. ";
console.log("sentencenin başındaki sonundaki boşlukları sildiğimizde-->"+ sentence.trim());
var sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business. ";
// '-' karakterini silin.
console.log("sentenceden - işareti silme-->"+sentence.replace('-',' '));
// url'nin içinden str kısmını çıkarınız.
var str='http://';
console.log(url.substr(str.length));
console.log("url den str kısmını silme-->" + url.slice(str.length));
// url hangi protocol'u kullanmaktadır ? (http,https)
console.log(url.startsWith('http'));//bool değer döner başlangıç değeri bu mu diye soruyor.
console.log(url.startsWith('https'));
// url, '.com' ifadesini içeriyor mu?
console.log("url .com ifadesi içerir mi-->"+ url.includes('.com'));
// url string ifadesini geçerli bir url olarak düzenleyiniz.
console.log(url.toLowerCase()
               .replace(/ /g,'-') //url içindeki tüm boşlukları - işareti ile değiştirdi
               .replace(/ı/g,'i')//url içindeki ı ları i ye çevirdi
               .replace(/ü/g,'u')//url içindeki ü leri u ya çevirdi
               .replace(/ö/g,'o')
               .replace(/ş/g,'s')
               .replace(/ç/g,'c')
);

