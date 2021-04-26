//JavaScript AJAX teknolojisi web sayfalarını yenilemeden arka planda veri gönderme ve veri alma işlemleri için kullanılır.
var xhr = new XMLHttpRequest();
//AJAX işlem durumu readyState özelliği ile kontrol edilir.
//readyState ===4 ise serverin bize verdiği cevap hazır demek.
//status===200 ise server bize olumlu cevap vermiş demektir.
//AJAX işlemleri durum her değiştiğinde tetiklenen onreadystatechange olayı içinde yapılır.
//İstek başlatılmadığında readyState özelliği 0,
// açıldığında 1,
// istek gönderildiğinde 2,
// yüklendiğinde 3
//tamamlandığında 4 değerini alır.
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){

        if(xhr.status === 200){
            console.log(xhr.responseText);
        }else if (xhr.status === 404){
            console.log('kaynak bulunamadı.')
        }
    }
}
xhr.onprogress = function(){//süreç başladığında ilk çalışır.
    console.log('on progressing');
}
//İstek sonucunda dönen değerler response, responseText ve responseXML ile alınır.
xhr.open('GET','msg.txt',true);//msg.txt aç true olması asenkron demek.
xhr.send();
console.log('hello');//bir tetikleme yok ilk bu yazılır.Çünkü asenkron eğer asenkron olmasaydı en son bu yazılcaktı.
//AJAX isteği başlatılmadığından herhangi bir dönüş olmayacaktır.
//AJAX isteği send metodu ile başlatılır.

/*
status :
200: "OK"
403: "Forbidden"(yasak)
404: "Not Found"
*/