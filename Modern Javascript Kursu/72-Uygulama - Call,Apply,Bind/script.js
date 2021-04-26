//Fonka gönderdiğimiz sayının herhangi bir aralıkta olup olmadığını kontrol etme
//bu aralığı ya obje içerisinde ya da fonkta oluştururuz
//örneği zenginleştirmek için obje içerisnde alalım.

var num = {
    min: 0,
    max: 100,
    checkNumericRange: function(value){
        if(typeof value !== 'number'){
            return false;
        }
        else{
            return value>=this.min && value<=this.max;
        }

    }
}
console.log(num.checkNumericRange(20));
console.log(num.checkNumericRange(200));
console.log(num.checkNumericRange('20'));

var num1={min:55 ,max:85};
console.log(num.checkNumericRange.call(num1,60));
console.log(num.checkNumericRange.apply(num1,[60]));

var checkNumber=num.checkNumericRange.bind(num1);
console.log(checkNumber(40));