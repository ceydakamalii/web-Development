// Creating Elements

// create element
const li = document.createElement('li');//li elemanı oluşturuyoruz.

// add class
li.className='list-group-item list-group-item-secondary';

// attribute
li.setAttribute('title','new item');//li elemanının title attributesine new item yazıyoruz.
li.setAttribute('data-id','5');

// text node
const text = document.createTextNode('new item');//yeni bir text oluşturuyoruz textte new item yazıyor.
li.appendChild(text);// li elemanının içeriğine bu text i yazıyor

const a = document.createElement('a');// a elemti oluşturduk
a.setAttribute('href','#');// a nın href attributesine # yazıyoruz.
a.className='delete-item float-right';// a nın classına delete-item float-right yazıyoruz.
a.innerHTML='<i class="fas fa-times"></i>';// a nın içriğine html bir kod yazıyoruz.

// append a to li
li.appendChild(a);// li elemanının içine a etiketini koyuyoruz.

// append li to ul
document.querySelector('#task-list').appendChild(li);//oluşturduğumuz li elemanını index.html ye ekliyoruz.



console.log(li);