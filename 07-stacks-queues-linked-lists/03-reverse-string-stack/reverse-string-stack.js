const Stack = require('./stack');

function reverseStringStack(str) {
  const stack = new Stack();

  for (const char of str) {
    stack.push(char);
  }

  let reversedStr = '';

  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

module.exports = reverseStringStack;
