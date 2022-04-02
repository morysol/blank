/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

// const a = [1, 2, 3, '1', 'x', 'qww x tyu'];

// const a = [66, 101];
// const x = 66;

// const a = [101, 45, 75, 105, 99, 107];
// const x = 107;

// const a = ['t', 'e', 's', 't'];
// const x = 'e';

const a = ['what', 'a', 'great', 'kata'];
const x = 'kat';

let result = false;

for (let key of a) {
  if (typeof key === typeof x && typeof key === 'number') {
    result = key === x ? true : result;
  } else if (typeof key === typeof x && typeof key === 'string') {
    result = key.includes(x) ? true : result;
  }
}
console.log(result);

const check = (a, x) => a.includes(x);
console.log(a.includes(x));

// function check(a, x) {
//   return a.includes(x);
// }
