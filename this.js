// this = current function => wrong


// this depends on how a function is called
// not where it is written, not where it is created, how it is called

// Example- 1

const user = {
    name: "Raj",
    greet() {
        console.log(this.name)
    }
}

user.greet()

// Output vimal

// Example- 2

const person = {
    name: "Raj",

    greet() {
        console.log(this.name)
    }
}

person.greet();


// The function code is identical only caller changed


// Regular function
// "use strict"

// function test() {
//     console.log(this)
// }

// test()
// without strict mode in browser this = window
// with strict mode undefined


// Interview test() this = undefined (strict mode)

// Example 4

const usr = {
    name: "Vimal",

    greet() {
        console.log(this.name)
    }
}

const fn = usr.greet
fn()

// output undefined but most people say Vimal
// why ? - fn() is not user.greet() 
// fn() is a regular function call so this = undefined
// Ask how function called ?



// Arrow function
// Arrow function behave differently they do not create their own this


const girl = {
    name: "Symphony",

    greet: () => {
        console.log(this.name);
    }
}

girl.greet();

// output undefined
// why ? normal function greet() {} get its own this but
// arrow function does not get its own this
// instead borrows this from surrounding scope this is called
// lecical this


// closures => borrow variables from outer scope
// arrow functions => borrow this from outer scope


// Example

const men = {
    name: "Vimal",

    greet() {

        const inner = () => {
            console.log(this.name)
        }

        inner()
    }

}


men.greet()

// output vimal

// why ?
// outer function men.greet() so this = men
// Arrow function inner() doesnt create new this it borrows from outer one
// so this = men 


// Interview
// normal function own this but arrow function doesnt own this uses surrounding this

// Rule
// user.greet() normally gives this = user only for normal functions
// Arrow functions ignore that rule


// Problem

const user1 = {
    name : "Vimal",

    greet() {
        console.log(this.name)
    }
}

const fns = user1.greet
fns()

// output undefined because this context lost

// question how can we force ? this = user
// even when calling separately
// answer call apply bind

// call()

// function.call(thisValue,arg1,arg2)


// Example

const girls = {
    name: "Symphony"
}

function greetings() {
    console.log(this.name)
}

greetings.call(girls);

// normally greetings() this = undefined
// but greetings.call(girls) this = girls manually assigned

// call() = call functions immediately with chosen this

// passing arguments

const boy = {
    name: "Vimal"
}

function welcome(city, country) {
    console.log(this.name, city, country)
}

welcome.call(boy, "Chenai", "India")
// this = boy city = chennai country = India

// apply()

