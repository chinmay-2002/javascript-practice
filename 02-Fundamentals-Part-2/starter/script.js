// `use strict`;       use it to find the erros
let a;
// console.log(a);

// Declaration function
// function add(a,b) {
//     return a+b;    
// }

// console.log(add(10,20));\\\

// Expression function
// const add = function (a,b) {
//     return a+b;
// }
// console.log(add(10,340));

/*
// one line function

const msg = thisismsg => console.log(thisismsg);

msg("Hello world");

// arrow function with multiple params with multiple statemnets


const msgg = (firstmsg,secondmsg) =>{
    return firstmsg + secondmsg;
}
console.log(msgg("This is chinmay ", "He is very good"));

// function can be called within finction
*/


// JS Arrays

const arr = Array(1,2,3,4,5,6);

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

console.log("Array length", arr.length);

arr.forEach(element => {
    console.log(element);
});

// Array methods

/*
1) push
2) pop
3) shift
4) unshift
5) indexOf("Chinmay")
6) includes("CHinmay") true or false
*/


// Objects used to store multiple datatypeos in one variable i.e. object
