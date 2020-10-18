class Company{
    constructor() {
        this._empoyees = [];
    }
    showCompany() {
        return [...this._empoyees];
    }
    addEmployee(employee){
        if(this._empoyees.findIndex(item => item.id === employee.id) < 0){
            this._empoyees.push(employee);
        }
    }
    removeEmployee(id){
        this._empoyees = this._empoyees.filter(item => item.id !== id);
    }
    get quantity(){
        return this._empoyees.length;
    }
    totalSalary(){
        return this._empoyees.reduce((sum,item) => sum + item.salary,0);
    }
    avgSalary(){
        return this.totalSalary()/this.quantity;
    }
    avgAge(){
        return this._empoyees.reduce((sum,item) => sum + item.age,0)/this.quantity;
    }
    minAge(){
        const array = this._empoyees.map(e => e.age);
        return Math.min(...array);
    }
    maxAge(){
        const array = this._empoyees.map(e => e.age);
        return Math.max(...array);
    }
}