// Functions is a reusable block of code
// functions are objects in javascript
// functions can be stored
// functions can be passed as arguments
// functions can be returned from other functions
// functions can be executed later


// Basic function

function greet() {
    console.log("Hello");
}

greet();

// Parameters vs arguments

// a,b - parameters
// 10,20 - arguments

// function add(a,b){
//     console.log(a + b);
// }

// add(10, 20);

// Functions are objects

// function test() {
//     console.log("Hi");
// }

// console.log(typeof test);

// output - function becuase function is a special object

// Function can be stored

function sayHi(){
    return "Hello";
}

const x = sayHi

console.log(x());

// Note => no parentheses while storing but parantheses while executing


console.log(test);

// test => reference to function
// you are printing function reference
// output [Function: test] because we are printing the function itself not executing it

console.log(test());

// test() => execution of function
// tries to print return value of the function
// this function return nothing and in javascript every function return something
// if no explicit return exists then it will return undefined

// console.log() vs return

// console.log() => only displays output
// return => send value back to caller

// ex:

function add(a,b){
    console.log(a+b);
}

const result = add(2,3);
console.log(result);

// output 5 and undefined because function printed 5 but returned nothing.

// correct

// function add(a,b){
//     return a+b;
// }

// const result = add(2,3);
// console.log(result);


// Function declaration vs Function expression

// Function decalaration
// Function declaration also called function statement

greeting();

function greeting() {
    console.log("Hello");
}
//output: Hello


// Function expression
// Function stored inside a variable

// greetings();

// var greetings = function() {
//     console.log("Hello");
// }

// Output: Type error greeetings is not a function why ?
// Internally

// var greetings

// greetings()

// greetings = function(){}

// at call time greetings = undefined so cannot execute undefined


// Main difference is Hoisting
// Function declaration is fully hoisted
// Entire function moves into memory during creation phase


// greetings()

// let greetings = function() {
//     console.log("Hello");
// }

// output : Reference error becase let enters temporal dead zone


// Arrow functions
// Modern syntax introduced in ES6

// Arrow version
const adds = (a,b) => {
    return a + b;
}

// Short version
// implicit return

const sub = (a,b) => a-b;

// Single parameter

const square = x => x * x;

// No parameter

const testing = () => {
    console.log("Hello");
}

// Difference
// Arrow functions do not have their own this
// Normal functions create their own this
// Arrow functions inherit parent this


// Call back functions
// a function passed as an argument to another function


function Hello(name, callback) {
    console.log("Hi " + name);

    callback()
}

function bye(){
    console.log("Bye");
}


Hello("Vimal",bye);

// Hello("Vimal", bye());

// bye => pass function
// bye() => execute function

// Same error will happen in setTimeout also

setTimeout(bye,2000)
// setTimeout(bye(), 2000)

// Note
// Callbacks are about giving function to execute later not executing immediately


// Real world callbacks used in button callback, api response, timers, event listeners
// Arrow functions here is a callback
// Callback flow => function given now executed later

setTimeout(() => {
    console.log("Executed later");
}, 2000);  // if we didnt add a semi colon before IIFE it will throw typeerror


//IIFE => Immediately Invoked Function Expression

(function() {
    console.log("IIFE")
})()


// or
// Leading semicolon is common defensive practise before IIFE

;(() => {
    console.log("IIFE")
})()


// This issue happens because javascript automatic semicolon insertion (ASI)
// javascript sometimes inserts semicolons automatically
// This creates dangerous bugs
// Many developers avoid this problem by always writing semicolons or using 
// formatter tools like prettier and eslint


// Interview
// IIFE syntax is correct but the actual bug is previous statement ended without semicolon 
// next line started with (
// JS chained them together mistakenly

// Why IIFE was used ?
// Before let and const, javascript had no proper block scope
// Developers used IIFE to create a private scope


// Advanced Function Concepts

// Closure
// Closure happens when an inner function remembers variables 
// from its lexical scope even after outer function execution is completed

function outer() {
    let count = 0;

    function inner() {
       count++
       console.log(count)
    }
    return inner
}

const fn = outer()

fn()
fn()
fn()

// outer() execution finished
// why is count still alive ?
// that is closure

// Normally after execution local variables should die but
// inner still references count so js keeps count alive in memory
// that preserved memory is closure
// Note:-
// Closure does not copy variable it keeps refernce to original variable


// EXample

// This program is extremely important because it combines:

// closure
// object methods
// private variables
// encapsulation

// This is not just a "closure example."
// This is basically how private state works in JavaScript
// Each function call creates a new closure

function bankAccount() {
    let balance = 1000

    return {
        deposit(amount) {
            balance += amount
            console.log(balance)
        },
        getBalance() {
            console.log(balance)
        }
    }
}

const account = bankAccount()

account.deposit(500)
account.getBalance()


// Interview

function out() {
    let x = 10

    return function() {
        console.log(x)
    }
}

out()()

// Output 10
// outer returns inner function
// inner remembers lexical scope

// Interview
// Outer function already died. Then how variable survies ?
// Because JS garbage collector does not destroy variables still being refernced
// inner references x so memory survives


//  Closure plus loop problem

for (var i=1; i<=3; i++){
    setTimeout(() => {
        console.log(i)
    }, 1000)
}

// Set timeout does not execute immediately it schedules callback for later
// var i creates only one variable not separate variable per loop this is the root cause
// memory before loop i = undefined loop starts i = 1 callback will not executed it only says execute later callback stored callback reference same i
// loop continues immediately it will not wait 1 second loop keeps running fast i=2, i=3 but the same variable i used again callback stored still same variable
// i=4 now loop ends , because loop increment happens one time before condition fails after 1s now callback executes

// Output 4 4 4
// why ?
// because var is function scoped all callbacks share same i
// Loop finishes first i=4 then callback executes all print same variable

for(let i=1;i <= 3; i++){
    setTimeout(() =>{
        console.log(i)
    }, 1000)
}

// output 1 2 3
// why ?
// because let creates new binding each iteration


// Fix using closure
// Instead of callbacks sharing SAME i,
// we create NEW variable x each iteration.
// That is the trick.
// Each IIFE creates separate function execution, separate memory, separate closure
// Before ES6 no let and no const so developers used IIFE, closure to simulate separate memory

for(var i=1; i <= 3; i++) {
    (function(x) {
        setTimeout(() => {
            console.log(x)
        },1000)
    })(i)
}

// but today for(let i=1; i<=3; i++)
// it solves clearly

// Why ?
// each IIFE gets separate copy/value


// Currying
// Converting function with multiple arguments into nested functions
// with single argument

// Why currying ?
// used for reusable functions, partial application, functional programming
// react patterns, middleware


// closure is used internally 
// currying works because inner functions remembers outer variables
// without closure, currying is impossible

// Normal function
function add(a,b,c) {
    return a + b + c;
}

console.log(add(1,2,3));


// Curried version
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}


console.log(add(1)(2)(3))


function multiply(a) {
    return function(b) {
        return a * b;
    }
}

const double = multiply(2)

console.log(double(5));
console.log(double(10));

// output 10 20

// Interview

function outers() {
    let x = 10

    return function() {
        console.log(x)
    }
}

const fns = outers()
fns()

// output 10

function test() {
    let count = 0
    return function() {
        count++
        console.log(count)
    }
}

const a = test()

a()
a()


for(var i=1;i<=3;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}

function addition(a) {
    return function(b) {
        return a + b
    }
}

console.log(addition(2)(3))


function multiplies(a) {
    return function(b) {
        return a * b;
    }
}

const doubles = multiplies(2)
console.log(doubles(4))


// var                            let
// one shared variable            new variable per iteration
// callbacks share same memory    callbacks get separate memory
// output 444                     output 123
