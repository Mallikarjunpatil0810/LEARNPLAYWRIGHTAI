// Static Variable and Method Example

class Employee {
  // Static variable (class variable)
  static companyName = "TechCorp";
  static totalEmployees = 0;

  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
    // Increment static counter when a new employee is created
    Employee.totalEmployees++;
  }

  // Instance method
  displayDetails() {
    console.log(`Name: ${this.name}, Salary: ${this.salary}, Company: ${Employee.companyName}`);
  }

  // Static method
  static getCompanyInfo() {
    return `Company: ${Employee.companyName}, Total Employees: ${Employee.totalEmployees}`;
  }

  // Static method to compare salaries
  static compareSalaries(emp1, emp2) {
    if (emp1.salary > emp2.salary) {
      return `${emp1.name} has higher salary than ${emp2.name}`;
    } else if (emp1.salary < emp2.salary) {
      return `${emp2.name} has higher salary than ${emp1.name}`;
    } else {
      return `Both have equal salary`;
    }
  }
}

// Accessing static variable directly via class name
console.log("Company Name:", Employee.companyName);

// Creating employee instances
const emp1 = new Employee("Alice", 50000);
const emp2 = new Employee("Bob", 60000);
const emp3 = new Employee("Charlie", 55000);

// Calling instance methods
emp1.displayDetails();
emp2.displayDetails();
emp3.displayDetails();

// Calling static methods via class name
console.log(Employee.getCompanyInfo());
console.log(Employee.compareSalaries(emp1, emp2));

// Static variable is shared across all instances
console.log("Total Employees created:", Employee.totalEmployees);

// Static members cannot be accessed via instance
console.log("emp1.companyName:", emp1.companyName); // undefined
console.log("emp1.getCompanyInfo:", emp1.getCompanyInfo); // undefined