// var i=3;
// function cha(j){
//     j=4;
// }
// cha(i);

// console.log(i)


// if("2"==2){
//     console.log(true)
// }
// else{
//     console.log(false)

// }

// function Myclass() {
//     this.a="hello";
//     this.b="worls";
// };

// Myclass.prototype.a="john"
// Myclass.prototype.c=12;

// obj =new Myclass();
// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);
// console.log(obj.d);


// var a={};
// var b=a;
// a.v=1;
// b.v=2
// console.log(a.v);



// function closestToZero(numbers) {
//     // Your code goes here
//     if(!numbers.length){
//         return 0;
//     }

//     let closest = 0;

//     for (let i = 0; i < numbers.length ; i++) {
//         if (closest === 0) {
//             closest = numbers[i];
//         } else if (numbers[i] > 0 && numbers[i] <= Math.abs(closest)) {
//             closest = numbers[i];
//         } else if (numbers[i] < 0 && - numbers[i] < Math.abs(closest)) {
//             closest = numbers[i];
//         }
//     }

//     return closest;
// }
// var test1 = closestToZero([-9, 8, 2, -5, 7]);
// print(test1); // Should be 2
// var test2 = closestToZero([-3, -2, -1, 1, 2, 3]);
// print(test2); // Should be 1

// JavaScript code​​​​​​‌​​‌​‌‌‌‌​‌‌​​‌​‌‌‌​​​​‌​ below
// Use printErr(...) to debug your solution.
// console.log(true==1)


// var Myclass = function (n) {
//   this.n = n
//   console.log('1', n)//4
// }
// Myclass.prototype.square = function (n) {
//   this.n = n * n;
//   console.log('2', this.n) //
// }

// var obj = new Myclass(4);
// obj.square(4);
// console.log('3', obj.n)


// if(' '){
//     console.log(true)
// }else{
//   console.log(false)
// }


// function isTwin(a, b) {
//     let len1 = a.length;
//     let len2 = b.length;
//     if(len1 !== len2){
//        console.log('Invalid Input');
//        return
//     }
//     let str1 = a.split('').sort().join('');
//     let str2 = b.split('').sort().join('');
//     console.log(str1)
//     console.log(str2)
//     if(str1 === str2){
//        console.log("True");
//     } else { 
//        console.log("False");
//     }
//  }
//  isTwin("Hello", "world"); // false
// isTwin("acb", "bca"); // true
//  isTwin("lookout", "outlook"); // true


// // program to create JavaScript object using object literal
// const person = { 
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
//     greet: function() {
//         console.log('Hello everyone.');
//     },
//     score: {
//         maths: 90,
//         science: 80
//     }
// };

// console.log(typeof person); // object

// // accessing the object value
// console.log(person.name);
// console.log(person.hobbies[0]);
// person.greet();
// console.log(person.score.maths);

// // program to create JavaScript object using instance of an object
// const person = new Object ( { 
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
//     greet: function() {
//         console.log('Hello everyone.');
//     },
//     score: {
//         maths: 90,
//         science: 80
//     }
// });

// console.log(typeof person); // object

// // accessing the object value
// console.log(person.name);
// console.log(person.hobbies[0]);
// person.greet();
// console.log(person.score.maths);

// // program to create JavaScript object using instance of an object

// function Person() {
//     this.name = 'John',
//     this.age = 20,
//     this.hobbies = ['reading', 'games', 'coding'],
//     this.greet = function() {
//         console.log('Hello everyone.');
//     },
//     this.score = {
//         maths: 90,
//         science: 80
//     }

// }

// const person = new Person();

// console.log(typeof person); // object

// // accessing the object value
// console.log(person.name);
// console.log(person.hobbies[0]);
// person.greet();
// console.log(person.score.maths);

// let arr = [1,2,[3,4,[5,6,[7,8]]]]
// let arr1=[]
// function covertArr(arr){
// arr.map((item,index,array)=>{
// 	 if(Array.isArray(item)){
//     return covertArr(item)
//    }
//   return arr1.push(item)
// })
// }
// covertArr(arr)

// console.log(arr1)