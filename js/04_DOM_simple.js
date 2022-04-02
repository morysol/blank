const btnRnd = document.querySelector('button[color-rnd]');
const testJs = document.querySelector('.test_js');
const colorValue = document.querySelector('input[color_value]');

btnRnd.addEventListener('click', () => {
  // btnRnd.style.backgroundColor = 'teal';
  testJs.setAttribute('style', `background-color: ${colorValue.value};`);
});

const txt = document.querySelector('.test__done');
txt.textContent = txt.textContent.concat(' the test HAS DONE! ');
// console.log(txt.textContent);
