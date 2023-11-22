function anagramGrouping(words) {
  const anagramGroups = new Map();

  for (const word of words) {
    const sortedChars = word.split('').sort().join('');

    if (anagramGroups.has(sortedChars)) {
      anagramGroups.set(sortedChars, [...anagramGroups.get(sortedChars), word]);
    } else {
      anagramGroups.set(sortedChars, [word]);
    }
  }

  return Array.from(anagramGroups.values());
}

module.exports = anagramGrouping;
