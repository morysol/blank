// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  let tempS = '';
  for (; n > 0; n -= 1) {
    tempS += s;
  }
  return tempS;
}

console.log(repeatStr(1, 'I'));

// function repeatStr(n, s) {
//   return s.repeat(n);
// }
