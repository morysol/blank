/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20
*/

let arr = [1, -4, 7, 12];
let res = 0;
for (let a of arr) {
  if (a <= 0) {
    continue;
  }
  res += a;
}
console.log(res);

// function positiveSum(arr) {
//   return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
// }
