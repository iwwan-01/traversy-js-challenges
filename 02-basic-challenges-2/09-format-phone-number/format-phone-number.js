// function formatPhoneNumber(numbers) {
//   const areaCode = numbers.slice(0, 3).join('');
//   const prefix = numbers.slice(3, 6).join('');
//   const lineNumber = numbers.slice(6).join('');

//   return `(${areaCode}) ${prefix}-${lineNumber}`;
// }

const formatPhoneNumber = (numbers) =>
  `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers
    .slice(6)
    .join('')}`;

module.exports = formatPhoneNumber;
