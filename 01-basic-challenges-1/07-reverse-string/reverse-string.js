// const reverseString = (str) => str.split('').reverse().join('');

function reverseString(str) {
  let reversedStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

module.exports = reverseString;
