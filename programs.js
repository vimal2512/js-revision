// reverse a string 

function stringReverse(str) {
    let result = str.split("").reverse().join("");

    return result;
}


console.log(stringReverse("result"));


// check palindrome string

function isPalindrome(str) {
    let result = str.split("").reverse().join("");
    return str === result;
}

console.log(isPalindrome("madam"));


// count vowels in a string

function countVowels(str) {
    let count = 0;

    for(let char of str.toLowerCase()) {
        if("aeiou".includes(char)){
            count++;
        }
    }
    return count;
}

console.log(countVowels("welcome"));

// remove duplicate characters in a string

function removeDuplicates(str) {
    let result = [...new Set(str)].join("");
    return result;
}

console.log(removeDuplicates("welcome"));


// First non repeating character

function firstNonRepeating(str) {
    for(let char of str) {
        if(str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeating("aabbcddee"));


// find longest word in a string


function findLongest(str) {
    let longest = "";

    let words = str.split(" ");

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(findLongest("welcome home"));

function longestWord(str) {
    let word = str.split(" ");

    return word.reduce((longest,current) => {
        return current.length > longest.length ? current : longest
    })
}

console.log(longestWord("I Love Symphony"));


// capitalize first letter of each word

function capitalizeWords(str) {
    let result = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    return result;
}

console.log(capitalizeWords("hello world"))

// check anagram

function isAnagram(str1,str2) {
    let word1 = str1.split("").sort().join("");
    let word2 = str2.split("").sort().join("");

    return word1 === word2;
}

console.log(isAnagram("silent","listen"));


// character frequency

function characterFrequency(str) {
    let freq = {};

    for(let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}

console.log(characterFrequency("hello"));


// how to find missing no in a array of 1 to 10

function missingValue(arr) {
    let missingArray = [];
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);

    for(let i=minValue;i<maxValue;i++) {
        if(arr.indexOf(i) === -1) {
            missingArray.push(i)
        }
    }

    return missingArray;
}

console.log(missingValue([1,3,5,7,8]))


// check if number is prime

function isPrime(num){
    if(num<=1) return false;
    if(num===2) return true;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(20))


// find the longest word in a string

function findLongestWord(str) {
    let words = str.split(" ");
    let longestWord = "";

    for(let i=0;i<words.length;i++) {
        if(words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord("welcome world"))


// Flatten a nested array

function flattenArray(arr){
    let result=arr.reduce((flat,toFlatten)=>{
        return flat.concat(Array.isArray(toFlatten)?flattenArray(toFlatten) : toFlatten)
    },[])
    return result;
}

console.log(flattenArray([1,[2,[3,4],5],6]))


// sum range

function sumRange(start,end) {
    let sum = 0;
    for(let i=start;i<=end;i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumRange(34,67));


// find largest number in an array

function findLargest(arr) {
    if(arr.length === 0) return null;
    let largest = arr[0];

    for(let num of arr) {
        if(num > largest){
            largest = num;
        }
    }
    return largest;
}

console.log(findLargest([1,2,3,4]));

function largestNumber(arr) {
    if(arr.length === 0) return null;

    let largest = arr[0];

    for(let i=1;i<arr.length;i++) {
         let num = arr[i];
         if(num > largest) {
            largest = num;
         }
    }
    return largest;
}

console.log(largestNumber([1,2,3,4,5]))

// second largest number in an array


function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let num of arr) {
        if(num > largest) {
            secondLargest = largest;
            largest = num;
        }else if(num > secondLargest && num < largest){
            secondLargest = num;
        }
    }
    return secondLargest;
}

console.log(findSecondLargest([1,2,3,4]))


function secondLargest(arr) {

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < arr.length; i++) {

        let num = arr[i];

        if(num > largest) {
            secondLargest = largest;
            largest = num;
        }
        else if(num > secondLargest && num < largest) {
            secondLargest = num;
        }

    }

    return secondLargest;
}

console.log(secondLargest([1,3,5,6,7,8]));

// check if array is sorted

function isSorted(arr) {
    for(let i=0;i<arr.length;i++) {
        if(arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}

console.log(isSorted([5,4,6,1]));

// count occurrences in a array

function countOccurrences(arr) {
    let result = arr.reduce((acc,cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    },{})
    return result;
}

console.log(countOccurrences([1,2,3,4,5,5,6,7,8,8]));


// sum of even numbers in an array

function sumOfEven(arr) {
    let result = arr.filter((num) => num % 2 === 0).reduce((a,b) => a + b);

    return result;
}

console.log(sumOfEven([1,2,3,4,5,6]))


// sum of odd numbers in an array

function sumOfOdd(arr) {
    let result = arr.filter((num)=> num % 2 !== 0).reduce((a,b) => a+b);

    return result;
}

console.log(sumOfOdd([1,2,3,4,5,5,6,7,8,9]));


// find median of array

function findMedian(arr) {
    arr.sort();
    let mid = Math.floor(arr.length/2);

    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid-1] + arr[mid])/2;
}

console.log(findMedian([1,2,3,4,5]));

// find the most frequent element in an array

function findMostFrequent(arr){
    let frequency={};
    let maxFreq=0;
    let mostFreqElement;

    for(let item of arr){
        frequency[item]=(frequency[item]||0)+1;
        if(frequency[item]>maxFreq){
            maxFreq=frequency[item];
            mostFreqElement=item;
        }
    }
    return mostFreqElement;
}

console.log(findMostFrequent([1,2,2,3,3,4,4,4,1,]));


// check if number is a perfect square

function isPerfectSquare(num) {
    let result = Number.isInteger(Math.sqrt(num));
    return result;
}

console.log(isPerfectSquare(25));


// check if string is substring of another

function isSubstring(sub,str) {
    let result = str.includes(sub);
    return result;
}


console.log(isSubstring("cat","concatenate"));



// count no of digits in a number

function countDigits(num) {
    return num.toString().length;
}

console.log(countDigits(123456));


// calculate sum of digits in a number

function sumOfDigits(num) {
    return num.toString().split("").reduce((sum,digit)=> sum + Number(digit),0);
}


// remove vowels in a string

function removeVowels(str) {
    return str.replace(/[aeiou]/gi,"")
}

console.log(removeVowels("Hello World"));

// count occurrences of each character in a string

function characterCount(str) {
    const count = {};
    for(let char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    return count;
}


console.log(characterCount("hello world"));




// find the common elements in two arrays

function findCommonElements(arr1,arr2){
    let result = arr1.filter(item => arr2.includes(item));
    return result;
}

console.log(findCommonElements([1,2,3,4,5,5,6],[1,2,3]));


// check if array is a subset of another array

function isSubset(arr1,arr2) {
    let result = arr2.every(item => arr1.includes(item));
    return result;
}

console.log(isSubset([1,2,3,4],[2,3]));


// create a new array by doubling each element

function doubleArray(arr) {
    return arr.map(num => num * 2)
}

console.log(doubleArray([1,2,3]));


// generate a random integer between two values

function getRandomeInt(min,max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}



// find pending orders

const orders = [
    { id: 101, status: "delivered", amount: 250 },
    { id: 102, status: "pending", amount: 150 },
    { id: 103, status: "shipped", amount: 400 },
    { id: 104, status: "pending", amount: 300 }
  ];


let pendingOrders = [];
for(let order of orders) {
     if(order.status === "pending") {
        pendingOrders.push(order)
     }
  }

  console.log(pendingOrders);



// Total expense on employee salary

  const employees = [
    { name: "John", role: "Developer", salary: 50000 },
    { name: "Jane", role: "Designer", salary: 45000 },
    { name: "Smith", role: "Manager", salary: 60000 }
  ];

  let totalSalary = 0;
  for(let employee of employees) {
    totalSalary = totalSalary + employee.salary;
  }

  console.log(`Total expense on employee salary is ${totalSalary}`);


  // Grading group by students


  const students = [
    {name: "Alice", grade:"A"},
    {name: "Bob", grade: "B"},
    {name : "Charlie", grade:"C"},
    {name: "David", grade:"C"}
  ]

  const gradeGroup = {};
  for(let student of students) {
    // If the grade key doesn't exist in our object yet, create an empty array for it
    if(!gradeGroup[student.grade]) {
        gradeGroup[student.grade] = [];
    }
    // Add the student's name to the corresponding grade array
    gradeGroup[student.grade].push(student.name)
  }


  console.log(gradeGroup);


  // if customer has membership > 10000 you should return gold or silver
  const customers = [
    { name: "Ravi", totalSpent: 15000 },
    { name: "Amit", totalSpent: 8000 },
    { name: "Sita", totalSpent: 12000 }
  ];


  for(let customer of customers) {
    customer.membership = customer.totalSpent > 10000 ? "Gold" : "Silver";
  }

  console.log(customers);


  // (if we dont want to modify the original array)

  const updatedCustomers = customers.map(customer => ({
    ...customer,
    membership: customer.totalSpent > 10000 ? "Gold" : "Silver"
  }))

  console.log(updatedCustomers);


  // find available count of products

  const products = [
    { name: "Laptop", stock: 5 },
    { name: "Mouse", stock: 0 },
    { name: "Keyboard", stock: 10 },
    { name: "Monitor", stock: 2 }
];

let availableCount = 0;
for(let product of products) {
    if(product.stock > 0) {
        availableCount++
    }
}

console.log(availableCount);


// calculate discount

function calculateDiscount(customerType,amountSpent){
  let discount = 0;
  if(customerType === "premium" && amountSpent > 15000){
    discount = 0.2;
  }else if(customerType === "normal" && amountSpent < 15000){
    discount = 0.1;
  }
  return amountSpent - (amountSpent * discount);
};

console.log(calculateDiscount("normal",13000));

// Merge employee data

const names = ["john", "jane", "Smith"];
const salaries = [50000, 60000, 70000];


function mergeEmployeeData(names,salaries) {
    let result = [];
    for(let i=0;i<names.length;i++){
        result.push({names:names[i],salaries:salaries[i]});
    }
    return result;
}

console.log(mergeEmployeeData(names,salaries));


// Identify common students

const enrolled = ["Alice","Bob","Charlie","David"];
const attended = ["Charlie","David","Eve"];

function commonStudents(enrolled,attended) {
  let commonStudents = [];
  for(let student of enrolled) {
    if(attended.includes(student)) {
        commonStudents.push(student)
    }
  }
  return commonStudents;
}

console.log(commonStudents(enrolled,attended));

// sort product by price

const product = [
  { name: "Laptop", price: 60000 },
  { name: "Mouse", price: 1500 },
  { name: "Keyboard", price: 3000 }
];

function sortProductByPrice(products) {
    return product.sort((a,b) => a.price - b.price);
}

console.log(sortProductByPrice(product));

// find highest scorer

let studentList = [
  { name: "Rahul", marks: 85 },
  { name: "Priya", marks: 92 },
  { name: "Amit", marks: 78 }
];

function topScorer(students) {
    let topScorer = students[0];
    for(let student of students) {
        if(student.marks > topScorer.marks) {
            topScorer = student;
        }
       
    }
     return topScorer
}

console.log(topScorer(studentList));

const users = [
    {name: "John", age: "25"},
    {name: "Jane", age: 30},
    {name: "Smith", age: "28"}
]

function cleanUserData(users) {
    for(let user of users) {
        user.age = Number(user.age);
    }
    return users;
}

console.log(cleanUserData(users));


// Sales report generator

const transactions = [
    { id: 1, product: "Laptop", category: "Electronics", price: 50000, quantity: 2 },
    { id: 2, product: "Phone", category: "Electronics", price: 20000, quantity: 3 },
    { id: 3, product: "Shirt", category: "Clothing", price: 1000, quantity: 5 },
    { id: 4, product: "Jeans", category: "Clothing", price: 2000, quantity: 2 },
    { id: 5, product: "Headphones", category: "Electronics", price: 5000, quantity: 4 }
  ];

  function generateSalesReport(transactions) {
    let report = {};

    for(let transaction of transactions) {
        let revenue = transaction.price * transaction.quantity;

        if(!report[transaction.category]) {
            report[transaction.category] = 0;
        }
        report[transaction.category] = report[transaction.category] + revenue;
    }
    return report;
  }

  console.log(generateSalesReport(transactions));


  // Get employees under manager

  const emp = [
    { id: 1, name: "Alice", role: "CEO", reportsTo: null },
    { id: 2, name: "Bob", role: "Manager", reportsTo: 1 },
    { id: 3, name: "Charlie", role: "Developer", reportsTo: 2 },
    { id: 4, name: "David", role: "Developer", reportsTo: 2 },
    { id: 5, name: "Eve", role: "HR", reportsTo: 1 }
  ];

  function getEmployeesUnderManager(managerId) {
    let result = [];

    for(let employee of emp ){
        if(employee.reportsTo === managerId) {
            result.push(employee.name);
        }
    }
    return result;
  }

  console.log(getEmployeesUnderManager(1));

  // closures and functions

  // create a counter using closure
  // create a function that returns another function. Each call to returned
  // function should increment a counter and return its current value

  function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    }
  }

  const counter = createCounter();

  console.log(counter());
 console.log(counter());

 // create a private variables using closures
 // create a bank account where the balance cannot be accessed or modified
 // directly from outside. Provide deposit(). withdraw() and getBalance() methods
// Interview concept: Closures can encapsulate state. The balance variable is not a property of the returned object.
// state => data changes over time
// closure can encapsulate state => it means hiding that data so outsiders can't touch or break it directly
// each function call creates a closure

function createBankAccount(inititalBalance) {

    let balance = inititalBalance;

    return {
        deposit(amount) {

            if(amount <= 0) {
                throw new Error("Amount must be positive")
            }

            balance += amount;
            return balance;
        },

        withdraw(amount) {
            if(amount <= 0 || amount > balance) {
                throw new Error("Invalid withdrawl")
            }

            balance -= amount;
            return balance;
        },

        getBalance() {
            return balance;
        }
    }
}

const account = createBankAccount(1000);
account.deposit(500);
account.withdraw(200);

console.log(account.getBalance()); // 1300
console.log(account.balance);     // undefined


// Fix the var loop closure problem
// Problem why does the following code print 3 three times, and how can you fix it ?

for(var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

// the callbacks execute after the synchronous loop has finished. Because var is function scoped,
// scoped, all three callbacks refer to the same variable

// fix using let 
// let creates a separate binding for each loop iteration
for(let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

// Alternative using closure
// Immediately invoked function captures value as its parameter
for(var i = 0; i < 3; i++) {
    (function (value) {
        setTimeout(() => console.log(value), 100)
    })(i);
}

// Implement currying
// Convert a function that takes three arguments into a sequence of functions taking
// one argument each

// Currying transforms a function with multiple arguments into nested single-argument functions. 
// It is useful when creating reusable functions with partially supplied arguments.

function add(a, b, c) {
    return a + b + c;
}

function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(add(1,2,3));
console.log(curriedAdd(1)(2)(3));

// this, call, apply and bind
// predict the output

const user = {
    name: "Vimal",

    regularFunction() {
        return this.name;
    },

    arrowFunction: () => {
        return this.name;
    }
};

console.log(user.regularFunction());
console.log(user.arrowFunction());

// First call returns "Vimal".

// second does not return "Vimal" because an arrow function does not recieve its own this from 
// calling object. It inherits this from surrounding lexical scope. In a 
// typical browser script, that may result in undefined; the exact value depends
// on the surrounding execution context

// Rule to remember - A regualr function this generally depends on how it is called. An arrow function this comes from
// its enclosing scope


// Promises and asnychronous js
// problem create a function that resolves when an operation succeeds and rejects when it fails

function fetchUser(success) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            if(success) {
                resolve({id: 1, name: "Vimal"});
            }else{
                reject(new Error("Failed to fetch user"))
            }
        }, 500)
    })
}

fetchUser(true)
   .then(user => console.log(user))
   .catch(error => console.log(error.message))
   .finally(() => console.log("Request completed")); 


//    Interview concept: resolve() fulfills the Promise with a value, 
//    while reject() rejects it with a reason. finally() runs regardless of the outcome.


// Debouncing and throtling

// Implement debouncing
// problem: Execute a function only after new calls have occurred for a specific period

function debounce(fn, delay) {
    let timer;

    return function (...args) {
        const context = this;

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}

const search = debounce(query => {
    console.log("Searching for:", query);
}, 500);

search("R");
search("Re");
search("React");

// After 500 ms without another call:
// Searching for: React

// Throttle
// Limit a function so that it executes at most once during each specified time interval.

function throttle(fn, delay) {
    let lastExecution = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastExecution >= delay) {
            lastExecution = now;
            return fn.apply(this, args);
        }
    };
}

const handleScroll = throttle(() => {
    console.log("Scroll handler executed");
}, 1000);

// Repeated calls within one second are ignored.


// write a example for callback function

function Hello(name, callback) {
    console.log("Hi " + name);
    callback();
}

function bye() {
    console.log("Bye")
}

Hello("Vimal",bye);

setTimeout(bye,2000);
// callbacks are about giving functions to execute later



setTimeout(() => {
    console.log("Executed later")
},2000);


// IIFE - Immediately invoked function expression

(function(){
    console.log("IIFE")
})()

// js sometimes inserts semicolon automatically
// this creates a dangerous bugs
// Many developers avoid this problems by using semi colons or formatting tools like prettier and eslint
// IIFE syntax correct but actual bug is previous statement ended without semicolon
// Why iife used ?
// Before let and const, javascript had no proper block scope
// developers used IIFE to create a private scope


// closure
// closure happens when an inner function remembers variables
// from its lexical scope even after outer function execution is completed


function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const fn = outer();
fn()
fn()
fn()

// outer() execution finished
// why is count still alive ?
// that is closure

// Normally after execution local variables should die but
// inner still references count so js keep count alive in memory
// that preserved memory is closure
// Note:- Closure does not copy variable it keeps reference to original variable


for(var i = 1; i <=3; i++) {
    setTimeout(() =>{
        console.log(i);
    },1000)
}

// output 444
// becuase var is function scoped all call backs shares same i
// loop finishes first i=4 then callback executes all print same variable
// var i creates only one variable not separate variable per loop this is the root cause

for(let i=1;i <= 3; i++){
    setTimeout(() =>{
        console.log(i)
    }, 1000)
}

// output 1 2 3
// why ?
// because let creates new binding each iteration


// Fix using closure
// Instead of callbacks sharing same i,
// we created variable z each iteration
// that is the trick
// each iife creates separate function execution, separate memory, separate closure

for(var i = 1; i <= 3; i++) {
    (function(x) {
        setTimeout(()=>{
            console.log(x);
        },1000)
    })(i)
}

// currying
// converting function with multiple arguments into nested functions
// with single argument 
// without closure currying is impossible

function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(add(1)(2)(3));

// var one shared variable
// callbacks shares same memory
// output 444

// let creates new variable per iteration
// callbacks get separate memory
// output 123


setTimeout(()=>{
    console.log("Login");

    setTimeout(()=>{
        console.log("Fetch Profile");

        setTimeout(()=>{
            console.log("Fetch Orders");
        },1000)
    },1000)
},1000)



// code becomes deeply nested, unreachable, hard to debug
// called pyramid of dom this is called callback hell
// so promise were introduced

// promise represents future value
// promise has three states
// pending still running
// fulfilled success
// rejected failled

const promise = new Promise((resolve, reject) =>{
    let success = true;

    if(success) {
        resolve("Success")
    }else{
        reject("Failed")
    }
})

promise
  .then(result =>{
    console.log(result);
  })

 .catch(error =>{
    console.log(error);
 })

// symbol creates unique key even if names look same
// 10n => bigint (n creates bignint used in cryptography, financeial systems, scientific calculations)

// or short circiting it returns firs truthy value
// and short circuting it returns first falsy value


// Problem before optional chaining

const usr1= {}
// console.log(usr1.address.city)
// TypeError
// because address = undefined

// optional chaining
// no crash
console.log(usr1.address?.city);