const taskList = document.querySelector('#task-list');
//taskList ul etiketini ve içeriğini tutuyor.
console.log(taskList);


// ** removing element
// taskList.remove(); ul elementini ve içeriğini siler
// taskList.childNodes[7].remove(); ul 7.indisteki elemanını siler. 0.index textnode
// taskList.children[3].remove(); 3.elemanı siler sadece etiketler içinden
// taskList.removeChild(taskList.children[3]);//removeChild taskListin bir alt ögesinden elamn siler 3.elemanı silcek

// ** removing attribute
// taskList.children[1].removeAttribute('class');
// for(let i=0;i<taskList.children.length;i++){
//     taskList.children[i].removeAttribute('class');
// }

// ** Replacing Elements
//.card-header sınıfına sahip olan elemanla  oluşturduğumuz h2 ile yer değiştircez.
//.card headeri kapsayan div olduğundan ona ulaşıcaz çünkü onun elemanını değiştiriyoruz bu divin clası card
// const cardHeader = document.querySelector('.card-header');

// create element
// const h2 = document.createElement('h2');//yeni element oluşturuyor.
// h2.setAttribute('class','card-header'); clasına card-header yazıyo
// h2.appendChild(document.createTextNode('My List'));//h2 içine My List yazıyor

// const parent = document.querySelector('.card');
// parent.replaceChild(h2,cardHeader); ilk new childı yazıyoruz sobra old childin clasını yazıyoruz.


// console.log(cardHeader);


// ** Classes
console.log("***");
let val;

link = taskList.children[0].children[0]; // ilk li içindeki a etiketini ve içeriğini verir.

console.log(link);
//link=taskList.firstChild; ise to do item ı yani texti verir.

// val = link.className; a etiketinin classlarını verir.
// val = link.classList; a etiketinin classlarını liste şeklinde verir.
// val = link.classList[0];
// val = link.classList[1];

link.classList.add('new');//yeni class ekler
link.classList.remove('new');//clası siler

// Attributes
val = link.getAttribute('data-id');//a nın data-id attributesi neyse onu verir
val = link.getAttribute('href');
val = link.setAttribute('href','http://sadikturan.com');// a nın hrefine http://sadikturan.com yazıyor
val = link.hasAttribute('data-val');//a etiketinin data-val adında attributesi var mı diye soruyor.


console.log(val);