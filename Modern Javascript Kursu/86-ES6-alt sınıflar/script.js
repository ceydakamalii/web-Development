//ES5
function PersonEs5(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;
}
PersonEs5.prototype.SayHi=function(){
    return `Hello I'm ${this.firstname} ${this.lastname}`;
}
function CustomerEs5(firstname,lastname,phone,username){
    PersonEs5.call(this,firstname,lastname);
    this.phone=phone;
    this.username=username;
}
CustomerEs5.prototype=Object.create(PersonEs5.prototype);
let Ceyda=new CustomerEs5('Ceyda','Kamalı',5380629259,'ceydakamali11');
console.log(Ceyda.SayHi());
console.log(Ceyda);

//ES6
class PersonEs6{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    SayHi(){
        return `Hello I'm ${this.firstname} ${this.lastname}`;
    }
}
class CustomerEs6 extends PersonEs6{
    constructor(firstname,lastname,phone,username){
        super(firstname,lastname);
        this.phone=phone;
        this.username=username;
    }
    static getTotal(){
        return 1000;
    }
}
let Cemre=new CustomerEs6('Cemre','Kamalı',5364895622,'cemrekamliiiii');
console.log(Cemre.SayHi());
console.log(Cemre);
console.log(CustomerEs6.getTotal());
