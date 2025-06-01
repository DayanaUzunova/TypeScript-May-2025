var Employee = /** @class */ (function () {
    function Employee(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Position: ").concat(this.position, ", Salary: ").concat(this.salary);
    };
    Employee.prototype.showSalary = function () {
        return "Salary: ".concat(this.salary);
    };
    return Employee;
}());
var emp = new Employee("Alice", "Manager", 5000);
console.log(emp.getDetails());
console.log(emp.showSalary());
console.log(emp.name);
