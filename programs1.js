// reverse a string 

function stringReverse(str) {
   let result = str.split("").reverse().join("");

   return result;
}

console.log(stringReverse("Love Symphony"));

// check whether a string is palindrome or not 

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

 function removeDuplicate(str) {

    let result = [...new Set(str)].join("");

    return result;
 }

 console.log(removeDuplicate("welcome"));


 // first non repeating characters in a string

 function firstNonrepeating(str) {
     
    for(let char of str) {
        if(str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
 }

 console.log(firstNonrepeating("eel"));


 // find longest word in a string

 function findLongest(str) {
    let longest = "";
    let words = str.split(" ");

    for(let word of words) {
        if(word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
 }

 console.log(findLongest("welcome dear"));


 // capitalize first letter of each word

 function capitalizeFirs(str) {
    let result = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    return result;
 }

 console.log(capitalizeFirs("welcome hello"));


 // check whether the string is anagram or not

 function isAnagram(str1, str2) {
      let word1 = str1.split("").sort().join("");
      let word2 = str2.split("").sort().join("");

      return word1 === word2
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

    for(let i=minValue; i < maxValue; i++) {
           if(arr.indexOf(i) === -1) {
            missingArray.push(i);
           }
    }

    return missingArray;
 }

 console.log(missingValue([1,3,4,7,9]));


 // check if number is prime

 function isPrime(num) {
    if(num <= 1) return false;
    if(num === 2) return true;

    for(let i = 2; i <= Math.sqrt(num);i++){
        if(num % i === 0){
            return false;
        }
    }

    return true;
 }

 console.log(isPrime(17));


 // find the longest word in a string

 function findLongest(str) {

    let longest = "";
    let words = str.split(" ");

    for(let word of words) {
        if(word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
 }

 console.log(findLongest("hello worlds"));


 // flatten a nested array

 function flattenArray(arr) {

    let result = arr.reduce((flat,toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    },[]);

    return result;
 }

 console.log(flattenArray([1,[2,[3,4],5],6]));


 // sum range

 function sumRange(start, end) {

    let sum = 0;
    for(let i = start; i<=end; i++){
        sum += i;
    }

    return sum;
 }

 console.log(sumRange(4,7));


 // find the largest number in an array

 function findLargest(arr) {
    if(arr.length === 0) return null;
    let largest = arr[0];
    
   for(let num of arr) {
    if(num > largest) {
        largest = num;
    }
   }
   return largest;
 }

 console.log(findLargest([1,2,3,4,5]));


 // second largest number in an array

 function secondLargest(arr) {
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

 console.log(secondLargest([1,2,3,4]));


 // check if array is sorted

 function isSorted(arr) {

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]){
            return false;
        }
    }

    return true;
 }

 console.log(isSorted([1,2,3]));


 // count occurrences in an array

function countOccurrences(arr) {
    let result = arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    },{});

    return result;
}

console.log(countOccurrences([1,1,2,3,4,5,5]));


// sum of even numbers in an array

function sumOfEven(arr) {

    let result = arr.filter((num)=> num % 2 === 0).reduce((a,b) => a + b);

    return result;
}

console.log(sumOfEven([1,2,3,4,5]))


// sum of odd 

function sumOfOdd(arr) {

    let result = arr.filter((num) => num % 2 !== 0).reduce((a,b) => a + b);

    return result;
}

console.log(sumOfOdd([1,2,3,4,5]));


// find median of the array

function findMedian(arr) {
    arr.sort();

    let mid = Math.floor(arr.length / 2);

    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid])/2;

}

console.log(findMedian([1,2,3,4]));

// find the most frequent element in an array

function mostFreqElement(arr) {
    let frequency = {};
    let mostFreqElement = 0;
    let maxFreq = 0;

    for(let item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;

        if(frequency[item] > maxFreq) {
            maxFreq = frequency[item];
            mostFreqElement = item;
        }
    }

    return mostFreqElement;
}

console.log(mostFreqElement([1,2,3,4,5,5]));


// check if number is a perfect square

function isPerfectSquare(num) {

    let result =Number.isInteger(Math.sqrt(num)) ;

    return result;
}

console.log(isPerfectSquare(5));


// check if string is a substring of another

function isSubstring(str, sub) {
    let result = str.includes(sub);

    return result;
}

console.log(isSubstring("cat","ca"));


// count no of digits in a number 

function countDigits(num) {
    let result = num.toString().length;

    return result;
}


console.log(countDigits(99999));

// calculate sum of digits in a number

function sumOfdigits(num) {
    let result = num.toString().split("").reduce((sum,digit) => sum + Number(digit), 0)

    return result;
}

console.log(sumOfdigits(1234));

// remove vowels in a string

function removeVowels(str) {

    let result = str.replace(/[aeiou]/gi,"");

    return result;
}

console.log(removeVowels("welcome"));

// count occurrences of each character in a string

function countOccurrences(str) {

    let freq = {};

    for(let char of str) {
        freq[char] = (freq[char] || 0) + 1;

       
    }

    return freq;
}


console.log(countOccurrences("welcome"));

// find the common elements in two arrays

function commonElements(arr1, arr2) {

    let result = arr1.filter(item => arr2.includes(item));

    return result;
}

console.log(commonElements([1,2,3,4,5],[3,4,5]));

// check if array is a subset of another array

function isSubset(arr1, arr2) {
   let result = arr2.every(item => arr1.includes(item));

   return result;
}

console.log(isSubset([1,2,3,4],[5,6]));

// create a new array by doubling each element

function doubleArray(arr) {

    let result = arr.map((item) => item * 2);

    return result;
}

console.log(doubleArray([1,2,3,4,5]));

// get a random integer between two values

function getRandomInt(min, max) {
    let result =Math.floor( Math.random() * (max - min + 1) ) + min;
    return result;
}

console.log(getRandomInt(4,10))

// find pending orders

const orders = [
    { id: 101, status: "delivered", amount: 250 },
    { id: 102, status: "pending", amount: 150 },
    { id: 103, status: "shipped", amount: 400 },
    { id: 104, status: "pending", amount: 300 }
  ];


  let result = []
  for(let order of orders) {
    if(order.status === "pending") {
         result.push(order);
    }
  }

  console.log(result);


  // Total expense on employee salary

  const employees = [
    { name: "John", role: "Developer", salary: 50000 },
    { name: "Jane", role: "Designer", salary: 45000 },
    { name: "Smith", role: "Manager", salary: 60000 }
  ];

  let totalSalary = 0;

  for(let employee of employees) {
    totalSalary += employee.salary
  }

  console.log(totalSalary);

  // grading group by students

   const students = [
    {name: "Alice", grade:"A"},
    {name: "Bob", grade: "B"},
    {name : "Charlie", grade:"C"},
    {name: "David", grade:"C"}
  ]


  let gradeGroup = {};

  for(let student of students) {

    if(!gradeGroup[student.grade]) {
        gradeGroup[student.grade] = [];
    }
    gradeGroup[student.grade].push(student.name);
  }

  console.log(gradeGroup)

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
        availableCount++;
    }
}

console.log(availableCount);

// Merge employee data

const names = ["john", "jane", "Smith"];
const salaries = [50000, 60000, 70000];

function mergeEmployeeData(names,salaries) {
    let result = [];

    for(let i = 0; i < names.length; i++) {
         result.push({names:names[i], salaries:salaries[i]})
    }

    return result;
}

console.log(mergeEmployeeData(names,salaries));

// Identify common students

const enrolled = ["Alice","Bob","Charlie","David"];
const attended = ["Charlie","David","Eve"];

function commonStudents(enrolled,attended) {

    let result = [];
    for(let student of enrolled) {
        if(attended.includes(student)){
            result.push(student);
        }
    }

    return result;
}

console.log(commonStudents(enrolled, attended));


// sort product by price

const product = [
  { name: "Laptop", price: 60000 },
  { name: "Mouse", price: 1500 },
  { name: "Keyboard", price: 3000 }
];

function sortProductByPrice(product) {
   let result = product.sort((a,b) => b.price - a.price);

   return result;
}

console.log(sortProductByPrice(product));

// find highest scorer

let studentList = [
  { name: "Rahul", marks: 85 },
  { name: "Priya", marks: 92 },
  { name: "Amit", marks: 78 }
];

function topScorer(student) {

    let topScorer = student[0];

    for(let student of studentList) {
         if(student.marks > topScorer.marks){
            topScorer = student;
         }
    }

    return topScorer;
}

console.log(topScorer(studentList))

// clean user data

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

console.log(cleanUserData(users))

// get employees under manager

 const emp= [
    { id: 1, name: "Alice", role: "CEO", reportsTo: null },
    { id: 2, name: "Bob", role: "Manager", reportsTo: 1 },
    { id: 3, name: "Charlie", role: "Developer", reportsTo: 2 },
    { id: 4, name: "David", role: "Developer", reportsTo: 2 },
    { id: 5, name: "Eve", role: "HR", reportsTo: 1 }
  ];


 function getEmployeesUnderManger(managerId) {

    let result = [];

    for(let employee of emp) {

        if(employee.reportsTo === managerId) {
            result.push(employee.name)
        }
    }
    return result;
 }

 console.log(getEmployeesUnderManger(1));

 // second longest word in a string

function secondLongest(str) {
    let longest = "";
    let secondLongest = "";

    let words = str.split(" ");

    for(let word of words) {

        if(word.length > longest.length) {
            secondLongest = longest;
            longest = word;
        }else if(word.length > secondLongest.length) {
            secondLongest = word;
        }
    }

    return secondLongest;
}

console.log(secondLongest("I Love Symphony"));

// shortest word in a string

function shortestWord(str) {

    let words = str.split(" ");
    let shortest = words[0];

    for(let word of words) {
        if(word.length < shortest.length){
            shortest = word;
        }
    }

    return shortest;
}

console.log(shortestWord("welcome sym"));

// second shortest word 
function secondShortestWord(str) {
    let words = str.split(" ");

    let shortest = words[0];
    let secondShortest = "";

    for(let word of words) {
        if(word.length > shortest.length) {
            secondShortest = shortest;
            shortest = word;
        }else if(word.length < secondShortest.length && word.length < secondShortest.length){
            secondShortest = word;
        }
    }
    return secondShortest;
}

console.log(secondShortestWord("i love you symphony"));


// count characters

function countCharacters(str) {
    let count = 0;
    for(let char of str) {
        if(char !== ""){
            count++;
        }
    }
    return count;
}

console.log(countCharacters("I Love Symphony"));

// maxsubarray

// given an array, find the maximum sum of any contiguous subarray
// contiguous means elements must be next to each other
// kanadanes algorithm

function maxSubArray(arr) {

    // maximum sum ends at current position
    let currentSum = arr[0];
    
    // best value found so far
    let maxSum = arr[0];

    for(let i = 1; i < arr.length; i++) {

        // shall i start with new subarray
        // shall i start with existing subarray

        currentSum = Math.max(arr[i] , currentSum + arr[i]);
        maxSum = Math.max(maxSum,currentSum);
    }

    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));


// longest common prefix
// pattern string compression

// given an array of strings, find the longest common prefix shared by all strings

function longestCommonPrefix(arr) {

    let prefix = arr[0];

    for(let word of arr){
        if(!word.startsWith(arr)) {
            prefix = prefix.slice(0,-1)
        }
    }

    return prefix;
}

console.log(longestCommonPrefix(["sleep","slice","slack"]));


// group anagrams
// pattern hashmap + string
// given an array of strings, group all the anagrams together
// Input: ["eat","tea","tan","ate","nat","bat"]

// Output: 
// [
//   ["eat","tea","ate"],
//   ["tan","nat"],
//   ["bat"]
// ]

function groupAnagrams(arr) {

    let map = new Map();

    for(let word of arr) {
        let key = word.split("").sort().join("");

        if(!map.has(key)) {
            map.set(key,[]);
        }
        map.get(key).push(word);
    }

    return [...map.values()]
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));


// reverse only vowels
// two pointers
// reverse only vowels in string all characters should remain in the same position
// Input "hello"
// Output "holle"

function reverseVowels(str) {

    let vowels = "aeiouAEIOU";
    let arr = str.split("");
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {

        // move the left pointer until you find vowels
        while(left < right && !vowels.includes(arr[left])) {
            left++;
        }

        // move the right pointer until you find vowels
        while(left < right && !vowels.includes(arr[right])) {
            right--;
        }

        // swap the vowels
        [arr[left],arr[right]] = [arr[right],arr[left]];


        // move both the pointers.repeat until both pointers met
        left++;
        right--;

       
    }
     return arr.join("");
}

console.log(reverseVowels("hello"));


// maximum subarray of size k
// given an array and a number k, find the max sum of any consecutive elements(fixed sliding window)
// arr = [2, 1, 5, 1, 3, 2]
// k = 3
// [2, 1, 5] = 8
// [1, 5, 1] = 7
// [5, 1, 3] = 9  ← maximum
// [1, 3, 2] = 6

// output
// 9

function maxSubArray(arr,k) {
   
    let windowSum = 0;
    let maxSum = 0;

    // first window
    for(let i = 0; i < k; i++) {
       windowSum += arr[i];
    }

   maxSum = windowSum

    // slide the window
    for(let i = k; i < arr.length; i++) {
        windowSum = windowSum + arr[i] - arr[i-k];
        maxSum = Math.max(windowSum, maxSum);
    }

    return maxSum;
}

console.log(maxSubArray([2,1,5,1,3,2],3));


// longest substring without repeating characters

function longestSubstring(str) {
    
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    // window b/w left and right, window must contain unique characters
    for(let right = 0; right < str.length; right++) {

        // when duplicate appears shrink the window from left
        while(set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }

        // when new char is not already present expand the window
        set.add(str[right]);

        // calculating the current window length
        maxLength = Math.max(
            maxLength,
            right - left +1
        )
    }

    return maxLength;
}

console.log(longestSubstring("abcabcbb"));



function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        // Find middle
        let mid = Math.floor((left + right) / 2);

        // Target found
        if (arr[mid] === target) {
            return mid;
        }

        // Target is on the right side
        if (arr[mid] < target) {
            left = mid + 1;
        }

        // Target is on the left side
        else {
            right = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 9));



function searchInsert(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        // Target already exists
        if (arr[mid] === target) {
            return mid;
        }

        // Target should be on the right
        if (arr[mid] < target) {
            left = mid + 1;
        }

        // Target should be on the left
        else {
            right = mid - 1;
        }
    }

    // Target was not found.
    // left is now the correct insertion position.
    return left;
}

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); 


function findPeakElement(arr) {

    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        
        let mid = Math.floor((left + right) / 2);

        // If the next element is greater,
        // peak must exist on the right side
        if(arr[mid] < arr[mid + 1]) {

            left = mid + 1;
        }else{
            // other wise peak exist at mid 
            // or somewhere on the left side

            right = mid; 
        }

    }

    return left;
}

console.log(findPeakElement([1,2,3,1]));

// linked list
// create the linked list
// 10 -> 20 -> 30 -> null

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// let first = new Node(10);
// let second = new Node(20);
// let third = new Node(30);

// first.next = second;
// second.next = third;

// let head = first;
// let current = head;

// while(current !== null) {
//     console.log(current.value);
//     current = current.next 
// }

// reverse linked list

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// function reverseList(head) {
//      let prev = null;
//      let current = head;

//      while(current !== null) {
//         let next = current.next;

//        current.next = prev;
//        prev = current;
//        current = next;
//      }
//      return prev;
// }

// let first = new Node(10);
// let second = new Node(20);
// let third = new Node(30);

// first.next = second;
// second.next = third;

// let newHead = reverseList(first);
// console.log(newHead);


// linked list cycle
// given a linked list, determine whether it continues a cycle
// Normal linked list 10 → 20 → 30 → 40 → null
// If there is a cycle slow and fast pointers will eventually meet
// If there is no cycle fast will reach null

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


function hasCycle(head) {

    let slow = head;
    let fast = head;


    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        // If they meet, there is a cycle
        if(slow === fast) {
            return true;
        }
    }

    return false;
}

let first = new Node(10);
let second = new Node(20);
let third = new Node(30);
let fourth = new Node(40);


first.next = second;
second.next = third;
third.next = fourth;
fourth.next = second;

console.log(hasCycle(first));



