// Symbol
// What problem does symbol solve ?
// Imagine 2 people using same object

const user = {
    id: 1
}

// some library internally adds user.id = "internal"
// now collision happens id got overwritten its a problem



// Symbol solution
// Symbol creates hidden unique key even if names 
// look same they are not same internally


// Normal string keys
const obj = {}

obj["id"] = 1
obj["id"] = 2

console.log(obj)

// output - {id: 2}

// why ?
// because both keys are same second overrides first


// Now symbol
// Even with same description

const s1 = Symbol("id");
const s2 = Symbol("id");

console.log(s1 === s2)


// Eventhough both say "id" they are different symbols think secret unique IDs
// Imagine 2 kids names Rahul but school gives different roll numbers student IDs
// So internally school knows they are different students
// That unique internal identity is like symbol

// Output false

// Example:-

const id1 = Symbol("id")
const id2 = Symbol("id")

const users = {
    [id1]: "Vimal",
    [id2]: "Raj"
}

console.log(users[id1]);
console.log(users[id2]);

// Output Vimal Raj

// Normally key becomes string "id"
// const obj = {
//     id: 1
// }

// use symbol itself as key not string

const id = Symbol("id")
const obj1 = {
    [id]: 1
}


// Note
// Symbol is guaranteed unique key even if descriptions are same


// symbol keys stay hidden from normal loops

const secret = Symbol("secret")

const usr = {
    name: "Vimal",
    [secret]: "hidden-data"
}

console.log(Object.keys(usr))
// Symbol keys are hidden from normal iteration

// Output  ["name"]  not secret
// why ?
// because symbol keys are treated specially 
// makes them useful for internal/private metadata
// Symbol = hidden unique identifier
// "id" - normal key (shared string),  
// [id] - unique invisible token (no collision possible)

const id3 = Symbol("id");

const userName = {
    name: "Vimal",
    [id3] : 101
}

console.log(userName[id3]);

// Normal key                    Symbol key
// string                        unique primitive
// can collide                   guaranteed unique
// visible in loops              hidden from normal iteration

typeof Symbol()
// output symbol (primitive datatype)


// Bigint

// Normal javascript numbers have limit

// Problem
console.log(Number.MAX_SAFE_INTEGER)

// output 9007199254740991
// beyond this precision problem happens

// Example

console.log(9007199254740991 + 1)
console.log(9007199254740991 + 2)

// weird behaviour because js number precision breaks

// Solution
// n creates a bigint

const big = 123456789012345678901234567890n
console.log(big)

// typeof 10n
// output:- bigint
// cannot mix number and bigint

// console.log(10n + 5); // Type error:- Cannot mix bigint and other types

console.log(10n + BigInt(5));

// Bigint used in financial systems, cryptography,huge IDs, scientific calculations

// typeof Quirks
// javascript datatype weirdness

// typeof null
// output Historical bug

// typeof []
// output object
// Arrays are object internally 
// Array.isArray([]);

// typeof function(){}
// output function
// Functions are technically objects


// typeof Nan
// NaN means not a number (Invalid number result)
// output number (still datatype number)

// typeof undefined
// output undefined

// Short circuiting
// OR Short circuiting

console.log(true || "Hello")

// output true
// why ?
// Or stops at first truthy value

console.log(false || "Hello")

// output Hello
// because false 

// AND Short circuiting
console.log(true && "Hello")

// output Hello
// And returns first falsy or last truthy value

console.log(false && "Hello");
// Because AND stops at first falsy value.


// Optional Chaining

// Problem before optional chaining

const usr1= {}
// console.log(usr1.address.city)
// TypeError
// because address = undefined


// Solution
// no crash
// if left side exists continue else stop safely
console.log(usr1.address?.city);

// multiple levels
// very common in APIs
user?.address?.city

// backend response may miss fieds
// optional chaining prevents app crashes


// Nullish coalescing  ??
// used for default values but different from ||

// problem with ||
console.log(0 || 100)
// output 100

// why ?
// because 0 is falsy

console.log(0 ?? 100);
// output 0
// why ?
// only checks null and undefined not falsy values

// Note:-
//?? only checks null/undefined

console.log("" || "default")
// output default


console.log("" ?? "default")
// output looks blanc but it is empty string ""


// Higher order functions

// Example 1
function greet(name, callback){
    console.log("Hi" + name);

    callback()
}

function bye() {
    console.log("Bye")
}


greet("Vimal", bye);


// Example 2
function multiply(a){

    return function(b) {
        return a * b
    }
}

const double = multiply(2)
console.log(double(5))


// Array methods are also higher order function

let arr = [1,2,3,4,5];

let result = arr.map(x => x * 2);
console.log(result);



// Advanced arrays

// some(), every(), find(), 
// flat(), flatMap(), sort(), array destructuring


// some()
// Does atleast one element satisfy the condition ?
// returns true or false

// Example
const array = [1,2,3,4]
const res = array.some(x => x > 3)
console.log(res);
// output true

// why 4 > 3 so true found one match stops immediately

const arr1 = [1,2,3]
console.log(arr.some(x => x > 10))

// output false
// some = atleast one 



// every()
// Do all elements satisfy the condition ?
// returns true or false

// Example

const arr2 = [2,4,6]
console.log(arr2.every(x => x % 2 === 0))

const arr3 = [2,4,5]
console.log(arr.every(x => x % 2 === 0))


// find()
// Give me the first matching element

const arr4 = [10,20,30,40]
const results = arr4.find(x => x > 25)
console.log(results)

const res1 = arr4.find(x => x > 50);
console.log(res1)

// output undefined
// Note:-
// filter => returns all matches
// find => returns first match


// flat

const arr5 = [1,2,[3,4]]
console.log(arr5.flat())

// output [1,2,3,4]


// flatMap()
// combination of map + flat

const arr6 = [1,2,3]

const arr7 = arr6.flatMap(x => [x, x*2])
console.log(arr7)

// output [1,2,3,4,5,6]
// Map creates[[1,2],[2,4],[3,6]]
// then flat [1,2,2,4,3,6]

// sort()

const arr8 = [100,20,3]
console.log(arr8.sort())

// output [100, 20, 3]
// why ?
// because in js default sort is string sort not numeric sort

const res2 = arr8.sort((a,b) => a - b)
console.log(res2)

// output [3, 20, 100]

const res3 = arr8.sort((a,b) => b - a)
console.log(res3)

// output [100, 20, 3]


// Interview

let ar = [10,2,1].sort()
console.log(ar)

// output [1, 10, 2]
// not [1, 2, 10] because string comparison

// Explanation 
// by default js is a string sorting
// js internally converts ["10", "2", "1"] now sorts alphabetically
// 1,10 starts with 1 

// so output is [1, 10, 2]


// Array destructuring
// Extract values easily

// without destructuring
// const array10 = [10,20]

// const a = array10[0];
// const b = array10[1];


// with destructuring
const [a,b] = [10,20,30];

console.log(a);
console.log(b);

const [c,,d] = [10,20,30]
console.log(c);
console.log(d);


// Rest operatory

const [first,...rest] = [1,2,3,4]

// first = 1
// rest = [2,3,4]

// Interview 

let x = 10;
let y = 20;

[x,y] = [y,x]

console.log(x)
console.log(y)


// Objects
// this topic causes real production bugs

const obj2 = obj1
// most dev think obj2 copied wrong it only copies the reference

// Object refernce

const users1 = {
    name: "Vimal"
}

const users2 = users1
// does not create Object 1 Object 2
// it creates one object and two references
users2.name = "Raj"

console.log(users1.name);
console.log(users2.name);

// why ?
// we think users1 and users2 are two object
// but actually both variables points to same object

// Memory model

// Interview

const m = {name:"Vimal"}
const n = m
console.log(m === n);

// output true
// same object in memory



//  Object cloning
// Now objects are separate
// memory (different objects)
// user1 -> object A
// user2 -> object B

const user1 = {
    name: "Vimal"
}

const user2 = {...user1}

user2.name = "Raj";
console.log(user1.name);
console.log(user2.name);


// Shallow copy
// looks copied but not fully
// memory
// user1 => name, 
//          address => address object
// user2 => name, 
//          address => Same address object
// important address object shared

const student1 = {
    name: "Vimal",
    address: {
        city: "Chennai"
    }
}

// const student2 = {...student1}
// student2.address.city = "Madurai"
// console.log(student1.address.city);


// output madurai
// why?
// spread operatory copied only first level
// not nested objects this is called shallow copy
// shallow copy => top level copied, nested object shared


// DEEP COPY
// everythig copied including nested object
// memory student1.address => object A
// student 2.address => Object B

const student2 = JSON.parse(JSON.stringify(student1));
student2.address.city = "Madurai"
console.log(student1.address.city);

// shallow - shared nested objects
// deep - separate nested objects


// Object.keys()

const student = {
    name: "Vimal",
    age: 29
}

console.log(Object.keys(student))


// Object.values()

console.log(Object.values(student))


// Object.entries()

console.log(Object.entries(student));


// WHy useful ?
// for looping

for(const [key,value] of Object.entries(student)) {
    console.log(key,value);
}


// Object.freeze()
// freeze means no add, no delete, no update
// object bcomes read only

const person = {
    name: "Vimal"
}

Object.freeze(person)
person.name = "Raj"

console.log(person.name)

// output vimal , change ignored



//  Object.seal()
// less strict
// seal means we cant able to add and delete but we can update

const male = {
    name: "Vimal"
}
Object.seal(person)
male.name = "Raj";
console.log(male.name);

// Interview

const user10 = {
    name:"Vimal",
    address:{
        city:"Chennai"
    }
}

const user11 = {...user10}

user11.address.city = "Madurai"

console.log(user10.address.city)

// output madurai because spread operator creates shallow copy
// and nested object remains shared


// const user1 = {
//     name: "Vimal",
//     address: {
//         city: "Chennai"
//     }
// }

// const user2 = {...user1}

// console.log(user1.address === user2.address)

// Output true
// why ?

// in memory shallow copy creates two outer objects
// but the nested object address is not copied it is shared
// user1 ─► {
//             name: "Vimal"
//             address ──────┐
//                          ▼
//                       { city:"Chennai" }
//                          ▲
//                          │
// user2 ─► {
//             name: "Vimal"
//             address ──────┘
//          }


// Spread / Rest internals + cloning pitfalls

// Spread operator internals

// spread means take values out


// Array spread
const array5 = [1,2,3,4,5];
const array6 = [...array5];

console.log(array6);

// output [1, 2, 3, 4, 5]



// Array Merge

const s = [1,2]
const t = [3,4]

console.log([...s,...t]);

// Object spread

const copy = {...student}
console.log(copy);


// Interview

const l = {
    x: 10
}

const k ={...l}

console.log(l === k);

// output false
// because different outer objects


// REST Operator internals
// Rest means collect value together

function test(...nums) {
    console.log(nums)
}

test(1,2,3,4);

// output [1,2,3,4]  collected into an array



// Array destructuring

// const [first,...rest] = [1,2,3,4]

// first = 1
// rest = [2,3,4]


// spread                  rest
// expands                 collects
// array -> values         values -> array


// Big cloning pitfall

const female1 = {
    name: "Symphony",
    address: {
        city: "Bengaluru"
    }
}

const female2 = {...female1}

// here outer object copied nested object shared

female2.address.city = "Chennai"
console.log(female1.address.city);
// output chennai


// Interview

const candidate1 = {
    name: "Vimal",
    skills: ["JS","React"]
}

const candidate2 = {...candidate1}

candidate2.skills.push("Node");
console.log(candidate1.skills);

// Output ["JS","React","Node"]
// why?
// because skills array shared
// Arrays are objects nested arrays behave exactly like nested objects


// Memory
// user1.skills ─────┐
//                   ▼
//             ["JS","React"]

// user2.skills ─────┘



// Safe Nested copy

const usr3 = {
    name: "Vimal",
    address: {
        city: "Chennai"
    }
}


// Bad 
// const usr2 = {...usr1}
// because nested object shared

// Better

const usr4 = {
    ...usr3,
    address: {
        ...usr1.address
    }
}

// Now address copied separately

usr4.address.city = "Madurai"
console.log(usr3.address.city)

// Output chennai not madurai


// JSON Deep copy

const usr5 = JSON.parse(JSON.stringify(usr3))
console.log(usr5)

// Output { name: 'Vimal', address: { city: 'Chennai' } }

// Interview
// Deep copy has limitation fails for date, map, set, function, undefined, symbol

// problem1 function

const hello = {
    name: "Symphony",
    greet() {
        console.log("Hello dear")
    }
}

const cop = JSON.parse(JSON.stringify(hello))
console.log(cop)

// output {name: "Symphony"}  here greet function disappeared
// why ? - json does not support functions

// problem 2 - undefined

const dear = {
    name: "symphony",
    age: undefined
}

console.log(JSON.stringify(dear))

// output {"name" : "symphony"} notice age disappeared
// bcoz json does not support undefined

// problem 3 - Symbol

const ids = Symbol("id")

const rollno = {
    [id]: 101
}

console.log(JSON.stringify(rollno));

// output {} because JSON ignores symbol properties

// Problem 4 - Date

const date = {
    createdAt: new Date()
}

console.log(date.createdAt)


// output 2026-06-12T10:04:13.761Z

const co =
JSON.parse(JSON.stringify(date))

console.log(co.createdAt)


// createdAt is NOT a string. it is a Date object

// const dates = {
//     createdAt: new Date()
// }

// console.log(typeof dates.createdAt)


// Destructuring pitfal
const usrName = {
    name : "vimal",
    age: 29
}


const {name} = usrName
console.log(name);

// Rename variable

const { name: usrName1} = usr
console.log(usrName1)


// Default value

// const user = {}

// const {name = "Guest"} = user

// console.log(name)

// output Guest

// Interview

const {names} = {}
console.log(names)

// output undefined , no error

// const {names} = null;
// TypeError - because we cant destrucutre null