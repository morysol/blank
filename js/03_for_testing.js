// for

// let iBegin = 0;
// let iLimit = 10;
// let iOffset = 1;

// for (let i = iBegin; i <= iLimit; i += iOffset) {
//   console.log(i, '#####', iLimit - i);
// }

//----------------------
// string concat

// const str1 = 'Hello';
// const str2 = 'World';

// let sss = 'Привет ' + str1 + ', ' + 'Мир ' + str2 + '!';
// console.log(sss);

// let fff = `Привет ${str1}, Мир ${str2}!`;
// console.log(fff);

// console.log(sss === fff);

// let ddd = ''.concat('Привет ', str1, ', ', 'Мир ', str2, '!');
// console.log(ddd);

// console.log(sss === ddd && sss === fff);

// A R R A Y.reduce

const marbles = []; // Our bag
marbles.push(3); // Add marbles to the inner pockets
marbles.push(5);
marbles.push(1);

console.log(marbles); // [3, 5, 1]

// How many marbles I gots?
// Count will be our group/accumulate of marbles
// The first time it runs it will be already = 3. We like being efficient here,
// so we start with the first pocket already in the count
const marbleCount = marbles.reduce((count, value, index) => {
  console.log(`Current index: ${index}`);
  // Output 1 on first pass, then 2. Notice we skip 0 here.

  const totalSoFar = count + value;

  console.log(`Adding ${value} marbles to our count: ${count}. Now we gots: ${totalSoFar}`);
  /*
     Fist pass: Adding 5 marbles to our count: 3. Now we gots: 8
     Second pass: Adding 1 marbles to our count: 8. Now we gots: 9
  */

  // Every time we count, we have to return
  return totalSoFar;
});

console.log(`Marble count: ${marbleCount}`);
