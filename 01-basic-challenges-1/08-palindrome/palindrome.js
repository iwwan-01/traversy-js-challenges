function isPalindrome(str) {
  let formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversedStr = '';

  for (let i = formattedStr.length - 1; i >= 0; i--) {
    reversedStr += formattedStr[i];
  }

  if (formattedStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}

// function isPalindrome(str) {
//   let formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   let reversedStr = formattedStr.split('').reverse().join('');

//   return formattedStr === reversedStr;
// }

module.exports = isPalindrome;
