/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

// const a = [1, 2, 2];
const a = [1, 7, 2, 3, 3, 2];
let total = 0;

for (let key of a) {
  total += key * key;
}

console.log(a);
console.table(a);
console.log(total);

// function squareSum(numbers) {
//   return numbers.reduce(function (sum, n) {
//     return n * n + sum;
//   }, 0);
// }
