// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

  let strN = JSON.stringify(Math.abs(n));
  let revStrN = strN.split('').reverse();
  let revN = Number(revStrN.join(''));
  
  if (n < 0) {
    return -revN;
  }

  return revN;
}

module.exports = reverseInt;
