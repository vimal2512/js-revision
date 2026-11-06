// Longest word in a string

function longestWord(str) {
    let words = str.split(" ");
    let longest = "";
    for(let word of words) {
        if(word.length > longest.length) {
            longest = word;
        } 
    }
    return longest;
}

console.log(longestWord("I Love Symphony"));


function longestWords(str) {
    let result = str.split(" ").reduce((current,longest) => {
        return current.length > longest.length;
    })
    return result;
}

console.log(longestWord("I Love Symphony"));


// second longest word in a string

function secondLongest(str) {
    let longest = "";
    let secondLongest = "";
    let words = str.split(" ");

    for(let word of words) {
        if(word.length > longest.length) {
            secondLongest = longest;
            longest = word;
        }else if(word.length > secondLongest.length && word.length < longest.length) {
            secondLongest = word;
        }
    }
    return secondLongest;
}

console.log(secondLongest("I Love Symphony"));

// second largest number in array

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

// shortest word in a string

function shortestWord(str) {
    let words = str.split(" ");
    let shortest = words[0];

    for(let word of words) {
        if(word.length < shortest.length) {
            shortest = word;
        }
    }
    return shortest;
}

console.log(shortestWord("I Love Symphony"));


// Second shortest word

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


// reverse string

function stringReverse(str) {
    let result = str.split(" ").reverse().join(" ");
    return result;
}

console.log(stringReverse("I love symphony"))

// reverse each word

function reverseEachWord(str) {
    let result = str.split(" ").map(word => word.split("").reverse().join("")).join(" ")
    return result;
}

console.log(reverseEachWord("I Love Symphony"));


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

// count words

function countWords(str) {
    let result = str.split(" ").filter(word => word !== "").length;
    return result;
}

console.log(countWords("I Love Symphony"));

// count words

function countWords(str) {
    let count = 0;
    let isWord = false;

    for(let char of str) {
        if(char !== " ") {
            if(isWord === false) {
                count++;
                isWord = true;
            }
        }else{
            isWord = false;
        }
    }
    return count;
}

console.log(countWords("I Love sym"));


// valid parenthesis

function validParenthesis(str) {
    let stack = [];

    for(let char of str) {
        if(char === "(" || char === "[" || char === "{") {
            stack.push(char);
        }else {
            let last = stack.pop();

            if(
                (char === ")" && last !== "(") ||
                (char === "]" && last !== "[") ||
                (char === "}" && last !== "{")
             ){
                return false;
             }
        }
    }
    return stack.length === 0;
}

console.log(validParenthesis("()[]{}"));


// Two sum
// Given an array and a target, return the indices of the two numbers whose sum equals the target.
// it works for even unsorted array

// need = target - currentNumber;
// If map has need return answer
// otherwise store current number in map

function twoSum(arr,target) {
    let map = new Map();

    for(let i=0;i<arr.length;i++){
        let need = target - arr[i];

        if(map.has(need)) {
            return [map.get(need),i];
        }
        map.set(arr[i],i)
    }
}

console.log(twoSum([2,7,11,15],18))


// Contains duplicate
// Given an array, return true if any value appears more than once.

// Every iteration:

// Is this number already in the map?
// Yes → Duplicate found → Return true.
// No → Store it and continue.

function containsDuplicate(arr) {
    let map = new Map();

    for(let num of arr) {
        if(map.has(num)) {
            return true;
        }
        map.set(num,true);
    }
    return false;
}

console.log(containsDuplicate([1,2,3,1]));

// For this problem, many interviewers will ask a follow-up:
// Can you solve this using a Set instead of a Map?

function containsDuplicate(arr) {
    let set = new Set();
    for(let num of arr) {
        if(set.has(num)){
            return true;
        };
        set.add(num);
    }
    return false;
}

console.log(containsDuplicate([1,2,4,5]));


// Note:-
// Map stores key value pairs
// Set stores only unique values



// Problem: Majority Element
// Given an array, find the element that appears more than n/2 times or half of the array.

function majorityElement(arr) {
    // creating a hash map to store number -> count
    let map = new Map();

    for(let num of arr){
        // have i already counted this number
        if(map.has(num)) {
            // if yes increase its count
            map.set(num,map.get(num) + 1);
        }else{
            // if this number appears for first time, store it with count 1
            map.set(num,1);
        }
    }

    // loop through every entry in the map
    // key number, value count
    for(let [key, value] of map) {
        // Is this number appearing more than half the array?
        if(value > arr.length / 2) {
            return key;
        }
    }
}

console.log(majorityElement([2,2,1,1,1,2,2]))



// Problem: Top K Frequent Elements
// Given an array and a number k, return the k most frequent elements.

function topKFrequent(arr,k) {
    let map = new Map();

    // Count frequency
    for(let num of arr) {
        if(map.has(num)){
            map.set(num,map.get(num) + 1);
        }else{
            map.set(num,1);
        }
    }

    // Convert map to array
    let arr1 = [...map.entries()];

    // Sort by frequency
    arr1.sort((a, b) => b[1] - a[1]);

    // Take first k elements
    return arr1.slice(0, k).map(item => item[0]);

}

console.log(topKFrequent([1,1,1,1,2,2,2,3,3,3,4,5], 2));


// Best time to buy and sell stocks

// you are given an array where each element is the stock price on a day
// you can buy once sell once buy before you sell return the max profit
// Greedy algorithm

function maxProfit(prices) {
    // store the lowest price seen so far
    let minPrice = prices[0];
    let maxProfit = 0;

    // visit every price
    for(let price of prices) {

        // if you find a cheaper price update it
        if(price < minPrice) {
            minPrice = price;
        }

        // if we sell today how much profit we will get
        let profit= price - minPrice;

        // if todays profit is best so far
        if(profit >maxProfit) {
            maxProfit = profit;
        }
    }
    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));


// product of array except self
// given an array return a new array where each element is the
// product of all other elements except itself

// Input:
// [1,2,3,4]

// Output:
// [24,12,8,6]


// Explanation:

// Index 0 → 2×3×4 = 24
// Index 1 → 1×3×4 = 12
// Index 2 → 1×2×4 = 8
// Index 3 → 1×2×3 = 6

// Optimized (Prefix + Suffix)

// Whenever you hear:

// Product Except Self
// Left Product
// Right Product
// Prefix Sum/Product
// Suffix Sum/Product

function productExceptSelf(nums) { 
    // create the answer array initially it will be [1,1,1,1]
    let result = new Array(nums.length).fill(1);

    // prefix - product of all elements before current index
    let prefix = 1;

    for(let i=0; i<nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    // product of all elements after current index
    let suffix = 1;

    for(let i=nums.length-1; i>=0; i--){
        result[i] *= suffix;
        suffix *= nums[i];
    }
    return result;
}

// final answer Prefix Product × Suffix Product

console.log(productExceptSelf([1,2,3,4]))


// move zeros to end
// Move all 0s to the end of the array while keeping the order of the other elements the same.

// Input:
// [0,1,0,3,12]

// Output:
// [1,3,12,0,0]

// Sorted array
// In-place       => two pointer
// Remove duplicates

function moveZeros(nums) {
    // index tells where should the next non zero number should be placed
    let index = 0;

    for(let i = 0; i < nums.length; i++) {

        // is this is a non zero number
        if(nums[i] !== 0) {

            // Swap the current non-zero number with the position pointed to by index.
            [nums[index],nums[i]] = [nums[i],nums[index]];

            index++;
        }
    }
    return nums;
}

console.log(moveZeros([0,1,0,2,12]));



// Remove duplicates from sorted array

// Given a sorted array, remove duplicates in place and return number
// of unique elements.

// array is already sorted

// Input:
// [0,0,1,1,1,2,2,3,3,4]

// Output:
// 5

// Array becomes:
// [0,1,2,3,4]

// two pointers
// i → Reads every element.
// index → Stores only unique elements.

function removeDuplicateNums(arr) {
    // Where should the next unique element be placed?
    // why 1 because 1st element is always unique
    let index = 1;

    for(let i=1;i<arr.length;i++) {
        // Start from the second element because we've already accepted the first one.
        // Is the current number different from the previous number?
        if(arr[i] !== arr[i-1]) {
            // Copy the unique number to the next available position.
            arr[index] = arr[i];

            // Move to the next position for the next unique element.
            index++;
        }
    }
    // index is the total number of unique elements.
    return index;
}

console.log(removeDuplicateNums([1,1,2,2,3,3,3,4,5]));




// merge sorted arrays

function mergeArray(arr1,arr2){
    return [...arr1,...arr2].sort((a,b) => a-b);
}

console.log(mergeArray([1,2,3],[4,5,6]));


// function mergeArrays(nums1, nums2) {

//     return nums1.concat(nums2).sort((a, b) => a - b);

// }

// console.log(mergeArrays([1,3,5],[2,4,6]));


// by using for loop and sorting


function mergeArray(arr1,arr2) {
    let result = [];

    // add a first array
    for(let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
    }

    // add a second array
    for(let i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }

    // sort
    result.sort((a,b) => a - b);

    return result;
}

console.log(mergeArray([1,2,3],[4,5,6]));


// optmimzed two pointers

function mergeArrays(arr1, arr2) {

    let result = [];

    let i = 0;
    let j = 0;

    // Continue until one of the arrays is finished
    while (i < arr1.length && j < arr2.length) {

        // Compare both current elements.
        // Smaller one should come first.
        if (arr1[i] < arr2[j]) {
;
            result.push(arr1[i]);
            i++;

        } else {

            result.push(arr2[j]);
            j++;

        }

    }

    // copying remaining elements

    while (i < arr1.length) {

        result.push(arr1[i]);
        i++;

    }

    while (j < arr2.length) {

        result.push(arr2[j]);
        j++;

    }

    return result;
}


console.log(mergeArrays([1,2,3],[4,5,6]))


// Rotate array

// Rotate the array to the right by k steps.

function rotateArray(arr,k) {
    for(let i = 0; i < arr.length; i++) {
        let last = arr.pop();

        arr.unshift(last);
    }
    return arr;
}



// max sub array

// Given an array, find the maximum sum of any contiguous subarray.
// Contiguous means the elements must be next to each other.
// kandanes algorithm

function maxSubArray(arr) {

    // Maximum sum ending at the current position.
    let currentSum = arr[0];

    // Store the best answer found so far.
    let maxSum = arr[0];

    for(let i = 1; i < arr.length; i++) {
        // Should I start a new subarray from current element? or
        // Should I continue with old subarray?

         currentSum = Math.max(arr[i], currentSum + arr[i]);

         maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;

}



console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));


// Longest common prefix
// pattern string compression

// Given an array of strings, find the longest common prefix shared by all strings

//Input ["flower", "flow", "flight"]
//output "f1"


//Input ["dog","racecar","car"]
//Output ""

// function longestCommonPrefix(arr) {
//     if(arr.length === 0) return "";

//     let prefix = arr[0];
//     for(let word of arr) {
//         while(!word.startsWith(prefix)) {
//             prefix = prefix.slice(0,-1);
//         }
//     }

//     return prefix;
// }


function longestCommonPrefix(arr) {
    if(arr.length === 0) return "";

    // take the first word as prefix
    let prefix = arr[0];

    // compare it with every other word
    for(let i = 1; i < arr.length; i++) {
        // Does the current word start with the prefix? if yes continue
         while(!arr[i].startsWith(prefix)) {
            // if no remove the last character
            prefix = prefix.slice(0, -1);
         }
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));


// Group anagrams
// pattern hashmap + string

// Given an array of strings, group all the anagrams together
// Input: ["eat","tea","tan","ate","nat","bat"]

// Output: 
// [
//   ["eat","tea","ate"],
//   ["tan","nat"],
//   ["bat"]
// ]

function groupAnagrams(arr) {
    let map = new Map();

    // visit every word
    for(let word of arr) {
        // creating a common key
        let key = word.split("").sort().join("");

        // if key doesnt exist create an empty array
        if(!map.has(key)) {
            map.set(key,[]);
        }
        // store the word
        map.get(key).push(word);
    }

    // return only the values
    return [...map.values()];
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));


// Isomorphic strings
// pattern hashmap
// Two strings are isomorphic if every character in the first string can be mapped to
// exactly one character in the second string

// Input:

// s = "egg"
// t = "add"

// Output: true



// Reverse only vowels
// pattern two pointers


// Reverse only vowels in string all characters should remain in the same position

// Input "hello"
// Output "holle"


function reverseVowels(str) {

    let vowels = "aeiouAEIOU";

    // Convert the string into an array because string cant be modified directly
    let arr = str.split("");

    // Take two pointers
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        // move the left pointer until you find the vowel
        while (left < right && !vowels.includes(arr[left])) {
            left++;
        }

        // move the right pointer until you find the vowel
        while (left < right && !vowels.includes(arr[right])) {
            right--;
        }

        // swap the vowels
        [arr[left], arr[right]] = [arr[right], arr[left]];

        // Move both pointers. repeat until both pointers met
        left++;
        right--;

    }

    return arr.join("");

}

console.log(reverseVowels("hello"));


// String compression
// Two pointers

// Given a array of characters, compress consecutive repeated characters

// Input:
// ["a","a","b","b","c","c","c"]
// Output:
// ["a","2","b","2","c","3"]


// ["a","b","b","b","c"]
// ["a","b","3","c"]

// Logic

// Find a character
//       ↓
// Count how many times it repeats continuously
//       ↓
// Store character
//       ↓
// If count > 1, store count
//       ↓
// Move to next different character


function compress(chars) {
    let result = [];
    let i = 0;

    while(i < chars.length) {
        let char = chars[i];
        let count = 0;

        // While the current character is still a, keep counting.
        while(i < chars.length && chars[i] === char) {
            count++;
            i++;
        }

        result.push(char)

        if(count > 1) {
            result.push(count);
        }
    }
    return result;
}


console.log(
    compress(["a", "a", "b", "b", "c", "c", "c"])
);


// roman to integer
// pattern hashmap + traversal
// convert a roman numeral to an integer

function romanToInteger(str) {

    let values = {
        I:1,
        V:5,
        X:10
    }

    let total = 0;

    for(let i = 0; i < str.length; i++) {
       
        // when a smaller value comes before a bigger value, subtract it
        if(values[str[i]] < values[str[i+1]]) {
            total -= values[str[i]];
        }else{
            total += values[str[i]];
        }
    }

    return total;
}

console.log(romanToInteger("XVI"));


// Find consecutive number in an unsorted array

// Input [100, 4, 200, 1, 3, 2]
// the consecutive sequence is 1 2 3 4
// so the output is 4


// HashSet
//    ↓
// Find sequence beginning
//    ↓
// Check num + 1
//    ↓
// Count

function longestConsecutive(arr) {

    // put everything into a set
    let set = new Set(arr);
    let longest = 0;

    for (let num of set) {

        // Find the beginning of the sequence
        if (!set.has(num - 1)) {

            let current = num;
            let count = 1;

            // once we find the beginning keep checking next number
            while (set.has(current + 1)) {
                current++;
                count++;
            }

            // If another sequence has only 2 numbers we keep 4
            longest = Math.max(longest, count);
        }
    }

    return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));


// Sliding Window
// Maximum subarray of size k


// Given an array and a number k, find the maximum sum of any k consecutive elements (fixed sliding window)
// arr = [2, 1, 5, 1, 3, 2]
// k = 3
// [2, 1, 5] = 8
// [1, 5, 1] = 7
// [5, 1, 3] = 9  ← maximum
// [1, 3, 2] = 6

// Output
// 9

function maxSum(arr, k) {

    let windowSum = 0;
    let maxSum = 0;

    // First window
    for(let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    maxSum = windowSum;

    // slide the window
    for(let i = k; i < arr.length; i++) {
        // old windowsum + new element - element leaving the window
        windowSum = windowSum + arr[i] - arr[i-k];

        maxSum = Math.max(maxSum,windowSum);
    }

    return maxSum;
}

console.log(maxSum([2,1,5,1,3,2],3));

// Longest substring without repeating characters
// pattern sliding window + set
// given a string, find the length of the longest substring without duplicate
// characters (sliding window + set)

// Input:
// "abcabcbb"
// Output:
// 3

function longestSubString(str) {

    let set = new Set();
    let left = 0;
    let maxLength = 0;

    // window b/w left and right and window must contain unique char
    for(let right = 0; right < str.length; right++) {

        // when duplicate appears shrink the window from left
        while(set.has(str[right])) {
            // continue until duplicate is removed
            set.delete(str[left]);
            left++
        }

        // when new char is not already present expand the window
        set.add(str[right])

        // calculating the current window length
        maxLength = Math.max(
            maxLength,
            right - left + 1
        );
    }
    return maxLength;
}

console.log(longestSubString("abcabcbb"))


// Minimum size subarray sum
// pattern sliding window
// Given an array of positive numbers and a target k, find the smallest length of a
// contiguos array whose sum is greater than or equal to k

// for min length with sum >= k expand -> valid -> shrink
// max sum of k elements fixed window

// arr = [2,3,1,2,4,3]
// k = 7

// [2,3,1,2] = 8   → length 4
// [3,1,2,4] = 10  → length 4
// [4,3] = 7       → length 2

// output 2

function minSubArrayLength(arr, k) {

    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for(let right = 0; right < arr.length; right++) {
        // Variable size window
        sum += arr[right];

        // Keep adding elements until sum >= k
        while(sum >= k) {
            // save the smallest length
            minLength = Math.min(
                minLength,
                right - left + 1
            );

            // since we already reached the target shrink the window
            // we remove the left most element and see whether the smaller window stil satisfies the target
            sum -= arr[left];
            left++
        }
    }
    return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLength);


// Longest repeating character replacement
// pattern sliding window + Frequency map

// Given a string and a number k, you can replace at most k characters
// Find the length of the longest substring that can be made to contain only one character


// Main Idea Inside our window find the character that appears the most
function characterReplacement(str, k) {

    let map = new Map();

    let left = 0;
    let maxFrequency = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {

        let char = str[right];

        // Count the current character inside the window
        map.set(char, (map.get(char) || 0) + 1);

        // Find the character that appears the most
        maxFrequency = Math.max(
            maxFrequency,
            map.get(char)
        );

        // Current window size
        let windowLength = right - left + 1;

        // Characters that must be replaced
        // Example: window = "AABA"
        // windowLength = 4
        // A appears 3 times
        // We need to replace 4 - 3 = 1 character
        let replacements = windowLength - maxFrequency;

        // If replacements are greater than k,
        // our window is invalid.
        // Remove characters from the left.
        while (replacements > k) {

            map.set(
                str[left],
                map.get(str[left]) - 1
            );

            left++;

            // Calculate the new smaller window
            windowLength = right - left + 1;

            // Check replacements again
            replacements = windowLength - maxFrequency;
        }

        // Keep the biggest valid window
        maxLength = Math.max(maxLength, windowLength);
    }

    return maxLength;
}

console.log(characterReplacement("AABABBA", 1));

// Minimum window substring
// Pattern - sliding window + Hashmap

// s = "ADOBECODEBANC"
// t = "ABC"
// output "BANC"


function minWindow(s, t) {

    // Store how many times each character is required
    let need = new Map();

    for (let char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    let left = 0;

    // How many required characters are currently matched
    let matched = 0;

    let minLength = Infinity;
    let start = 0;

    // Store characters inside the current window
    let window = new Map();

    for (let right = 0; right < s.length; right++) {

        let char = s[right];

        // Add current character to the window
        window.set(
            char,
            (window.get(char) || 0) + 1
        );

        // If this character is required
        // and we haven't used too many of it
        if (
            need.has(char) &&
            window.get(char) <= need.get(char)
        ) {
            matched++;
        }

        // When the window contains all required characters
        while (matched === t.length) {

            // Current window is valid
            let windowLength = right - left + 1;

            // Save the smallest valid window
            if (windowLength < minLength) {
                minLength = windowLength;
                start = left;
            }

            // Remove the left character
            let leftChar = s[left];

            window.set(
                leftChar,
                window.get(leftChar) - 1
            );

            // If removing it makes the window invalid
            if (
                need.has(leftChar) &&
                window.get(leftChar) < need.get(leftChar)
            ) {
                matched--;
            }

            left++;
        }
    }

    // No valid window found
    if (minLength === Infinity) {
        return "";
    }

    return s.substring(start, start + minLength);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));

// Fruits into baskets
// Pattern: Sliding Window + HashMap
// You have an array of fruits. You can carry fruits of only 2 different types.
// Find the maximum number of consecutive fruits you can collect.
// This is basically a longest subarray with at most 2 different values.


function fruitsIntoBaskets(arr) {

    let map = new Map();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < arr.length; right++) {

        // Add the current fruit to the window
        map.set(
            arr[right],
            (map.get(arr[right]) || 0) + 1
        );

        // We can have only 2 different fruit types
        while (map.size > 2) {

            let leftFruit = arr[left];

            // Remove the fruit from the window
            map.set(
                leftFruit,
                map.get(leftFruit) - 1
            );

            // If no more of this fruit exists,
            // remove it completely from the Map
            if (map.get(leftFruit) === 0) {
                map.delete(leftFruit);
            }

            left++;
        }

        // Current window is valid
        let windowLength = right - left + 1;

        maxLength = Math.max(
            maxLength,
            windowLength
        );
    }

    return maxLength;
}

console.log(fruitsIntoBaskets([1, 2, 1, 2, 3]));


// Binary search

// Given a sorted array, find the target number.
// arr = [1, 3, 5, 7, 9]
// target = 7
// output - 3


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


// Search insertion position
// Pattern binary search

// if the target doesnt exist return the position where it should be inserted

// arr = [1, 3, 5, 6]
// target = 5

// Output: 2 (5 already exists at index 2)

// arr = [1, 3, 5, 6]
// target = 2

// 2 should come between 1 and 3
// [1, 2, 3, 5, 6]
//     ↑
//   index 1
// output 1


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
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0


// Note
// Normal Binary Search:
// Found → return index
// Not found → return -1

// Search Insert Position:
// Found → return index
// Not found → return left

// Why left?

// When the search finishes, left points to the position 
// where the target can be inserted without breaking the sorted order.


// search insertion
// pattern binary search
// like normal binary search
// if the target doesnt exist return the position where it should be inserted

// arr = [1, 3, 5, 6]
// target = 5
// Output: 2 (5 already exists at index 2)

// arr = [1, 3, 5, 6]
// target = 2

// 2 should come between 1 and 3
// [1, 2, 3, 5, 6]
//     ↑
//   index 1
// output 1


function searchInsert(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {

        let mid = Math.floor((left + right) / 2)

        // if target already exists
        if (arr[mid] === target) {
            return mid;
        }

         if (arr[mid] < target) {
            left = mid + 1;
        }
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
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0


// Searh in Rotated sorted array
// Binary search
// important binary search variation

// A sorted array has been rotated at some point

// Normal sorted:

// [1, 2, 3, 4, 5, 6, 7]
// Rotated:
// [4, 5, 6, 7, 0, 1, 2]

// Main idea
// Even though entire array isn't sorted, one half of the array will be sorted

// 1. Find middle
//        ↓
// 2. Which half is sorted?
//        ↓
// 3. Is target inside that sorted half?
//        ↓
//    YES → search there
//    NO  → search other half

function searchRotated(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        // Target found
        if (arr[mid] === target) {
            return mid;
        }

        // LEFT half is sorted
        if (arr[left] <= arr[mid]) {

            // Target is inside the sorted left half
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1;
            }

            // Target is in the other half
            else {
                left = mid + 1;
            }

        }

        // RIGHT half is sorted
        else {

            // Target is inside the sorted right half
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1;
            }

            // Target is in the other half
            else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

console.log(
    searchRotated([4,5,6,7,0,1,2], 0)
);


// Find peak element
// Pattern binary search

// Given an array, find an element that is greater than its neighboring elements
// peak element means
// arr[i] > arr[i - 1]
// AND
// arr[i] > arr[i + 1]

// arr = [1, 2, 3, 1]
// 1  2  3  1
//       ↑

// output 2

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


// First and Last Position of Element
// Pattern: Binary Search — Leftmost + Rightmost occurrence
// Given a sorted array, find the first and last index of a target.
// arr = [5, 7, 7, 8, 8, 10]
// target = 8

// output [3, 4]

// FIRST → found → GO LEFT
// LAST  → found → GO RIGHT


function searchRange(arr, target) {

    let first = -1;
    let last = -1;

    // Find the first occurrence
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {

            first = mid;

            // Target found, but there may be
            // another target further to the LEFT.
            right = mid - 1;

        } else if (arr[mid] < target) {

            left = mid + 1;

        } else {

            right = mid - 1;
        }
    }

    // Find the last occurrence
    left = 0;
    right = arr.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {

            last = mid;

            // Target found, but there may be
            // another target further to the RIGHT.
            left = mid + 1;

        } else if (arr[mid] < target) {

            left = mid + 1;

        } else {

            right = mid - 1;
        }
    }

    return [first, last];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));

// Linked list
// create this linked list
// 10 -> 20 -> 30 -> null

// Create a Node
// class Node {

//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }


// // Create nodes
// let first = new Node(10);
// let second = new Node(20);
// let third = new Node(30);


// // Connect the nodes
// first.next = second;
// second.next = third;


// // First node is the head
// let head = first;


// // Traverse the linked list
// let current = head;

// while (current !== null) {

//     console.log(current.value);

//     current = current.next;
// }

// 1. Reverse Linked List
// Given a linked list, reverse the direction of all the nodes.
// pattern three pointers

// Node contain two things
// Value and next

// 10 → 20 → 30 → null
// value = 10
// next = address/reference of node 20

// Node
//  ↓
// value + next

// Head
//  ↓
// first node

// Reverse
//  ↓
// change next arrows

// Three pointers
//  ↓
// prev + current + next

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// function reverseList(head) {

//     // prev null
//     // current -> 10 -> 20 -> 30 -> null
//     let prev = null;
//     let current = head;

//     while(current !== null) {

//         // we need another variable bcoz we have to break the connection
//         // Save 
//         // initially 10 -> 20 -> 30 , now next -> 20 -> 30
//         let next = current.next;



//         // Reverse
//         // Initially prev = null, current = 10
//         // so this becomes 10 -> null
//         // reversed the first connection
//         current.next = prev;

//         // Move
//         // prev -> 10 -> null
//         // current -> 20 -> 30 -> null
//         prev = current;
//         current = next;
//     }

//     return prev;

// }

// // create the nodes
// let first = new Node(10);
// let second = new Node(20)
// let third = new Node(30)

// // connect nodes
// first.next = second;
// second.next = third;

// // Reverse
// let newHead = reverseList(first);
// console.log(newHead);


// Middle of linked list
// Given a linked list, find the middle node

// 10 → 20 → 30 → 40 → 50 → null
// output - 30
// Pattern slow and fast pointers, two pointers
// slow moves 1 step, fast move 2 steps
// when fast reaches end slow will be at the middle

// Whenever you see: fast.next.next
// Before moving two steps, check that fast and fast.next both exist.

// create a node
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// // Find the middle node
// function findMiddle(head) {

//     let slow = head;
//     let fast = head;

//     // slow moves 1 step
//     // fast moves 2 step

//     // Is fast currently pointing to a node?, Does the node after fast exist?
//     while(fast !== null && fast.next !== null) {

//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     return slow;
// }

// // Create nodes
// let first = new Node(10);
// let second = new Node(20);
// let third = new Node(30);
// let fourth = new Node(40);
// let fifth = new Node(50);


// // connect nodes
// first.next = second;
// second.next = third;
// third.next = fourth;
// fourth.next = fifth;

// // first is the head
// let head = first;

// // call the function
// let middle = findMiddle(head);

// console.log(middle.value);

// Linked list cycle
// Given a linked list, determine whether it contains a cycle.
// Normal linked list:   10 → 20 → 30 → 40 → null

// But this one has a cycle:
// 10 → 20 → 30 → 40
//      ↑              ↓
    //  └──────────────┘
// slow and fast pointers
// slow → moves 1 step
// fast → moves 2 steps


// If there is a cycle:
// slow and fast will eventually meet
// If there is no cycle:
// fast will reach null

//Create a node
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// // check whether linked list has a cycle
// function hasCycle(head) {

//     let slow = head;
//     let fast = head;

//     // Fast moves 2 steps
//     // so check that both steps are possible
//     while(fast !== null && fast.next !== null) {

//         slow = slow.next;
//         fast = fast.next.next;

//         // If they meet, there is a cycle
//         if(slow === fast) {
//             return true;
//         }
//     }

//     // Fast reached the end
//     // so there is no cycle
//     return false;
// }

// // Create nodes
// let first = new Node(10);
// let second = new Node(20);
// let third = new Node(30);
// let fourth = new Node(40);


// // Connect nodes
// first.next = second;
// second.next = third;
// third.next = fourth;


// // Create a cycle
// fourth.next = second;


// // Check cycle
// console.log(hasCycle(first));



// Merge Two Sorted Linked Lists
// You are given two sorted linked lists.
// Merge them into one sorted linked list.

// List 1:
// 1 → 3 → 5 → null

// List 2:
// 2 → 4 → 6 → null

// Result 1 → 2 → 3 → 4 → 5 → 6 → null

// We have two pointers:

// list1 → first list
// list2 → second list

// Compare their current values:

// list1.value < list2.value
//         ↓
// take list1

// Otherwise:

// take list2

// Then move that pointer forward.

// Compare
//    ↓
// Take smaller node
//    ↓
// Move that list forward
//    ↓
// Move result forward
//    ↓
// Repeat


// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// function mergeLists(list1, list2) {

//     // Create dummy node.
//     // It makes building the result easier

//     let dummy = new Node(0);
    
//     // tail points to the last node of our result
//     let tail = dummy;

//     // continue while both lists have nodes
//     while(list1 !== null && list2 !== null) {

//         // compare the current nodes
//         if(list1.value < list2.value) {

//             // Take node from list1
//             tail.next = list1;

//             // Move list1 forward
//             list1 = list1.next;
//         }else{

//             // Take node from list2
//             tail.next = list2;

//             // Move list2 forward
//             list2 = list2.next;
//         }
//         // Move result pointer forward
//         tail = tail.next;
//     }

//     // One list may still have nodes
//     // Attach the remaining part
//     if(list1 !== null) {
//         tail.next = list1;
//     }else{
//         tail.next = list2;
//     }

//     // dummy.next is the actual first node
//     return dummy.next;
// }

// // create first list
// let a1 = new Node(1);
// let a2 = new Node(3);
// let a3 = new Node(5);

// a1.next = a2;
// a2.next = a3;

// // create second list
// let b1 = new Node(2);
// let b2 = new Node(4);
// let b3 = new Node(6);

// b1.next = b2;
// b2.next = b3;


// // Merge both lists
// let mergedHead = mergeLists(a1,b1);


// // print the merged list
// let current = mergedHead;

// while(current !== null) {
//     console.log(current.value);
//     current = current.next;
// }


// Remove the nth node from end
// 1 → 2 → 3 → 4 → 5 → null
// Remove the 2nd node from the end.
// Count from the end:

// 1 → 2 → 3 → 4 → 5
//             ↑    ↑
//            2nd   1st

// So remove 4.
// Result:
// 1 → 2 → 3 → 5 → null

// Main idea

// Again, use two pointers:

// fast
// slow

// We keep fast ahead of slow.

// The gap between them is n.

// Then when fast reaches the end

// slow
//  ↓
// 3 → 4 → 5 → null

// slow is positioned just before the node we need to remove.

// Then we skip that node:

// slow.next = slow.next.next;

// We don't delete node 4 manually. We simply change the pointer so that 3 points directly to 5.

// This is another important linked-list pattern: two pointers + fixed gap.

// Pattern to remember
// Move fast n steps
//         ↓
// Move slow + fast together
//         ↓
// slow reaches before target
//         ↓
// skip target


// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// function removeNthFromEnd(head, n) {

//     let dummy = new Node(10);
//     dummy.next = head;

//     let slow = dummy;
//     let fast = dummy;

//   // move fast n steps ahead
//   for(let i = 0; i<n; i++) {
//     fast = fast.next;
//   }

//   // move both until fast reaches the last node
//   while(fast.next !== null) {
     
//     slow = slow.next;
//     fast = fast.next;
//   }

//   // Remove the node after slow
//   slow.next = slow.next.next;

//   // return the actual head
//   return dummy.next;
// }

// // creatr linked list
// let first = new Node(1);
// let second = new Node(2);
// let third = new Node(3);
// let fourth = new Node(4);
// let fifth = new Node(5);

// // Connect nodes
// first.next = second;
// second.next = third;
// third.next = fourth;
// fourth.next = fifth;

// // Remove 2nd node from the end
// let newHead = removeNthFromEnd(first, 2);

// // Print result
// let current = newHead;


// while (current !== null) {
//     console.log(current.value);
//     current = current.next;
// }



// Palindrome Linked List
// Check whether a linked list reads the same forward and backward.


// We combine two patterns:

// Slow + Fast Pointers
//         ↓
// Find the middle
//         ↓
// Reverse the second half
//         ↓
// Compare both halves


// Create a Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


function isPalindrome(head) {

    // Empty list or one node is always a palindrome
    if (head === null || head.next === null) {
        return true;
    }


    // --------------------------------
    // STEP 1: Find the middle
    // --------------------------------

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {

        slow = slow.next;
        fast = fast.next.next;
    }


    // --------------------------------
    // STEP 2: Reverse second half
    // --------------------------------

    let prev = null;
    let current = slow;

    while (current !== null) {

        let next = current.next;

        current.next = prev;

        prev = current;
        current = next;
    }


    // prev is now the head of reversed second half
    let secondHalf = prev;

    // First half starts from head
    let firstHalf = head;


    // --------------------------------
    // STEP 3: Compare both halves
    // --------------------------------

    while (secondHalf !== null) {

        if (firstHalf.value !== secondHalf.value) {
            return false;
        }

        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }


    return true;
}


// Create linked list:
// 1 → 2 → 2 → 1 → null

let first = new Node(1);
let second = new Node(2);
let third = new Node(2);
let fourth = new Node(1);

first.next = second;
second.next = third;
third.next = fourth;


// Check palindrome
console.log(isPalindrome(first));


// Intersection of Two Linked Lists
// You are given two linked lists. Find the node where they intersect.


// List A:

// 1 → 2 → 3
//           ↘
//             7 → 8 → null
//           ↗
// 4 → 5 → 6
// List B:


// List A:  1 → 2 → 3 → 7 → 8 → null
//                    ↘
//                      7 → 8
//                    ↗
// List B:  4 → 5 → 6


// The common part is:

// 7 → 8

// So the intersection node is:

// 7


// Two Pointers
// Use:

// let p1 = headA;
// let p2 = headB;

// When a pointer reaches the end of its list, move it to the head of the other list.
// Eventually, they will meet at the intersection.

// Create a Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


function getIntersectionNode(headA, headB) {

    let p1 = headA;
    let p2 = headB;

    while (p1 !== p2) {

        // If p1 reaches the end,
        // start again from headB
        if (p1 === null) {
            p1 = headB;
        } else {
            p1 = p1.next;
        }

        // If p2 reaches the end,
        // start again from headA
        if (p2 === null) {
            p2 = headA;
        } else {
            p2 = p2.next;
        }
    }

    // Either the intersection node or null
    return p1;
}


// Common nodes
let common1 = new Node(7);
let common2 = new Node(8);

common1.next = common2;


// List A
let a1 = new Node(1);
let a2 = new Node(2);
let a3 = new Node(3);

a1.next = a2;
a2.next = a3;
a3.next = common1;


// List B
let b1 = new Node(4);
let b2 = new Node(5);
let b3 = new Node(6);

b1.next = b2;
b2.next = b3;
b3.next = common1;


// Find intersection
let intersection = getIntersectionNode(a1, b1);


// Print result
if (intersection !== null) {
    console.log(intersection.value);
} else {
    console.log("No intersection");
}


// Recursion
// Problem 1: Factorial Using Recursion
// Find the factorial of a number.

// Every recursive function generallay has basecase
// if (n === 1) {
//     return 1;
// }

// without a base case, recursion can continue indefinitely


// Tricks

// 1. What is my BASE CASE?
// 2. How do I make the problem SMALLER?
// 3. Call the function again.

function factorial(n) {

    // BASE CASE
    // Stop recursion when n becomes 1
    if (n === 1) {
        return 1;
    }

    // RECURSIVE CASE
    // Function calls itself with n - 1
    return n * factorial(n - 1);
}


console.log(factorial(5));


// output - 120


// Fibonacci using recursion
// pattern recursion + two previous values

// why two base case bcoz fibonacci starts with
// F(0) = 0
// F(1) = 1


// Get the previous Fibonacci number + the number before that.
// return fibonacci(n - 1) + fibonacci(n - 2);

function fibonacci(n) {

    // BASE CASE
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    // RECURSIVE CASE
    return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(5));

// output 5


// Sum of Numbers
// Find the sum of numbers from 1 to n using recursion.

// The main idea is:

// sum(5)
// = 5 + sum(4)
// = 5 + 4 + sum(3)
// = 5 + 4 + 3 + sum(2)
// = 5 + 4 + 3 + 2 + sum(1)

// Then we stop at 1.


function sumNumbers(n) {

    // BASE CASE
    // When n becomes 1, stop recursion
    if (n === 1) {
        return 1;
    }

    // RECURSIVE CASE
    // Add n to the sum of numbers before it
    return n + sumNumbers(n - 1);
}


console.log(sumNumbers(5));

// output 15


// Reverse a String

// Pattern
// We take the last character and put it in front.

// hello
//  ↓
// o + hell
//  ↓
// o + l + hel
//  ↓
// o + l + l + he
//  ↓
// olleh


function reverseString(str) {

    // BASE CASE
    // If string has 0 or 1 character,
    // it is already reversed
    if (str.length <= 1) {
        return str;
    }

    // RECURSIVE CASE
    // Take the last character
    // + reverse the remaining string
    return str[str.length - 1] + reverseString(str.slice(0, -1));
}


console.log(reverseString("hello"));

// output - olleh


// Stack

// Design a stack that supports:

// push()
// pop()
// top()
// getMin()

// The special requirement is:

// getMin() should return the minimum value in O(1) time.

// We use two stacks:

// Main Stack       Min Stack

// 5                5
// 3                3
// 7                3
// 2                2

// The Min Stack always keeps track of the smallest value.

// So:

// Main Stack → stores everything
// Min Stack  → stores current minimum


// Interview memory trick

// Normal stack + Minimum stack = O(1) minimum

class MinStack {

    constructor() {

        // Normal stack
        this.stack = [];

        // Stores minimum values
        this.minStack = [];
    }


    push(value) {

        // Add value to normal stack
        this.stack.push(value);

        // If minStack is empty OR value is smaller
        // than current minimum, store value
        if (
            this.minStack.length === 0 ||
            value <= this.minStack[this.minStack.length - 1]
        ) {
            this.minStack.push(value);
        }
    }


    pop() {

        // Remove top value
        let removed = this.stack.pop();

        // If removed value is the current minimum,
        // remove it from minStack too
        if (
            removed === this.minStack[this.minStack.length - 1]
        ) {
            this.minStack.pop();
        }
    }


    top() {

        // Return top element
        return this.stack[this.stack.length - 1];
    }


    getMin() {

        // Minimum is always at top of minStack
        return this.minStack[this.minStack.length - 1];
    }
}


// Create MinStack
let stack = new MinStack();

stack.push(5);
stack.push(3);
stack.push(7);
stack.push(2);

console.log(stack.top());
console.log(stack.getMin());

stack.pop();

console.log(stack.top());
console.log(stack.getMin());


// Evaluate Reverse Polish Notation
// Problem

// You are given an expression in Reverse Polish Notation (RPN) and need to calculate the result.

// Example

// ["2", "1", "+", "3", "*"]

// This means:

// (2 + 1) × 3

// Output:

// 9


// Pattern: Stack

// When you see a number, put it into the stack.

// When you see an operator, take the last two numbers from the stack, perform the operation, and put the result back.

// Number → PUSH
// Operator → POP → calculate → PUSH


function evaluateRPN(tokens) {

    let stack = [];

    for (let token of tokens) {

        // If token is a number, push it into stack
        if (!isNaN(token)) {
            stack.push(Number(token));
        }

        // If token is an operator
        else {

            // Get the second number
            let second = stack.pop();

            // Get the first number
            let first = stack.pop();

            let result;

            if (token === "+") {
                result = first + second;
            }
            else if (token === "-") {
                result = first - second;
            }
            else if (token === "*") {
                result = first * second;
            }
            else if (token === "/") {
                result = Math.trunc(first / second);
            }

            // Put result back into stack
            stack.push(result);
        }
    }

    // Final value is the answer
    return stack.pop();
}


console.log(
    evaluateRPN(["2", "1", "+", "3", "*"])
);

// output 9