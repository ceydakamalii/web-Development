// String

var str1 = 'Sadık';
var str2 = new String('Sadık');

console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);

if(str2 === 'Sadık'){
    console.log('yes');
}else{
    console.log('no');
}


String.prototype.repeat = function(n){//yanyana yazma
    return new Array(n+1).join(this);
}


console.log('sadık'.repeat(4));

// Number
var num1 = 10;
var num2 = new Number(10);
console.log(num1);
console.log(typeof num1);
console.log(num2);
console.log(typeof num2);


// Boolean
var bool1 = true;
var bool2 = new Boolean(true);
console.log(bool1);
console.log(typeof bool1);
console.log(bool2);
console.log(typeof bool2);


// Object
var obj1 = {
    name : 'sadık'
}

var obj2 = new Object({
    name : 'sadık'
});

console.log(obj1);
console.log(typeof obj1);
console.log(obj2);
console.log(typeof obj2);

// Array
var arr1 = ['ada','yiğit','sena','çınar'];
var arr2 = new Array('ada','yiğit','sena','çınar');
//aşağıda Array.prototype.remove || demek eğer prototypede bu işlem varsa bu prototype yapma demek.
Array.prototype.remove = Array.prototype.remove || function(member){
    var index = this.indexOf(member);
    if(index > -1){
        this.splice(index,1);
    }
    return this;
}

console.log(arr1.remove('sena'));