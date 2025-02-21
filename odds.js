function someOdd(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
    odds.push(number)
  }
}
  let sum = 0;
  for (const number of odds) {
     sum = sum + number;
  }

  const count = odds.length;
  console.log(sum, count)
  const avg = sum / count;
  return avg;
}

const numbers = [12, 34, 55, 77, 98, 31, 33, 45, 60];
const avg = someOdd(numbers);
console.log('some of odd numbers:',avg)