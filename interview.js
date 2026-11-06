// reverse a string
function reverseString(str){
    let result = str.split("").reverse().join("");
    return result;
}

console.log(reverseString("hello"));


// check palindrome string
function isPalindrome(str) {
    let res = str.split("").reverse().join("")
    return str === res
}

console.log(isPalindrome("hello"))


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

console.log(countVowels("JavaScript"));


// remove duplicate characters
function removeDuplicates(str) {
    let result = [...new Set(str)].join("");
    return result;
}

console.log(removeDuplicates("programming"));

// First non-repeating character
function firstNonRepeating(str){
    for(let char of str) {
        if(str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeating("aabbcdde"));

// find longest word in sentence
function longestWord(sentence) {
    let word = sentence.split(" ");

    return word.reduce((longest,current) => {
        return current.length > longest.length ? current : longest
    })
}
console.log(longestWord("I Love symphony"));

// capitalize first letter of each word
function capitalizeWords(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalizeWords("hello world"))

// check anagram

function isAnagram(str1,str2) {
    let word1 = str1.toLowerCase().split("").sort().join("");
    let word2 = str2.toLowerCase().split("").sort().join("");

    return word1 === word2;
}

console.log(isAnagram("listen","silent"));

// character frequency

function characterFrequency(str) {
    let freq = {};

    for(let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}

console.log(characterFrequency("hello"));

// reverse words in a sentence

function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("I Love Symphony"));

