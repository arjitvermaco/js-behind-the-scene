// // 'use strict';
// // const private = "Hello"
// // console.log(private);
// // const interface = true;
// //Scoping In JS

// //Global Scope
// let userAge = 10;

// function greetUser() {
//     //Block Scoped or local scoped
//     userAge = 20;
//     console.log("Hi, I am " + userAge);

//     // function sayHello(){
//     //     let userAge = 30;
//     //     console.log(userAge);
//     //     console.log("Hello");
//     // }
//     // sayHello();

// }

// greetUser();
// console.log(userAge);
// // sayHello()

// let allowed = true;
// if (allowed) {
//     //Block Scope
//     userAge = 50;
//     console.log(userAge);
// }
// console.log("Outside", userAge);

// //Hoisting
// sayHello()
// //Function declarations are hoisted
// function sayHello() {
//     console.log("Hello");
// }

// // sayHi()
// //Function expressions are not hoisted
// const sayHi = function () {
//     console.log("Hi!!");
// }
// //Arrow functions are not hoisted
// // addNum()
// const addNum = (a, b) => a + b;

// console.log(myName)

// var myName = "Arjit";

// console.log(window)

// let job = "Developer";
// const age = 20;

// console.log(job)
// console.log(age);

// console.log(window.location.href);
// console.log(location.protocol);

// // alert("Hello")

// // var screenY = 1;
// let y = 10;
// const z = 100;

// // console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// this keyword
// Lexical
// In global scope this always refers to the window obj
// console.log(this)

// function calcAge(birthYear) {
//     console.log(this)
//     return 2020 - birthYear;
// }

// const calcAge2 = function (birthYear) {
//     console.log(this)
//     return 2020 - birthYear;
// }

// const calcAge3 = (birthYear) =>{ 2020 - birthYear};

// calcAge()
// calcAge2()

// let user = {
//     name: "Arjit",
//     age: 20,
//     calcAge: function () {
//         console.log(this)
//         const self = this;
//         let greet = () => {
//             console.log(self)
//         }
//         greet()
//         return 2020 - this.age;
//     },
//     sayHello:()=>{
//         console.log(this)
//         console.log("Hello")
//     },
//     abc:{
//         name:"An",
//         greet:()=>{
//             console.log(this)
//             console.log("Hi")
//         }
//     }
// }

// user.calcAge()
// user.abc.greet()

//Difference between arrow and normal functions
// 1. Arrow functions do not have their own this
// 2. Arrow functions do not have their own arguments

// const addExpr = function(a,b){
//     console.log(arguments)
//     return a+b;
// }

// const addArr = (a,b)=>{
//     console.log(arguments)
//     return a+b
// }

// addExpr(2,3,4,5,6,7)
// addArr(2,3,4,5,6,7)

//Obj vs Primitives

// let age = 30;
// let newAge = age;

// age = 32;
// console.log(age,newAge);

// const me = {
//     name: "Arjit",
//     age: 20,
//     address: "Pune"
// }
// //Shallow Copy
// const myFriend = me;
// console.log(myFriend === me)
// me.name = "Hello"
// console.log(myFriend.name);
// //Deep Copy
// const myNewFriend = Object.assign({},me);
// console.log(myNewFriend === me)

// let myFriends= ['Arjit','Rahul','Rajesh','Sachin'];

// let myNewFriends = myFriends;

// myFriends.push('Rakesh')
// console.log(myNewFriends)

console.log("Hello!!!");
setTimeout(() => {
  console.log("How Are You?");
}, 0);
console.log("Have a good day!!!");
