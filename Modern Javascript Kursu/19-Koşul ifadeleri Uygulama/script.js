/*
    20.04.2016 trafiğe çıkan bir aracın servis bakım süreleri araşıda verilmiştir.
    bu bilgilere göre servis uyarısı veriniz
    1.Bakım=1 yıl
    2.Bakım=2 yıl
    3.Bakım=3 yıl
*/
var trafigeCikis=new Date('04/20/2016')//ay başta gün ortada oluyo!
trafigeCikis.setHours(0,0,0,0);
var ms=Date.now()-trafigeCikis.getTime();
console.log(ms);
var trafikgun=Math.floor(ms/(1000*60*60*24));
console.log(trafikgun);
if(trafikgun<=365){
    console.log("1.Bakımı yapılcak")
}
else{
    if(trafikgun<=730){
        console.log("2.Bakımı yapılcak");
    }
    else{
        if(trafikgun<=1095){
            console.log("3.Bakımı yapılcak");
        }
        else{
            console.log("Bakımı geçmiş");
        }
    }
}

var result=prompt("who is there ?");//bir değer girip tamam iptal tuşuyla onaylıcaz
if(result=='cancel'){
    console.log('cancelled');
}
else{
    if(result=='Admin'){
        var passw=prompt("enter your password");
        if(passw=='cancel'){
            console.log("cancelled");
        }
        else{
            if(passw=='1234'){
                console.log("Welcome Admin");
            }
            else{
                console.log("wrong password");
            }
        }
    }
    else{
        console.log("I dont know you");
    }
}