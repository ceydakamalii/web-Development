// Scopes
//scopes değişkenin hangi yazdığımız kod parçası tarafından ulaşılığ ulaşılmadığı anlamına gelir.
// ** Global Scopes
var name = 'Çınar';
var age = 25;
function logName1(){
    console.log(`adim ${name} , yaşım ${age}`);
}
logName1();

function logName(){
    var name = 'Ada';
    var age = '12';
    console.log('function scope',name,age);
}
logName();
console.log("global scope "+ age);
console.log("global scope "+ name);


if(true){
    var age = 30;
    console.log('block scope',name,age);
}

console.log("block scope "+age);//25 çıktısı beklerken 30 alıcaz çünkü bloklarda kendi scopelerini oluşturmaz

logName();
logName1();
console.log(name);
console.log(age);


// ** Local Scopes
//fonksiyonda tanımlanan local değişkene fonk dışında ulaşamayız.
// Fonksiyonlar kendi scope 'larını oluşturur.
// **Block'lar yeni scope oluşturmaz.(if,else)
// ES6 ile gelen let ve const block scope oluşturur.
//değişken var ile oluşturulmuş olursa (blocklarda) dışarıdan erişilir fakat let ve const dışarıdan erişilmez.

console.log('*********************');
var model='Ford';
var year=2018;
if(true){
    var model = 'Opel';
    let year = 2016;
    const color = 'white';
    console.log('block scope',model,year,color);
}
console.log(model);
console.log(year);
//console.log(color); const ile oluşturuldu erişilmez.

var i = 1;
for(var i=0; i<10;i++){
    console.log('i',i);
}
console.log(i);//for içindeki i var ile oluştuğu için değer değişcek let ile oluşsa bize 1 çıktısı veririr
var j=1;
for(let j=0;j<10;j++){
    console.log('j',j);
}
console.log(j);

