function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return str.replace(/[^aeiou]/gi, '').length;
}

// function countVowels(str) {
//   let count = 0;
//   let formattedStr = str.toLowerCase();
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//   for (let i = 0; i < formattedStr.length; i++) {
//     if (vowels.includes(formattedStr[i])) {
//       count++;
//     }
//   }

//   return count;
// }

module.exports = countVowels;
