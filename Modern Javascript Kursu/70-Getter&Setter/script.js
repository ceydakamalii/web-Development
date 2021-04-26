//const person={
    //firstName='sadık',
    //lastName='turan',
    //getfullName : function(){
        //return `${this.firstName} ${this.lastName}`
    //},
    //setfullName : function(value){
        //const parts=value.split(' ');
        //this.firstName=parts[0];
        //this.lastName=parts[1];
    //}
//}
//person.setfullName('Ceyda Kamalı');
//console.log(person.getfullName());



//const person={
    //firstName='sadık',
    //lastName='turan',
    //get fullName(){
        //return `${this.firstName} ${this.lastName}`
    //},
    //set fullName(value){
        //const parts=value.split(' ');
        //this.firstName=parts[0];
        //this.lastName=parts[1];
    //}
//}
//person.fullName='Ceyda Kamalı';
//console.log(person.fullName);



const person = {
    firstName : 'Sadık',
    lastName : 'Turan'
}


Object.defineProperty(person,'fullName',{ 
    get function() {
        return `${this.firstName} ${this.lastName}`
    },
    set function(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
})

Object.defineProperty(person,'age',{
    value : 50,
    writable : false//bu değer değişmez demek
})

person.age = 55;
// person.firstName = 'Sena';
//person.fullName = 'Çınar Turan'
//console.log(person.fullName);
console.log(person.age);