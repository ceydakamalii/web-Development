let val;
const numbers=new Map();
numbers.set(1,'two');
numbers.set('2','three');
numbers.set('three','four');
val=numbers;
console.log(val);
val=numbers.get(1);// 1 key değerine sahip olanin valuesini verir
console.log(val);
val=numbers.get('2');
val=numbers.get('three');
val=numbers.size;//eleman sayısı
val=numbers.has(1);
val=numbers.delete('2');
val=numbers.has('2');
//numbers.clear();

console.log(val);
for(var [key,value] of numbers){
    console.log(key+' '+value);
}
for(var [key,value] of numbers.entries()){
    console.log(key+' '+value);
}
for(var i of numbers.keys()){
    console.log(i);
}
for(var i of numbers.values()){
    console.log(i);
}
numbers.forEach(function(key,value){
    console.log(key+'-'+value);
});
var first=new Map([
    [1,'one'],
    [2,'two'],
    [3,'three']
]);
var second=new Map([
    [4,'four'],
    [5,'five']
  
]);

var merged=new Map([...first,...second]);
console.log(merged);