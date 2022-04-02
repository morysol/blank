/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

//
// let r = [];

// const sqrDgt = n => {
//   n.toString()
//     .split('')
//     .forEach(element => r.push(element * element));
//   return r.join('');
// };

const sqrDgt = n => {
  return parseInt(
    n
      .toString()
      .split('')
      .reduce((r, element) => {
        r.push(element * element);
        return r;
      }, [])
      .join('')
  );
};

console.log(sqrDgt(9119));
console.log(sqrDgt(3212));
console.log(sqrDgt(2112));
