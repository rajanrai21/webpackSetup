// var variable = 1;
// console.log(variable); 
// console.log(typeof variable);
// variable = 'Rajan';
// console.log(variable); 
// console.log(typeof variable);
// variable = 1.345;
// console.log(variable); 
// console.log(typeof variable);
// variable = [1,2,3,4];
// console.log(variable); 
// console.log(variable[2]);
// console.log(typeof variable);
// variable = ['Rajan', 'Rai', 'Aman'];
// console.log(variable); 
// console.log(typeof variable);
// variable = [1,'Rajan',1.34,[3,4,'Rai'],{a:'test'}];
// console.log(variable); 
// console.log(typeof variable);
// variable = {
//     name:'Rajan Rai',
//     age: 25,
//     height: 5.8,
//     mobile: 9876543210,
//     books: ['The Alchamist','Rich Dad poor dad', '11 minutes']
// }
// console.log(variable); 
// console.log(variable.books[2]);
// console.log(typeof variable);

//Normal Function
// function fun(num){
//     let temp = 10;
//     return num*temp;
// }
// console.log(fun(3))

//Anonymous function function without name 
// let x = function (num){
//     let temp = 10;
//     return num*temp;
// }
// console.log(x(5))

//Arrow Function 
// let x =  (num) =>  num*10;
// console.log(x(7))

// let z = (x=1,y=1) => x**y;
// console.log(z(3,4).toString);
//spread operator
// var a = [1,2,3];
// var b = [4,5,...a,6];
// console.log(b);
// //rest parameter
// function fun(...a){
//     console.log(a)
// }
// fun(12,45,6,1,2,3);
// let rupee = 20
// let dollar = rupee * 70;
// console.log(`${rupee} rupee is ${dollar} dollar`)
let z = ['Rajan',1,56];
let [a,,c] = z;
console.log(a)