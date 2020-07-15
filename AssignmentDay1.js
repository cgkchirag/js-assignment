 /////////////////////////  Console Functions in js  ////////////////////////////////////////
 
  
 // console.log is used to display anything on console of chrome developer tools
 console.log("Hey I am Console.log")


 // it is used to give the warning
 console.warn("Hey I am warning");

// it is used to give any error
 console.error("Hey I am Error");

 // it is used to give any error
 console.error();

//  Time and timeEnd Functions
console.time('time taken');

 // var declared with objects
 var a = { name: "chirag", age: "21", city:"pune"};

 var b = { name: "shivam", age: "21", city:"pune"};

 var c = { name: "kunal", age: "21", city:"pune"};
 
// bad practice
 /*console.log(a);

 console.log(b);

 console.log(c); */

 // good practice
 console.log({a,b,c});

 // used to show in table format
 console.table({a,b,c});

 console.timeEnd('time taken');

 // array inside log
 console.log([1,2,3,4]);

 // object inside log
 console.log({a:1,b:2,c:3,d:4});

// used to clear the console window
// console.clear();


// it is used to count the number
// console.count();
for(let i=0; i<5; i++){
    console.count(i);
}

// groups and groupEnd is used group the contents in seperate block
console.group('simple');
console.warn("Hey I am warning");
console.error("Hey I am Error");
console.log("Hey I am Console.log")
console.groupEnd('simple');

console.log("new section");

console.log('%c Custom message', 'color: skyblue');

/* 
DiFFERENCE BETWEEN VAR LET AND CONST

var declarations are globally scoped or function scoped. and if you go to see for let and const
they are block scoped. 
var varibles can be updated or re-declared within its scope;
while let varibles can be updated but not re-declared
const varibles neither be re-declared or updated.
*/ 

/////////////////// Var Let Const Practical use  //////////////////////////////////

//var


// String
var name = "Chirag";

// Number
var age ='21';

// Boolean
var canfly = false;

// Array
var language = ['Hindi', 'English','Marathi'];

// Objects
var friends = {
    name:"Shivam",
    hobby:"coding"
};

var a = 10;
console.log(a);

var a = null;
console.log(a);

//let
{
    let city;
    let name = "Shivam";
    name = "kunal";
    //let name ="chirag"; it throws error
    console.log("Using let:",name);
}

console.log(name);

console.log(friends);

//const - Constant

const country = "India";
console.log(country);

// country = "uk";


/* const fruits =['mango', 'apple'];
console.log(fruits);

fruits.push('banana');
console.log(fruits); */


// it is used to declare private varibles
const _fruits =['mango', 'apple'];
console.log(_fruits);

_fruits.push('banana');
console.log(_fruits);

// fruits=['banana','mango', 'apple'];

/* Naming A variable

1. name cannot start with a number

2. It can start with letters, $, _.

3. $ is mainly used in JQuery

4. _ is used to declare private variables [OOPS In Javascript]

/* Naming conventions 

 1. camelCase  *************
 
 2. kebab-case
 
 3. snake_case
 
 4. PascalCase 
*/

////////////////////////////////////// Data Types In JS ///////////////////////////////////////////
// There Are Seven Data types in JS

/* 1.Number : 5,6,7,8 ETC

   2.String : 'abc';

   3.null   : always assigned as null value.

   4.boolean : it is an logical entity which has 2 values i.e true and false

   5.undefined : a variable that has not been assigned any value.

   6.object : it forms the buliding-blocks for javascript.

   */




