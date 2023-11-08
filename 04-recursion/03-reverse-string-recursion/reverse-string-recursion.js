function reverseString(str) {
  if (str === '') {
    return '';
  }

  return reverseString(str.substring(1)) + str[0];
}

// const reverseString = (str) =>
//   str === '' ? '' : reverseString(str.substring(1)) + str.charAt(0);

module.exports = reverseString;
