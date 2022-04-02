const btnReadMore = document.querySelector('.btn__readmore');
const modal__readmore = document.querySelector('.modal__readmore');

btnReadMore.addEventListener('click', toggleModal);

function toggleModal() {
  modal__readmore.classList.toggle('is-show');
}
