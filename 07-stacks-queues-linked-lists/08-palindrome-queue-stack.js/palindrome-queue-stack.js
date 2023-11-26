const Queue = require('./queue');
const Stack = require('./stack');

function isPalindromeQueueStack(str) {
  const queue = new Queue();
  const stack = new Stack();

  const chars = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '')
    .split('');

  for (let i = 0; i < chars.length; i++) {
    queue.enqueue(chars[i]);
    stack.push(chars[i]);
  }

  while (!queue.isEmpty()) {
    if (queue.dequeue() !== stack.pop()) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindromeQueueStack;
