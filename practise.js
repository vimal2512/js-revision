// Reverse a string
// reversing string using loop

function reverseString(str) {

    let result = str.split(" ").reverse().join(" ");

    return result;
}

console.log(reverseString("hello world"));

// check whether string is palindrome or not

function isPalindrome(str) {

    let result = str.split("").reverse().join("");

    return str === result;
}

console.log(isPalindrome("madam"));


// count vowels

function countVowels(str) {

    let count = 0;

    for(let char of str.toLowerCase()) {

        if("aeiou".includes(char)){
            count++;
        }
    }

    return count;
}

console.log(countVowels("vimal"));

// remove duplicate characters in a string

function removeDuplicates(str) {

    let result = [...new Set(str)].join("")

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

console.log(firstNonRepeating("oops"));

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

console.log(findLongest("welcome symphony"));

// capitalize first letter of each word

function capitalizeFirst(str) {

    let words = str.split(" ");

    let result = words.map((word)=> word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    return result;
}

console.log(capitalizeFirst("luv you sym"));


// check anagram

function isAnagram(str1, str2) {

    let word1 = str1.split("").sort().join("");
    let word2 = str2.split("").sort().join("");

    return word1 === word2;
}

console.log(isAnagram("fed","def"));

// character frequency

function characterFreq(str) {

    let freq = {};

    for(let char of str) {

        freq[char] = (freq[char] || 0) + 1;
    }

    return freq;
}

console.log(characterFreq("symphony"));

// how to find missing no in a array of 1 to 10

function missingValue(arr) {

    let missingArray = [];
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);

    for(let i = minValue; i < maxValue; i++) {

        if(arr.indexOf(i) === -1) {
            missingArray.push(i);
        }
    }
    
    return missingArray;
}


console.log(missingValue([1,3,4,5,7,9]));



// Check if number is a prime

function isPrime(num) {

    if(num <= 1) return false;
    if(num === 2) return true;

    for(let i = 2; i<= Math.sqrt(num); i++) {

        if(num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(9));

// flatten a nested array

function flattenArray(arr) {

    let result = arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten)
    },[]);

    return result;
}

console.log(flattenArray([1,[2,[3,[4],5],6],7]));

// sum range

function sumRange(start, end) {

    let sum = 0;
    for(let i = start; i <= end; i++) {
         sum += i;
    }

    return sum;

}

console.log(sumRange(5,11));

// find largest number in an array

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

console.log(findLargest([1,2,3,4,5,9,6]));

// second largest number in an array

function secondLargest(arr) {

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let num of arr) {

        if(num > largest) {

             secondLargest = largest;
            largest = num;
        }else if(num > secondLargest && num < largest) {
            largest = num;
        }
    }

    return secondLargest;
}

console.log(secondLargest([1,2,3,4,5,6]));

// check if array is sorted

function isSorted(arr) {

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] < arr[i - 1]) {
            return false;
        }
    }

    return true;
}

console.log(isSorted([1,2,3,9,4,5]));


// count occurrences in an array

function countOccurrences(arr) {
   

    let result = arr.reduce((acc,cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        
        return acc;
    },{})

    return result;
}

console.log(countOccurrences([1,1,2,3,4,5]));

// sum of even numbers in an array

function sumOfEven(arr) {

    let result = arr.filter((num) => num % 2 == 0).reduce((a,b) => a + b);

    return result;
}

console.log(sumOfEven([1,2,3,4,5]));

// sum of odd numbers in an array

function sumOfOdd(arr) {

  let result = arr.filter((num) => num % 2 !== 0).reduce((a,b) => a - b);

  return result;
}

console.log(sumOfOdd([1,2,3,4,5]));


// find median of an array

function findMedian(arr) {

    let mid = Math.floor((arr.length) / 2);

    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid] + arr[mid - 1]) / 2;
}

console.log(findMedian([1,2,3,4]));

// find most frequent element in an array

function findMostFreq(arr) {
   let freq = {};
   let maxFreq = 0;
   let mostFreqElement;

   for(let item of arr) {

    freq[item] = (freq[item] || 0) + 1;

    if(freq[item] > maxFreq) {
        maxFreq = freq[item];
        mostFreqElement = item;
    }
   }

   return maxFreq;
}

console.log(findMostFreq([1,2,3,4,5,5,5,5,5]));


// check if number is a perfect square

function isPerfectSquare(num) {

    let result = Number.isInteger(Math.sqrt(num));

    return result;
}

console.log(isPerfectSquare(2));

// check if string is a subset of another

function isSubset(sub, str) {

    let result = str.includes(sub);

    return result;
}

console.log(isSubset("cat","concat"));

// count no of digits in a number

function countDigits(num) {

    let result = num.toString().length;

    return result;
}

console.log(countDigits(255));

// calculate the sum of digits in a number

function sumOfDigits(num) {

    let result = num.toString().split("").reduce((sum,digit) => sum + Number(digit),0 );

    return result;
}

console.log(sumOfDigits(2555));

// remove vowels in a string
// other mehod using loop or something
function removeVowels(str) {

    let result = str.replace(/[aeiou]/gi,"");

    return result;
}

console.log(removeVowels("welcome"))

// find the common elements in two arrays

