function fizzBuzzArray(num) {
  let arr = [];

  while (num !== 0) {
    if (num % 3 === 0 && num % 5 === 0) {
      arr.unshift('FizzBuzz');
    } else if (num % 3 === 0) {
      arr.unshift('Fizz');
    } else if (num % 5 === 0) {
      arr.unshift('Buzz');
    } else {
      arr.unshift(num);
    }
    num--;
  }

  return arr;
}

// function fizzBuzzArray(num) {
//   let arr = [];

//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push('FizzBuzz');
//     } else if (i % 3 === 0) {
//       arr.push('Fizz');
//     } else if (i % 5 === 0) {
//       arr.push('Buzz');
//     } else {
//       arr.push(i);
//     }
//   }

//   return arr;
// }

module.exports = fizzBuzzArray;
