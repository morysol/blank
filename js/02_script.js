/* ----------------------------------
до 100 не партнер, скидка 0%
от 100 до 1000 бронзовый партнер, скидка 2%
от 100 до 5000 серебряный партнер, скидка 5%
более 5000 золотой партнер, скидка 10%

Оформляем заказ на сумму ййй со скидкой ццц%.
*/

const totalSpent = 2000;
let payment = 500;
let discount = 0;

const partnerMsgNot = 'У вас еще нет партнерской скидки';
const partnerMsgBronze = 'Бронзовый партнер, скидка 2%';
const partnerMsgSilver = 'Серебряный партнер, скидка 5%';
const partnerMsgGold = 'Золотой партнер, скидка 10%';

let partnerMsg = partnerMsgNot;

if (totalSpent < 100) {
  discount = 0;
  partnerMsg = partnerMsgNot;
} else if (totalSpent >= 100 && totalSpent < 1000) {
  discount = 0.02;
  partnerMsg = partnerMsgBronze;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  discount = 0.05;
  partnerMsg = partnerMsgSilver;
} else {
  discount = 0.1;
  partnerMsg = partnerMsgGold;
}

let orderMsg = `Оформляем заказ на сумму ${totalSpent + payment} со скидкой ${discount * 100}`;
console.log(orderMsg);
console.log(partnerMsg);
