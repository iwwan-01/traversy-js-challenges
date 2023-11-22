const HashTable = require('./HashTable');

function anagramGrouping(words) {
  const anagramGroups = new HashTable();

  for (const word of words) {
    const sortedChars = word.split('').sort().join('');

    if (!anagramGroups.has(sortedChars)) {
      anagramGroups.set(sortedChars, [word]);
    } else {
      anagramGroups.get(sortedChars).push(word);
    }
  }

  return anagramGroups.getValues();
}

module.exports = anagramGrouping;
