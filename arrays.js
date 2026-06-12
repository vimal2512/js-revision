const array = [1,2,3];
console.log(typeof array);

// output object

// common array methods
// push - add at end, pop - remove from end 
// shift - remove from begining, unshift - add at beginning
// includes - check existence, indexOf - find position
// slice - copy portion, splice - modify original
// concat - merge arrays

const arr = [1,2,5,6]
arr.push(3);
console.log(arr)

arr.pop();
console.log(arr)
// output [1,2,3]


console.log(arr.slice(2,5));
console.log(arr.slice(1,5));


console.log(arr.splice(1,2));
console.log(arr);


// Interview 
// difference between slice and splice
// slice                     splice
// no modification           modifies originl
// returns copy              removes/add items


// forEach
// foreach is meant for sideeffects like printing, api calls, DOM updates


const array1 = [1,2,3];


array1.forEach((value) => {
    console.log(value);
});

const result = [1,2,3].forEach(x => x * 2)

console.log(result)
// output undefined - forEach() always returns undefined
// no matter what callback returns inside callback x => x*2 returns 2 4 6
// but forEach ignores those returned values completely



const results = [1,2,3]
results.forEach(x => x*2);

console.log(results);

// output 1 2 3
// forEach does not modifiy original array automatically
// callback x => x*2 calculates values but throws them away nothing stored anywhere
// so original array remains [1,2,3] unchanged

// TOPIC 15 - map

// Map is used for transforming arrays
// Map always returns new array original unchanged

const arr1 = [1,2,3,4];
const res = arr1.map(x => x * 2);
console.log(res);


// Filter
// used for selecting elements
// if callback return true -> keep element, false -> remove element

const filter = arr1.filter(x => x % 2 === 0);
console.log(filter);


// Reduce
// Reduce array into single value
// reduce return only one value it might be number, object, array or anything

const array2 = [1,2,3,4]
const reduce = array2.reduce((acc,curr) => {
    return acc + curr
}, 0)

console.log(reduce);


// Map vs ForEach

// Map                       forEach
// returns new array         used for side effects
// chainable                 not useful for chaining

// Map

const map = [1,2,3].map(x => x * 2);
console.log(map)


// ForEach
// output undefined - forEach() always returns undefined
// no matter what callback returns inside callback x => x*2 returns 2 4 6
// but forEach ignores those returned values completely

const forEach = [1,2,3].forEach(x => x * 2);
console.log(forEach);


// How to check array

// typeof [] 
// returns object because arrays are special objects
// bad for checking arrays

// Array.isArray([1,2,3]);
// output true


// Spread and rest operators

// Spread expands values

const arr3 = [1,2]
const arr2 = [...arr3]

console.log(arr2);

// array merge

const a = [1,2]
const b = [3,4]

console.log([...a,...b])

// output [1,2,3,4]

// object copy

const user = {
    name: "Vimal"
}

const copy = {...user}
console.log(copy);


// REST operator
// collects multiple values into array

function test(...nums){
    console.log(nums)
}

test(1,2,3,4)

// output [1,2,3,4]

// spread - expands
// rest - collects
