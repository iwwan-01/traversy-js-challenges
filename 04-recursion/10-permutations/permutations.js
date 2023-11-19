function permutations(str) {
  let result = [];

  if (str.length === 0) {
    result.push('');
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];
    // console.log(firstChar)
    const restOfString = str.slice(0, i) + str.slice(i + 1);
    const subPermutations = permutations(restOfString);

    for (let j = 0; j < subPermutations.length; j++) {
      // console.log(subPermutations);
      result.push(firstChar + subPermutations[j]);
    }
  }

  return result;
}

module.exports = permutations;
