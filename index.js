// Undefined vs null
// Undefined - Jvascript knows variables exists but no values is assigned yet

let a
console.log(a);

// output - undefined => because variable is decalared but not initialized
// null means developer intentionally assigned empty values

let user = null;
console.log(user);

// Interview
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object

// typeof null is object why ?
// This is a historical javascript bug
// null is not an object


// memory
let d;

// memory d -> undefined

let c = null;

// memory c -> null

// Difference
// undefined -> JS assigned automatically
// null -> developer assigned manually

let b;
console.log(b == null);
console.log(b === null);


// Var let const

// var old way fucntion scoped
// var can redeclare and reassign

var x = 10;
var x = 20;

console.log(x);

// output 20

// let block scoped 
// let can reassign but not redeclared

let m = 10;
m = 20;
console.log(m);

// let z = 10;
// let z = 20;

// console.log(z);

// Syntax error because z is already declared

// const block scoped cannot redeclare and reassign

// const l = 10;
// l = 20;

// console.log(l);

// output type error assignment to const variable



// wrong - const means immutable
// only variable reference cannot change but object contents can change

const users = {
    name: "Vimal"
}

users.name = "Raj"

console.log(users)

// output {name : "Raj"} because object itself exists at same memory reference


// Block scope

// {
//     let p = 10;  
// }

// console.log(p);

// Output:  Reference error because let is block scoped


{
    var h = 10
}

console.log(h);

// output 10 because var ignores block scope


// Hoisting

// Javascript runs in two pahses
// Phase 1 - memory creation phase => JS scans variables/functions before execution memory allocated


// Phase 2 - Execution => code runs line by line


// Var hoisting

console.log(u);
var u  = 75;

// output undefined because var is hoisted and memory allocated but value is not assigned yet

// let and const hoisting

// wrong - let and const are not hoisted
// let and const are hoisted but placed in Temporal Dead Zone

// console.log(o);
// let o = 10;

// output refernce error 
// memory exists but inaccessible before initialization 
// that inaccessible peridos is temporal dead zone


// Function Hoisting
// Function declaration is fully hoisted

sayHello()

function sayHello(){
    console.log("Hello");
}

// output: Hello

// sayHi()

// var sayHi = function(){
//     console.log("Hi");
// }

// Type error: sayHi is not a function

// why ?
// at call time sayHi = undefined

// Topic 4 - use strict

// use strict enables stricter parsing prevents dangerorus javascript mistakes

// Without strict mode

// v = 10;
// console.log(v);

// output 10 javscript silenty creates global variable very dangerorus


// "use strict"
//  v = 10;
// console.log(v);

// Refernce error v is not defined


// == vs ===

// == loose equality checks value after type coercion
// checks only the value after type coercion

console.log(5 == "5")

// output true because js converts "5" -> number

// === strict equality
// checks value and datatype 

console.log(5 === "5");

// output false

// Interview

console.log(false == 0);  // true
console.log("" == 0);
console.log(null == undefined);

// so double equals become dangerous

// Best practise to use === always



