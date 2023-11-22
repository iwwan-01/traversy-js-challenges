const HashTable = require('./HashTable');

function wordInstanceCounter(str, word) {
  const words = str.toLowerCase().split(/\W+/);
  const wordCounter = new HashTable();
  const targetWord = word.toLowerCase();

  for (const word of words) {
    if (word === '') continue;

    if (wordCounter.has(word)) {
      wordCounter.set(word, wordCounter.get(word) + 1);
    } else {
      wordCounter.set(word, 1);
    }
  }

  return wordCounter.get(targetWord);
}

module.exports = wordInstanceCounter;
