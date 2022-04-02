////////////
// const objEnclosed = {
//   name: 'Vasya',
//   tel: {
//     home: 12345,
//     work: 67890,
//   },
// };

// console.log(Object.values(objEnclosed));

const testArr = [
  { a: '1--  aaaa', b: 'bbb  bb', z: 1212122 },
  { a: '2--  asas', b: 'bb', z: 5555552 },
  { a: '3-- dfdf', b: 'bb    bb', z: 6666666666 },
  { a: '4-- x', b: 'bbbbb', z: 7777777777777 },
  { a: '5-- bbbbbbbbbbbb', b: '+++bbb', z: 88 },
  { a: '6-- xcxvv', b: 'bbbbbbnbnbn', z: 9900 },
];

// testArr.forEach(({ a, b, z }, i) => {
//   //   console.log(item.a, item.b, item.z);
//   console.log(`1 = ${a}, 2 = ${b}, 3 = ${z}, index = ${i}`);
// });

testArr.reduce((first, second, i) => {
  console.log(first);
  console.log(second);
  console.log(i);
  console.log(first.b.toUpperCase());
  return second;
  //   console.log(`1 = ${a}, 2 = ${b}, 3 = ${z}, index = ${i}`);
});
