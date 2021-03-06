// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// Solution 2
function palindrome(str) {
    str.split("").every((char, i) => {
        return char === str[str.length - i - 1];
    })
}

module.exports = palindrome;


// Solution 1
// function palindrome(str) {
//     // reverse the given str
//     const reversedStr = str.split("").reverse().join("");
//     // compare the given str with the reversedStr and return result
//     return str === reversedStr;
// }



