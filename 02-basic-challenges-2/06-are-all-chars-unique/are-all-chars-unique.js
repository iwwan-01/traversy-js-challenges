function areAllCharactersUnique(str) {
  let uniqueSet = new Set();

  for (let i = 0; i < str.length; i++) {
    if (uniqueSet.has(str[i])) {
      return false;
    } else {
      uniqueSet.add(str[i]);
    }
  }

  return true;
}

// function areAllCharactersUnique(str) {
//   const charObj = {};

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (charObj[char]) {
//       return false;
//     }

//     charObj[char] = true;
//   }

//   return true;
// }

module.exports = areAllCharactersUnique;
