/*
    Demo : Creating Objects
    ** Dışarıdan name ve salary bilgilerini alan Employee constructor'i tanımlayınız.
    ** Yıl içinde o ana kadar alınan toplam maaş ve alınan toplam vergi tutarını hesaplayan fonksiyonu oluşturun.
      Vergi dilimleri
        ** 20.000 'e kadar %20 vergi
        ** 30.000 'e kadar %25 vergi
        ** 30.000 'den sonra %27 vergi
    ** 
*/
function Employee(name,salary){

    if (!(this instanceof Employee)){//bu nesne employee değilse yani new ile oluşmamışsa
        return new Employee(name,salary);
    }
    this.name = name;
    this.salary = salary;
}

Employee.prototype.calculateSalary = function(){
    var month = new Date().getMonth()+1;
    var tax = 0;//vergi
    var total=this.salary*month; //toplam para  

    if (total<=20000){
        tax = total*0.2;
    }else if(total >20000 && total<=30000){
        tax = total * 0.25;
    }else{
        tax = total * 0.3;
    }

    return {
        tax : tax,
        paid : total - tax 
    }
}

var emp1 = Employee('Yiğit',3000);
var emp1_salary = emp1.calculateSalary();

console.log(`${emp1.name} isimli personel toplam ${emp1_salary.tax} TL vergi kesintisi ile ${emp1_salary.paid} TL maaş almıştır`);
console.log(emp1.calculateSalary());
var emp2 = new Employee('Can',4000);
var emp2_salary = emp2.calculateSalary();
console.log(`${emp2.name} isimli personel toplam ${emp2_salary.tax} TL vergi kesintisi ile ${emp2_salary.paid} TL maaş almıştır`);
console.log(emp2.calculateSalary());