//Task 1

// function func([name, surname, department, position, salary]) {
//    console.log(name);
//    console.log(surname);
//    console.log(department);
//    console.log(position);
//    console.log(salary);

// }

// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );


//Task 2 

// function func([name, surname, ...info]) {
// 	console.log(name);
//    console.log(surname);
//    console.log(info);
// }

// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );



//Task 3 

// function func([name, surname, department, position="джуниор"]) {
// 	console.log(name);
//    console.log(surname);
//    console.log(department);
//    console.log(position);
// }

// func( ['Иван', 'Иванов', 'отдел разработки'] );


//Task 4

// function func(department, [name, surname],[year, month, day]) {
// 	console.log(name);
// 	console.log(surname);
	
// 	console.log(year);
// 	console.log(month);
// 	console.log(day);
// }

// func( 'отдел разработки', ['Иван', 'Иванов'], [2018, 12, 31] );


//Task 5

// function func({color, width, height}) {
//    console.log(color);
//    console.log(width);
//    console.log(height);
// }

// func( {color: 'red', width: 400, height: 500} );


//Task 6

function func({color = "black", width, height}) {
	console.log(color);
   console.log(width);
   console.log(height);

}

func( {color: 'red', width: 400, height: 500} );