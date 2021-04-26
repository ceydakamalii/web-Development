const boxes=document.querySelectorAll('.box');
//ES5
let boxES5=Array.prototype.slice.call(boxes);
// boxES5.forEach(function(box){
//     box.style.backgroundColor='green';
// });
//console.log(boxES5);
//ES6
//Array.from(boxes).forEach(box => box.style.backgroundColor='grey')


//ES5
// for(let i=0;i<boxES5.length;i++){
//     if(boxES5[i].className=='box box1 ml-2'){
//         continue;
//     }
//     boxES5[i].textContent='I\'m changed';
//     boxES5[i].style.backgroundColor='blue';
// }

//ES6
// var boxES6=Array.from(boxes);
// for(let box of boxES6){
//     if(box.className=='box box1 ml-2'){
//         continue;
//     }
//     box.textContent='I\'m changed';
//     box.style.backgroundColor='blue';

// }


//from
 let arr=Array.from('Modern JavaScript');//dizi yapar her harfi ayırı eleman olarak kullanır boşlukta elemandır.
 console.log(arr);
const products=[
    {name:'samsung s8',price:3500},
    {name:'samsung s8',price:3000},
    {name:'samsung s7',price:2500},
    {name:'samsung s6',price:1500}
];
console.log(Array.from(products,prd => prd));
console.log(Array.from(products,prd => prd.name));
console.log(Array.from(products,prd => prd.price));
console.log(Array.from(products,prd => prd.name=='samsung s8'));
console.log(products.find(prd => prd.name=='samsung s8'));
console.log(products.filter(prd => prd.name=='samsung s8'));
console.log(products.findIndex(prd => prd.price==2500));


let numbers=['a','b','c'];
let entries=numbers.entries();
console.log(entries);
for(let i of entries){// [0,'a'],[1,'b'],[2,'c']
    console.log(i);
}
let keys=numbers.keys();
for(let i of keys){//0 1 2 
    console.log(i);
}
let values=numbers.values();
for(let i of values){
    console.log(i);
}