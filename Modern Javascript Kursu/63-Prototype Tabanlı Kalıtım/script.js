// Prototypal Inheritance

let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth= yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    return 2018 - this.yearOfBirth;
}

let Teacher = function(name,yearOfBirth,job,subject){
    Person.call(this,name,yearOfBirth,job);//person nesnesinin özelliklerini kullanmak için persondan oluştuğunu belli etmek için
    this.subject = subject;
}

// Inherit the Person prototype methods
Teacher.prototype = Object.create(Person.prototype);//person nesnesinin prototypesini alıyor

// set Teacher constructor
Teacher.prototype.constructor = Teacher;//yukarda yılan işlemden sonra teacher nesnesinin özellikleri kayboluyor bu yüzden bu işlemde gerekiyor.

Teacher.prototype.greeting = function(){
    return 'hello my name is '+this.name;
}

let emel = new Teacher('emel',1989,'teacher','math');

console.log(emel);
console.log(emel.calculateAge());