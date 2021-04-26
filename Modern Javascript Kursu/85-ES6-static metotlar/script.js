
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
    static sayHi(){//static metotlara instancelerle ulaşamayız objelerle ulaşırız.
        console.log('Hello there');
    }
}
let Cemre=new PersonEs6('Cemre','Student',2000);
console.log(Cemre);
console.log(Cemre.calculateage());
//Cemre.sayHi(); bu bize hata verir.
PersonEs6.sayHi();


class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static distance(a,b){
        const dx=a.x-b.x;
        const dy=a.y-b.y;
        return Math.hypot(dx,dy);
    }
}
const d1=new Point(10,10);
const d2=new Point(20,20);
console.log(Point.distance(d1,d2));