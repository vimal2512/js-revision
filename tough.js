// Rotate array 
// pattern - Array reversal

// problem statement
// given an array nums and integer k, rotate the array to right by k positions
// Input
// nums = [1,2,3,4,5,6,7]
// k = 3

// original array - [1,2,3,4,5,6,7]
// reverse the array - [7,6,5,4,3,2,1]
// reverse the first k elements k = 3 - [5,6,7,4,3,2,1]
// reverse the remaining elements = [5,6,7,1,2,3,4]


function rotateArray(nums, k) {

    let n = nums.length;

    // rotate array by k position
    k = k % n;

    // rotate entire array
    reverse(nums, 0, n - 1);

    // rotate first k elements
    reverse(nums, 0, k - 1);

    // reverse remaining elements
    reverse(nums, k, n - 1);

    return nums;
}


function reverse(nums, left, right) {

    while (left < right) {

        [nums[left], nums[right]] = [nums[right], nums[left]];

        left++;
        right--;
    }
}

let nums = [1,2,3,4,5,6,7];
let k = 3;

console.log(rotateArray(nums,k));


// Roman to integer

// Most of the time, we add the current symbols value but when smaller value
// appears before a larger value, we subtract it

// Interview tric: If the current symbol is smaller than the next
// subtract it. other wise add it


function romanToInt(s) {

    let values = {
        I: 1,
        V : 5,
        X : 10
    }

    let total = 0;

    for(let i = 0; i < s.length; i++) {
       let current = values[s[i]];
       let next = values[s[i+1]];

       if(current < next) {
        total -= current;
       }else{
        total += current;
       }
    }

    return total;
}

console.log(romanToInt("XVI"));


// First and last position of an element

// You are given a sorted array and a target number. Find the first and last
// positions of that target number

// nums = [1,2,4,4,4,5,6];
// target = 4

// output: [2, 4]

// use two separate searches
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


// longest consecutive sequence
// const nums = [100, 4, 200, 1, 3, 2];
// find the length of the longest consecutive sequence
// of consecutive numbers

function longestConsecutive(nums) {
  let longest = 0;

  // choose each number as a starting number
  for(let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let count = 1;

    // check whether next consecutive number exists
    while(nums.includes(current + 1)) {
      current++;
      count++;
    }

    // update the longest sequence length
    if(count > longest) {
      longest = count;
    }
  }

  return longest;
}

const nums = [100, 4, 200, 1, 3, 2];