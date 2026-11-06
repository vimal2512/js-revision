// Rotate Array
// pattern - Array reversal

// Problem statement
// given an array nums and integer k, rotate the array to the right by k positions

// Input:
// nums = [1, 2, 3, 4, 5, 6, 7]
// k = 3


// original array - [1,2,3,4,5,6,7]
// reverse the entire array - [7,6,5,4,3,2,1]
// reverse the first k = 3 elements - [5,6,7,4,3,2,1]
// reverse the remaining elements - [5,6,7,1,2,3,4]


// k % n handles cases where k is larger than the array length.
// reverse() swaps elements from both ends toward the middle.
// Three reversals rotate the array in place, without creating another array.

// Pattern to remember: Rotate right → reverse all → reverse first k → reverse the rest.


function rotateArray(nums, k) {
    const n = nums.length;

    // handle an empty array 
    if(n === 0) return nums;

    // Rotating n times the gives original array
    k = k % n;

    // reverse the entire array
    reverse(nums, 0, n - 1);

    // reverse the first k elements
    reverse(nums, 0, k -1);

    // reverse the remaining elements
    reverse(nums, k, n - 1);

    return nums;
}

function reverse(nums, left, right) {

    while(left < right) {

        // swap the elements at both ends
        [nums[left], nums[right]] = [nums[right], nums[left]];

        left++;
        right--;
    }
}
 
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

console.log(rotateArray(nums,k));


// Roman to Integer

// Roman numerals use these symbols

// Most of the time, we add the current symbol's value.
// But when a smaller value appears before a larger value, we subtract it.
// Examples:
// - VI = 5 + 1 = 6
// - IV = 5 − 1 = 4
// - IX = 10 − 1 = 9
// - MCM = 1000 + (1000 − 100) = 1900
// Interview trick: If the current symbol is smaller than the next
// symbol, subtract it. Otherwise, add it.


function romanToInt(s) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0;

    for(let i = 0; i < s.length; i++) {
        const current = values[s[i]];
        const next = values[s[i+1]] || 0;

        // smaller value before a larger value means subtraction
        if(current < next) {
            total -= current;
        }else{
            total += current;
        }
    }

    return total;
}

// Test
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("IV"));


// Given an array of characters, compress consecutive repeated characters
// by replacing them with the character followed by its count


// Input: ["a","a","b","b","c","c","c"]
// Output: ["a","2","b","2","c","3"]
// two pointers
// write, left are the two pointers


// The logic you must remember
// 1. Save the current character.
// 2. Count consecutive occurrences.
// 3. Write the character once.
// 4. Write the count as individual digits when the count exceeds one.
// 5. Return the write pointer.


//  First and last position of an element

// You are given a sorted array and a target number. Find the first and last
// positions of that target number

// nums = [1,2,4,4,4,5,6];
// target = 4;

// Output: [2, 4]

// Use two separate searches
// find the first occurrence of 4
// find the last occurrence of 4


function searchRange(nums, target) {
  function findFirst() {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        result = mid;     // Found target
        right = mid - 1;  // Search further left
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }

  function findLast() {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        result = mid;    // Found target
        left = mid + 1;  // Search further right
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }

  return [findFirst(), findLast()];
}

console.log(searchRange([1, 2, 4, 4, 4, 5, 6], 4));
console.log(searchRange([1, 2, 3, 5], 4));
