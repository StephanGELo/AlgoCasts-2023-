// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

//#Solution 1
// function reverse(str) {
//   let reverseStr = "";
//
//   for (let i = str.length - 1; i>= 0; i--) {
//     reverseStr += str[i];
//   }
//
//   return reverseStr;
//
// }

//#Solution 2
// function reverse(str) {
//   return str
//    .split('')
//    .reverse()
//    .join('')
//
// }

//#Solution 3 (similar to solution 1 but using for loop syntax based on ES2015)
// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }
