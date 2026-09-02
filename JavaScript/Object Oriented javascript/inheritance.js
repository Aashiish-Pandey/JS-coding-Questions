class Employee {
  constructor(name) {
    this.name = name;
  }

  getSalary() {
    return 300000;
  }
}

class Manager extends Employee {
  constructor(name, bonus) {
    super(name);
    this.bonus = bonus;
  }
  getSalary() {
    return super.getSalary() + this.bonus;
  }
}

const manager = new Manager("Ashish", "10");
console.log(manager.getSalary());
