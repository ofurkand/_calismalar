let Employee = function(name,salary) {

    // Employee sınıfına yeni bir öğe atanırken 'new' ibaresinin 
    // kullanılmayabileceğine olanak sağlamak için yapılan ekleme 
    if (!(this instanceof Employee)){
        return new Employee(name,salary);
    }

    this.name = name;
    this.salary = salary;

    // this.calculateEarnedAmount = (month=(new Date().getMonth()+1))=>{
    // Employee.prototype.calculateEarnedAmount = (month=(new Date().getMonth()+1))=>{
    //     return this.salary*month
    // }

    //this.calculateTotalTaxes = (month=(new Date().getMonth()+1))=>{

    // this.calculateBoth = () => 
    // Employee.prototype.calculateBoth = () =>
    //     {return [calculateEarnedAmount(12),calculateTotalTaxes(12)]}
}

Employee.prototype.calculateSalary = function(month=(new Date().getMonth()+1)){
        // let annualSalary = this.salary*12;
        let total = this.salary*month;
        console.log(month);
        let tax = 0;
        if (total <= 20000) {
            tax = total*(20/100)
        }
        else if (total <= 30000 && total > 20000){
            tax = total*0.25
        }
        else{
            tax = total*(30/100)
        }
        return{
            paid: (total - tax).toFixed(2),
            tax: tax.toFixed(2)
        }
    }
// Program
var emp1 = Employee('Yiğit',3000) // 7. Kod Satırı
console.log(emp1);
var emp2 = new Employee('Can',4000)
console.log(emp2);
// console.log((new Date().getMonth()+1));

console.log(emp1.calculateSalary());
console.log(emp2.calculateSalary());