function findMissingLetter(arr) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let startIndex = alphabet.indexOf(arr[0]);

  if (arr.length === 0) {
    return '';
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }
}

// function findMissingLetter(arr) {
//   let start = arr[0].charCodeAt(0);

//   for (let i = 0; i < arr.length; i++) {
//     let current = arr[i].charCodeAt(0);
//     if (current - start > 1) {
//       return String.fromCharCode(start + 1);
//     }

//     start = current;
//   }
// }

module.exports = findMissingLetter;
