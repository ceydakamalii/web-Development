// Selecting Elements
//innerText ile textContent aynı şeyi yapar text içeriği değiştirir.
// *** Single Elements

// document.getelementById();  
// let val;

// val = document.getElementById('header');
//val = document.getElementById('header').id;
//console.log(val);
//val = document.getElementById('header').className;
//console.log(val);

// val = document.getElementById('header');
// // val = val.id;
// // val = val.className;

// val.style.fontSize='45px';
// val.style.color='red';
// val.style.fontWeight='bold';
// // val.style.display='none';

// document.getElementById('header').innerText='my ToDo App'; innerText o etiketin textini değiştirmeyi sağlar

// document.getElementById('header').innerText='<b>my ToDo App</b>'; burada b etiketini text olarak algılar html olarak değil

// document.getElementById('header').innerHTML='<b>my ToDo App</b>';//burada b etiketini html olarak algılar ve daha kalın yazmaya sağlar.
//console.log(val);

// document.querySelector()
var b=document.querySelector('#header');
console.log(typeof b);
console.log(document.querySelector('#header'));//ilk idsi header olan etiketi ve içeriğini getirir.
console.log(document.querySelector('.card-header'));//ilk classı card-header olan etiketi ve içeriğini getirir.
console.log(document.querySelector('div'));

document.querySelector('li').style.color='red';
document.querySelector('li:last-child').style.color='blue';//son eleman
document.querySelector('li:nth-child(2)').style.color='yellow';//2.eleman
document.querySelector('li:nth-child(3)').textContent='task item';//3.elemanın text içeriği değiştirme
document.querySelector('li:nth-child(4)').textContent='task item';

// document.querySelector('li').className='list-group-item list-group-item-primary'; 
//ilk li elemanın clasını className='list-group-item list-group-item-primary'; yapar
document.querySelector('li').classList.add('active');//ilk li etiketinin classına active clasınıda ekler.

// *** Multiple Elements