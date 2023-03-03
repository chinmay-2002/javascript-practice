console.log("Hello Assignment Checkers")

let country = 'India';
let continent = 'Asia';
let population = 1250000000;

console.log("Country :" + country);
console.log("Continent :" + continent);
console.log("Population :" + population);


var isIland = false;
let language;

console.log("Type of isIland "+ typeof(isIland)); //boolean
console.log("Type of language " + typeof(language)); //undefined
console.log("Type of Population " + typeof(population)); //number
console.log("Type of Country " + typeof(country)); //string

const a = 10; // can't be change furthure
// a = 4;
console.log(a)
let b = null;

language = "Marathi";
language = "Sanskrit";
isIland = 'chimnay';  // works
console.log(language + isIland);
console.log(typeof(isIland)); // string
console.log(typeof(b)); // object
/* Variables declared by let are only available 
inside the block where they're defined. Variables 
declared by var are available throughout the function 
in which they're declared.*/

let description = 'Portugal is in Europe, and its 11 millionpeople speak portuguese';
console.log(typeof description);
console.log(description);

let name = 'Chinmay';
let newName = `I am ${name}`;
console.log(newName);
// `` = back tiks

// multiline

console.log(`Hello chinmay
    how are you`   // starts with new line, template literas
);

// type conversion explore it tyour own
let s = "3454";
console.log(Number(name));
console.log(Number(s) + 45) ; // summation happens






// type coersion

console.log('12' + 34);

// 5 falsy values 0,'', null, NaN, undefined
console.log(Boolean("345"));

const h = 0;
// 123 is truthy values like cpp
//0 converted to falsy value in if condition

// == is loose equatlity operator and 
// === is strict equality oeprator

// '18' == 18 is true but 
// '18' === 18 is false
//  \!== and !=== also there
// switch case is similar to cpp or java
// Conditional ternary operator is same as cpp and java
console.log(`So we see ${a ==10 ? `Hell` : `Cell`} `);
// Check the java version in brief