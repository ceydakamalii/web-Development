var a = 10;
var b = a;

console.log(a);//a=10
console.log(b);//b=10


var obj1 = {
    name : 'Ada',
    age : 10
}

var obj2 = obj1;
obj1.age = 12;

console.log(obj1.age);//12
console.log(obj2.age);//12


var num = 50;
var account = {
    name : 'Yiğit',
    accountNumber : '1213465'
}

function update(a,b){
    a = 100;
    b.accountNumber = '222222';
}

update(num,account);//50,222222

console.log(num);//50
console.log(account);



var products = [
    {name : 'product name',price : 1000},
    {name : 'product name',price : 1000},
    {name : 'product name',price : 1000},
    {name : 'product name',price : 1000},
    {name : 'product name',price : 1000},
    {name : 'product name',price : 1000}
]

function filterProducts(prd){
    for (var i=0;i<products.length;i++){
        prd[i].name="Hello";
    }
}

filterProducts(products);
console.log(products);