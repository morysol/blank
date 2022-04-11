// function foo() {
//   console.log(this);
// }

// foo();

// const petya = {
//   username: 'Petya',
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'

function showThis() {
  console.log('this in showThis: ', this);
}

const showThisArrow = () => {
  console.log('this in showThis: ', this);
};

showThis();
showThisArrow();

const user = {
  username: 'Mango',
};

user.showContext = showThis;
user.showContextArrow = showThisArrow;
// console.log(user);
// console.log(user.showContext);
user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}
user.showContextArrow(); // undefined
