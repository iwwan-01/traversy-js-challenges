function flattenArray(arr) {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result = flattenArray(result.concat(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

module.exports = flattenArray;
