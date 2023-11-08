// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Using ES2015 syntax
function palindrome(str) {
  let reverse = str.split('').reduce( (rev, char) =>
     char + rev , '');

  return str === reverse;
}

module.exports = palindrome;


// First Solution
// function palindrome(str) {
//   let reverse = str.split('').reverse().join('');
//   return str === reverse;
// }


// Second solution
// function palindrome(str) {
//   let reverse = "";
//
//   for(let char of str) {
//     reverse = char + reverse;
//   }
//
//   return str === reverse;
// }


// Third Solution
// function palindrome(str) {
//   let reverse = str.split('').reduce((rev, char) => {
//     return char + rev;
//   }, '');
//
//   return str === reverse;
// }

// Fourth Solution using advance 'every' helper function
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }
