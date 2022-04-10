// const students = [
//   { name: 'Mango', courses: ['mathematics', 'physics'] },
//   { name: 'Ann', courses: ['science'] },
//   { name: 'Mango', courses: ['mathematics', 'physics'] },
//   { name: 'Bob', courses: ['science', 'mathematics', ['test1', 'test2', 'test3']] },
//   { name: 'Kiwi', courses: ['physics', 'biology'] },
// ];

// let coursesFlat = [];

// let test = 0;

// do {
//   test = coursesFlat.length;
//   coursesFlat = students.flatMap(students => students.courses);
//   console.log('  ----   ', coursesFlat);
//   //   students.courses = coursesFlat;
// } while (test !== coursesFlat.length);

// console.log(students);
// console.table(coursesFlat);
// console.table(coursesFlat.filter((course, i, array) => array.indexOf(course) === i));
// n

// Проверить тернарник в тернарнике

// -----n1---------n2--------> +infinity
//             x
//      x < n1 ? n1 : x
//      x > n2 ? n2 : x

const values = [1, 2, 3, 4, 5, 6];
// const n1 = 2;
// const n2 = 5;

// let x = 3;

function between(n1, n2, x) {
  //   return (x < n1 ? n1 : x) > n2 ? n2 : x;

  x = x < n1 ? n1 : x;
  x = x > n2 ? n2 : x;
  return x;
  //   return x < n1 ? n1 : x;
}

// values.forEach()

// console.log(between(n1, n2, x));
// console.log(between(n1, n2, 1));
// console.log(between(n1, n2, 10));

console.log(between(2, 6, 3));
console.log(between(2, 6, 1));
console.log(between(2, 6, 10));
