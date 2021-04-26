// Event Bubbling
//içten dışa olaylar gerçekleşcek
const form = document.querySelector('form');
const cardBody= document.querySelector('.card-body');
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//kutuya tıkladığımızda içten dışa çalışcak en içteki elemanın eventinden en dışa doğru
// form.addEventListener('click',function(e){
//     console.log('form');
//     e.stopPropagation(); bu içten dışayı yok etmek için var yani bir kutuya bastığımda sadece onun eventi çalışcak dışarıdaki olaylar çalışmıcak
// });

// cardBody.addEventListener('click',function(e){
//     console.log('card body');
//     e.stopPropagation();
// });

// card.addEventListener('click',function(e){
//     console.log('card');
//     e.stopPropagation();
// });

// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();
// });


// Event Capturing
//event bubbling tam tersi dıştan içe olaylar gerçekleşcek bunun için 3.parametreye sadece true değeri yazıyoruz.
// form.addEventListener('click',function(e){
//     console.log('form');
//     e.stopPropagation();
// },true);

// cardBody.addEventListener('click',function(e){
//     console.log('card body');
//     e.stopPropagation();
// },true);

// card.addEventListener('click',function(e){
//     console.log('card');
//     e.stopPropagation();
// },true);

// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();
// },true);


// const deleteItems = document.querySelectorAll('.fa-times');

// deleteItems.forEach(function(item){
//     item.addEventListener('click',function(e){
//         console.log(e.target);
//     })
// });

const ul = document.querySelector('ul');

ul.addEventListener('click',function(e){
    
    if(e.target.className==='fas fa-times'){
        e.target.parentElement.parentElement.remove();
        e.preventDefault();//sayfa yenilemeyi durdurmak için
    }
});
