// Keyboard Events

const input = document.querySelector('#txtTaskName');
const form = document.querySelector('form');
const select = document.querySelector('#select');

//input.addEventListener('keydown',eventHandler);
//keydown kutuya bir şey yazdığında gerçekleşir
// input.addEventListener('keyup',eventHandler);
//kutuya yazma işlemin bitince gerçekleşir.
// input.addEventListener('keypress',eventHandler);
// metodu ise bir klavye tuşu basılı tutulduğu sürece çalışır. Klavye tuşuna basma anını temsil eder.
// input.addEventListener('focus',eventHandler);
//oraya bir şey yazmak için bastığın anda focus olayı gerçekleşir.
// input.addEventListener('blur',eventHandler);
//yazı yazcağımız kutudan çıkınca blur olayı gerçekleşiyor.
 input.addEventListener('cut',eventHandler);
//ctrl+x olayında gerçekleşir
 input.addEventListener('paste',eventHandler);
//ctrl+v olayında gerçekleşi
input.addEventListener('select',eventHandler);
//yazdığımızkutudan herhangi bir yerini seçersek select olayı olur.
 form.addEventListener('submit',eventHandler);
//submit kutuya bir şey yazdıktan sonra  kutuya bastığında seni bir yere gönderir bu olay submitdir.eğer bir yere göndersin istiyorsak submit içeren forma action attributesi vermeliyi<

select.addEventListener('change',eventHandler);
//select kutusundan herhangi bir değer seçtiğimiz vakit bu gerçekleşir

function eventHandler(e){
       console.log('event type '+ e.type);
    // console.log('key code :'+e.keyCode); her harfin keyCodesi farklıdır a nın 65 internette var 
       console.log('value :'+e.target.value);//hangi kelime,harf yazdıysan onu verir.keyuptan sonra çalışır çünkü ilk yazma işlemi yaparsın sonra değerini anlarız.

    // e.target.style.backgroundColor='yellow';

    e.preventDefault();
    //bu submit gerçekleşince reflesh olur yani sayfa yenilir bunu engellemk için prevenDefault kullanırız.
}