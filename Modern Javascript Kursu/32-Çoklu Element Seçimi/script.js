// Selecting Elements
//getElement ile başlayanlarda foreach yapısı kullanılmaz.çünkü html collection döndürür bu yapılar
//nodeList döndürenlerde foreach yapısı kullanılır
// *** Single Elements
//    *** document.getElementById() //HtmlCollection
//    *** document.querySelector() //foreach kullanılır

// *** Multiple Elements

// class name
// document.getElementsByClassName()

let val;

//val = document.getElementsByClassName('list-group-item');
// val = document.getElementsByClassName('list-group-item')[0];

// val = document.getElementsByClassName('list-group-item')[2];

// val = val[2];

// val[1].style.color='blue';
// val[1].style.fontSize='25px';
// val[2].textContent='new item';

// for(let i=0; i<val.length;i++){
//     console.log(val[i].style.color='red');
//     console.log(val[i].textContent='new item');
// }


// document.getElementsByTagName()

val = document.getElementsByTagName('li');//tüm li 
console.log(val);
let val2 = document.getElementById('task-list').getElementsByTagName('a');
console.log(val2);


// document.querySelectorAll() Nodelist bir yapı veriri nodelist yapılarfa foreach döngüsü kullanabiliriz diğerlerinde htmlcollection yapısı döndürür onlarsa for kullanırız. 

 //val = document.querySelectorAll('li'); //tüm li elemanları

 //val.forEach(function(item,index){
     //item.textContent= `${index} - hello`;
 //});
 //console.log(val);

val = document.querySelectorAll('li:nth-child(even)');//çift indisteki li etiketleri

val.forEach(function(item){
   item.style.background='#ccc';
});

console.log(val);