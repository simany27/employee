const company = new Company();
const id = document.getElementById('id');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const salary = document.getElementById('salary');
const buttonAdd = document.getElementById('add');
const buttonShow = document.getElementById('show');
const buttonStat = document.getElementById('stat');
const infoEmp = document.getElementById('ulEmp');
const infoStat = document.getElementById('ulStat');

buttonAdd.addEventListener('click', handleButtonAdd);
buttonShow.addEventListener('click', handleButtonShow);
buttonStat.addEventListener('click', handleButtonStat);

function handleButtonAdd() {
    if (id.value && firstName.value && lastName.value && age.value && salary.value) {
        company.addEmployee(new Employee(id.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value.trim(), salary.value.trim()));
        id.value = '';
        firstName.value = '';
        lastName.value = '';
        age.value = '';
        salary.value = '';
    }
}

function handleButtonShow() {
    while (infoEmp.lastElementChild) {
        infoEmp.removeChild(infoEmp.lastElementChild);
    }
    company.showCompany().forEach(e => createLi(e));

    function createLi(e) {
        const li = document.createElement('li');
        li.append(e.fullInfo());
        infoEmp.append(li);
    }
}

function handleButtonStat() {
    while (infoStat.lastElementChild) {
        infoStat.removeChild(infoStat.lastElementChild);
    }
    const totalSalary = document.createElement('li');
    totalSalary.append(`Total salary: ${company.totalSalary()}`);
    const avgSalary = document.createElement('li');
    avgSalary.append(`Average salary: ${company.avgSalary()}`)
    const quantity = document.createElement('li');
    quantity.append(`Quantity of employees: ${company.quantity}`);
    const min = document.createElement('li');
    min.append(`Min age: ${company.minAge()}`);
    const max = document.createElement('li');
    max.append(`Max age: ${company.maxAge()}`);
    const avgAge = document.createElement('li');
    avgAge.append(`Average age: ${company.avgAge()}`);

    infoStat.append(totalSalary, avgSalary, quantity, min, max, avgAge);
}

