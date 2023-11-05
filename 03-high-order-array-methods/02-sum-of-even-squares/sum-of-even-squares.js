function sumOfEvenSquares(numbers) {
  const evenNums = numbers.filter((num) => num % 2 === 0);

  const evenNumsSquares = evenNums.map((num) => Math.pow(num, 2));

  const sum = evenNumsSquares.reduce((total, num) => {
    return total + num;
  }, 0);

  return sum;
}

// function sumOfEvenSquares(numbers) {
//   const evenSquares = numbers
//     .filter((num) => num % 2 === 0)
//     .map((num) => num ** 2)
//     .reduce((sum, num) => sum + num, 0);
//   return evenSquares;
// }

module.exports = sumOfEvenSquares;
