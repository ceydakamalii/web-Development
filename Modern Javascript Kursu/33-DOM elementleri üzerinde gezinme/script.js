// Traversing the Dom

let val;

let list = document.querySelector('.list-group');
console.log(list);
//clası .list-group olan elementleri list değişkenine eşitliyoruz bu durumda list değişkeninin typeofu nodeListdir.
console.log(typeof list);//nodeList olduğundan object dir
val = list;

val = list.childNodes;
console.log("list.childNodes bize nodeList yapısı döndürür");
//nodeList yapısında textnodelerde eleman olarak bulunur HtmlCollectionda bulunmaz.
//textnode alt satır demek alt satırı silsek eleman sayısı azalcak.
console.log(val);

val = list.childNodes[0];
console.log(val);
val = list.childNodes[0].nodeName;
console.log(val);
val = list.childNodes[0].nodeType; // text 
//eğer typesi textnode ise 3 değeri döner,element ise 1 değeri döner,attribute ise 2 döner,bir yorum satırı ise 8 değeri döner.
console.log(val);
val = list.childNodes[1].nodeType; // element
console.log(val);

val = list.children;
console.log("list.children bize HtmlCollections yapısı döndürür.")
console.log(val);
val = list.children[0];
console.log(val);
val = list.children[2];

val = list.children[2].textContent='new item';
val = list.children[3].children;

val = list.firstChild; //ilk ne varsa o karşımıza çıkar textnode,yorum satırı vs
 
val = list.firstElementChild;//ilk element karşımıza çıkar


val = list.lastChild;//sonda ne varsa o
val = list.lastElementChild;//son element

val = list.childElementCount;//kaç element varsa onu verir.HtmlCollection gibi sadece element

val = list.parentNode;//listin bir üstü yani parentinı verir.
//parentNode ile parentElement aynı görevi görür.
console.log(val);
val = list.parentElement;
console.log(val);
val = list.parentElement.parentElement;//parentının parentını aldık 

console.log(val);

val = list.children[0].nextSibling;//bir sonraki elemana geçer ama nodeList yani bir satır boşluğu vs varsa onlarıda işe sokar
val = list.children[0].nextElementSibling;//bir sonraki elemente geçer

val = list.children[1].previousSibling;//bir önceki yere geçer nodeaList gibi
val = list.children[1].previousElementSibling;//bir önceki elemente geçer
//console.log(val);

//childNodes elementler dışındaki yapılarıda eleman olarak sayar
//children ise sadece elementleri eleman olarak kabul eder.


for(let i=0; i<list.childNodes.length;i++){
   
    if(list.childNodes[i].nodeType===1){
        
        console.log(list.childNodes[i]);
    }

}
for(let i=0;i<list.children.length;i++){
    console.log(list.children[i]);
}
