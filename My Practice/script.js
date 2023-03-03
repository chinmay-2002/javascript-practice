// "use strict";

console.log("Hello Everyone");
// alert("Hello");

var msg = "Hello CHinmay";
// msg = 100;  //changes the type directly
console.log(typeof msg);

// if (true) {
//     var name = 'Matt';
//     console.log(name); // Matt
//    }
//    console.log(name); // Matt
//    if (true) {
//     let age = 26;
//     console.log(age); // 26
//    }
//    var name = "Chinmay";
//    console.log(name);
//    console.log(age); // ReferenceError: age is not defined 
   // jithe error ala tithun execution pudhch hot nahi like interpreter


//    Global Declarations
// Unlike the var keyword, when declaring variables using let in the global context, variables will not
// attach to the window object as they do with var.
// var name = 'Matt';
// console.log(window.name); // 'Matt'
// let age = 26;
// console.log(window.age); // undefined
// However, let declarations will still occur inside the global block scope, which will persist for the
// lifetime of the page. Therefore, you must ensure your page does not attempt duplicate declarations in
// order to avoid throwing a SyntaxError.


// to check whether variable is already declared or not using try catch and if


// if (typeof name !== 'undefined') {
//     let name;
// }

// try (age) {
//     // If age is not declared, this will throw an error
//     }
//     catch(error) {
//     let age;
//     }
//     // 'age' is restricted to the catch {} block scope,
//     // so this assignment will act as a global assignment
//     age = 26;

/*

when we use var in for loop we can print iterator outside it is not same
for the let

*/

/*

for (var i = 0; i < 5; ++i) {
    setTimeout(() => console.log(i), 0)
   }
   // You might expect this to console.log 0, 1, 2, 3, 4
   // It will actually console.log 5, 5, 5, 5, 5
   This happens because the loop exits with its iterator variable still set to the value that caused the
   loop to exit: 5. When the timeouts later execute, they reference this same variable, and consequently
   console.log its final value.
   When using let to declare the loop iterator, behind the scenes the JavaScript engine will actually declare a new iterator variable each loop iteration. Each setTimeout references that separate
   instance, and therefore it will console.log the expected value: the value of the iterator variable
   when that loop iteration was executed.
   for (let i = 0; i < 5; ++i) {
    setTimeout(() => console.log(i), 0)
   }
   // console.logs 0, 1, 2, 3, 4 

   */

// let msg = undefined; // its a datatype as undefined
// object is other than function or null
// function and symbol are also data types

/*

null type 

let car = null;
type of car is object

*/

/*

Integers can also be represented as either octal (base 8) or hexadecimal (base 16) literals. For an octal
literal, the first digit must be a zero (0) followed by a sequence of octal digits (numbers 0 through 7).
If a number out of this range is detected in the literal, then the leading zero is ignored and the number
is treated as a decimal, as in the following examples:
let octalNum1 = 070; // octal for 56
let octalNum2 = 079; // invalid octal - interpreted as 79
let octalNum3 = 08; // invalid octal - interpreted as 8
Octal literals are invalid when running in strict mode and will cause the JavaScript engine to throw a
syntax error.
To create a hexadecimal literal, you must make the first two characters 0x (case insensitive), followed
by any number of hexadecimal digits (0 through 9, and A through F). Letters may be in uppercase or
lowercase. Here’s an example:
let hexNum1 = 0xA; // hexadecimal for 10
let hexNum2 = 0x1f; // hexadecimal for 31
Numbers created using octal or hexadecimal format are treated as decimal numbers in all arithmetic
operations.

*/
let a = 0xB;
let b = 070; // 56 write octal num properly otherwise it will be decimal
console.log(typeof a , typeof b); // both will be number
console.log(a, b);

// valid but not recomended let a = .1;
/*
console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false - 10 is a number
console.log(isNaN("10")); // false - can be converted to number 10
console.log(isNaN("blue")); // true - cannot be converted to a number
console.log(isNaN(true)); // false - can be converted to number 1
*/

// let num2 = Number(""); // 0

// reached at page no 47