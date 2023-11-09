// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//helper function to reverse string
function reverseStr(str) {
  let reversed = "";

  for(let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

function reverseInt(n) {
  const sign = Math.sign(n);
  const revString = reverseStr(n.toString());
  return sign * parseInt(revString);
}

module.exports = reverseInt;

// First Solution
// function reverseInt(n) {
//
//   let strN = JSON.stringify(Math.abs(n));
//   let revStrN = strN.split('').reverse();
//   let revN = Number(revStrN.join(''));
//
//   if (n < 0) {
//     return -revN;
//   }
//
//   return revN;
// }

// Second Solution using Math.sign() and parseInt()
// function reverseInt(n) {
//   const sign = Math.sign(n);
//   const revString = n.toString().split('').reverse().join('');
//   return sign * parseInt(revString);
// }
