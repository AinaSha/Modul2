//Task 1
// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let [name, surname, department, position, salary] = arr;

// console.log(name);
// console.log(surname);
// console.log(department);
// console.log(position);
// console.log(salary);


//Task 2
// function func() {
// 	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// }

// let [name, surname, department, position, salary] = func();

// console.log(name);
// console.log(surname);
// console.log(department);
// console.log(position);
// console.log(salary);


//Task 3
// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let [, , department, position, ,] = arr;

// console.log(department);
// console.log(position);


//Task 4
// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let [name, surname, ...info] = arr;

// console.log(name);
// console.log(surname);
// console.log(info);


//Task 5
// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];

// let [name, surname, department, position="джуниор"] = arr;

// console.log(name);
// console.log(surname);
// console.log(department);
// console.log(position);


//Task 6
let arr = [,,31];

function func() {
   let date = new Date()
	return date.getMonth()+1;
  
}

function funcYear() {
   let now = new Date();
   return now.getFullYear();
}

let [year = funcYear(), month = func(), day ] = arr;

console.log(day);
console.log(month);
console.log(year);




