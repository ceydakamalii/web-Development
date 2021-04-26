//ES5
var PersonEs5=function(name,job,yearOfBirth){
    this.name=name;
    this.job=job;
    this.yearOfBirth=yearOfBirth;
}
PersonEs5.prototype.calculateage=function(){
    return 2018-this.yearOfBirth;
}
var yigit=new PersonEs5('yiğit','student',2010);
console.log(yigit);
console.log(yigit.calculateage());

//ES6
class PersonEs6{
    constructor(name,job,yearOfBirth){
        this.name=name;
        this.job=job;
        this.yearOfBirth=yearOfBirth;
    }
    calculateage(){
        return 2021-this.yearOfBirth;
    }
}
let Cemre=new PersonEs6('Cemre','Student',2000);
console.log(Cemre);
console.log(Cemre.calculateage());