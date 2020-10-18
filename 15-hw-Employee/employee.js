class Employee{
    constructor(id, firstName, lastName, age, salary) {
        this._id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = +age;
        this._salary = +salary;
    }
    get id() {
        return this._id;
    }
    set age(age){
        this._age = +age;
    }
    get age(){
        return this._age;
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        this._salary = +value;
    }
    fullInfo(){
        return `${this.id} ${this.firstName} ${this.lastName} ${this.age} ${this.salary}`;
    }

}
