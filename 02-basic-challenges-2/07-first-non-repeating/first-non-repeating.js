function findFirstNonRepeatingCharacter(str) {
  for (let i = 1; i < str.length + 1; i += 2) {
    if (str[i] !== str[i - 1]) {
      return str[i - 1];
    }
  }

  return null;
}

// function findFirstNonRepeatingCharacter(str) {
//   let charCount = {};

//   for (let char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   for (let char of str) {
//     if (charCount[char] === 1) {
//       return char;
//     }
//   }

//   return null;
// }

// function findFirstNonRepeatingCharacter(str) {
//   let charMap = new Map();

//   for (let char of str) {
//     charMap.set(char, (charMap.get(char) || 0) + 1);
//   }

//   for (let char of str) {
//     if (charMap.get(char) === 1) {
//       return char;
//     }
//   }

//   return null;
// }

module.exports = findFirstNonRepeatingCharacter;
