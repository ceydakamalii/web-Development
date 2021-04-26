//sets collection -unique value

let val;
var mySet=new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);//önceden 2 olduğu için tekrardan eklemez.
mySet.add('three');
mySet.add(4);
mySet.add({a:1,b:2});
var obj={a:1,b:2};
mySet.add(obj);
console.log(mySet);
val=mySet;
val=mySet.has(1);
console.log(val);
val=mySet.has(obj);
console.log(val);
val=mySet.size;
mySet.delete(1);
console.log(val);
console.log(mySet);
for (let i of mySet){
    console.log(i);
}
for (let i of mySet.keys()){
    console.log(i);
}
for (let i of mySet.values()){
    console.log(i);
}
for (let [key,value] of mySet.entries()){
    console.log(key,value);
}
console.log(Array.from(mySet));

let mySet2=new Set([1,2,3,4]);
console.log(mySet2);


//kesişim
// var intersect=new Set(Array.from(mySet).filter(x => mySet2.has(x)));
var intersect=new Set([...mySet].filter(x=>mySet2.has(x)));
console.log(intersect);


//farkları

var difference=new Set([...mySet].filter(x=>!mySet2.has(x)));
console.log(difference);