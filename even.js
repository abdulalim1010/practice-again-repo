function evenAvg(numbers) {
  let evens = []
  for (const number of numbers) {
    if (number % 2 === 0) {
      evens.push(number)
    }
  }
  let sum = 0;
  for (number of evens) {
    sum = sum + number;
   
  }
  const count = evens.length;
  const avg = sum / count;
  console.log(sum,count)
    return avg;
}
const numbers=[12, 23, 44, 56, 677, 9, 99, 78, 67];
const avg = evenAvg(numbers);
console.log('some of even number average:', avg);
