//10.1
let company = {
  sales: [{name: 'John', salary: 1000},{name:'alice', salary: 600}],
  development: {
    web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
    internals: [{name: 'Jack', salary: 1300}],
  }
};
let sum = 0;
function GetObj (department) {
  if (Array.isArray(department)) {
    for (let person of department) {
    sum += department.salary;
  }
  } else {
    for (let i in department) {
      GetObj(i[key]);
    }
  }
}
GetObj(company);
console.log(sum);