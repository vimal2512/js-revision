// valid parenthesis

function validParenthesis(str) {

    let stack = [];

    for(let char of str) {

        if(char === "(" || char === "[" || char === "(") {
            stack.push(char);
        }else{

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

    return stack.length === 0
};

console.log(validParenthesis("[]"));

// Two sum
// given an array and a target, return the indices of the two numbers whose sum equals the target

function twoSum(arr, target) {

    
    let map = new Map();

    for(let i = 0; i < arr.length; i++) {
          let need = target - arr[i];

          if(map.has(need)) {
             return [map.get(need),i]
          }
          map.set(arr[i],i);

    }
}

console.log(twoSum([1,2,3,4,5],3));


// contains duplicate
// given an array return true if any value appears more than once

function containsDuplicate(arr) {

    let map = new Map();

    for(let num of arr) {

        if(map.has(num)) {
            return true;
        }

        map.set(num, true)
    }

    return false;
}


console.log(containsDuplicate([1,2,3,4,4,4,5]));


function containDuplicate(arr) {

    let set = new Set()

    for(let num of arr) {

        if(set.has(num)) {
           return true;
        }
        
        set.add(num, true)
    }

    return false;
    
}

console.log(containDuplicate([1,2,3,4,5]));


// map store key value pairs
// set store unique values

// majority elemnent
// Given an array, find the element that appears more than n/2 times of half of the array

function majorityElement(arr) {

    let map = new Map();

    for(let num of arr) {
        // if element appears increase its count

        if(map.has(num)){
           map.set(num, map.get(num) + 1);
        }else{
            map.set(num,1)
        }
        
    }

    for(let [key, value] of map) {

        if(value > arr.length / 2) {
            return key;
        }
    }

}


console.log(majorityElement([2,2,1,1,1,2,2]));

// Top k frequent elements
// given an array and a number k, return the k most frequent elements

function topKfrequent(arr, k) {

    let map = new Map();

    for(let num of arr) {

        if(map.has(num)) {
            map.set(num,map.get(num) + 1);
        }else{
            map.set(num,1);
        }
    }

    let arr1 = [...map.entries()];

    arr1.sort((a, b) => b[1] - a[1]);

    return arr1.slice(0,k).map(item => item[0]);

}

console.log(topKfrequent([1,1,1,1,2,2,2,3,3],3));

// best time to buy and sell stocks
// you are given an array where each element is the stock price on a day
// you can buy once sell once buy before you sell
// greedy algorithm

function maxProfit(arr) {
    
    let minPrice = arr[0];
    let maxProfit = 0;

    for(let price of arr) {
           
        // store the minmum price seen so far
        if(price < minPrice) {
            minPrice = price;
        }

        // profit
        let profit = price - minPrice;

        if(profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
} 

console.log(maxProfit([25,67,89,55]));


// move zeros to end
// move all 0s to end of the array while keeping the order of the elements same

function moveZerostoEnd(arr) {

    let index = 0;

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] !== 0) {
            [arr[index],arr[i]] = [arr[i],arr[index]];
            index++;
        }

        
    }
    return arr;
   
}

console.log(moveZerostoEnd([1,2,3,0,0,5,6,7]));


// remove duplicates from sorted array
// given an array, remove duplicates in place and return number of unique elements

// array is already sorted

function removeDuplicates(arr) {
    
    let index = 0;

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] !== arr[i-1]){
            arr[index] = arr[i];
            index++;
        }
    }
   return index;
}

console.log(removeDuplicates([1,2,3,4,5,5,5]));

// merge sorted arrays

function mergeArrays(arr1, arr2) {

    let result = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {

        if(arr1[i] < arr2[j]){

            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

console.log(mergeArrays([1,2,3],[4,5]));


// maximum sub array
// given an array find the maximum sum of any contiguous subarray
// contiguous means the elements must be next to each other
// kandanes algorithm

function maxSubArray(arr) {

    // maximum sum at current position
    let currentSum = 0;

    // maximum value seen so far
    let maxSum = 0;

    for(let i = 0; i < arr.length; i++) {
       // shall i create new sub array from current position
       // go with existing sub array

       currentSum =Math.max(arr[i], currentSum + arr[i]);
       maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum
}

console.log(maxSubArray([1,-2,3,-2,4,-1]));


// longest common prefix
// pattern string compression

// Given an array of strings, find the longest common prefix shared by all the strings
//Input ["flower", "flow", "flight"]

function longestCommonPrefix(arr) {

    let prefix = arr[0];
   
    for(let word of arr) {
        while(!word.startsWith(prefix)) {
            prefix = prefix.slice(0,-1);
        }
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]))


// group anagrams
// pattern hashmap and string

// given an array of strings group all the anagrams togethrr
// Input: ["eat","tea","tan","ate","nat","bat"]

function groupAnagrams(arr) {

    let map = new Map();

    for(let word of arr) {

        let key = word.split("").sort().join("");

        if(!map.has(key)) {
            map.set(key,[])
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
// output "holle"

function reverseVowels(str) {

    let vowels = "aeiouAEIOU";
    let left = 0;
    let arr = str.split("");
    let right = arr.length - 1;

    while(left < right) {

        while(left < right && !vowels.includes(arr[left])) {
            left++;
        }

        while(left < right && !vowels.includes(arr[right])) {
            right--;
        }

        // swap the vowels
        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr.join("")
}

console.log(reverseVowels("hello"))

// maximum subarray of size k
// given an array and a number k, find the maximum sum of any k consecutive elements
// arr = [2, 1, 5, 1, 3, 2]
// k = 3
// [2, 1, 5] = 8
// [1, 5, 1] = 7
// [5, 1, 3] = 9  ← maximum
// [1, 3, 2] = 6


function maxSubArray(arr, k) {

    let windowSum = 0;
    let maxSum = 0;

    // first window
    for(let i = 0; i < k; i++) {
       windowSum += arr[i];
    }

    maxSum = windowSum;

    // slide the window
    for(let i = k; i < arr.length; i++) {

        // old window sum + new element - element leaving the window
        windowSum = windowSum + arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(maxSubArray([2,1,5,1,3,2],3));

// longest substring without repeating characters
// pattern sliding window and set
// given a string, find the length of the longest substring without duplicate characters
// sliding window + set

// "abcaaab" // output abc

function longestSubstring(str) {
   
    let set = new Set();
    let maxLength = 0;
    let left = 0;

    // window b/w left and right window must contain unique char
    for(let right = 0; right < str.length; right++) {

        // when duplicate appears shrink the window from left
        while(set.has(str[right])) {

            // continue until duplicate is removed
            set.delete(str[left]);
            left++;
        }

        // when new char is not already present expand the window
        set.add(str[right]);
        
        maxLength = Math.max(
            maxLength,
            left - right + 1
        )

        return maxLength;
    }
}

console.log(longestSubstring("abcaabb"));

// Minimum size subarray sum

function minSubArrayLength(arr, target) {
    
}