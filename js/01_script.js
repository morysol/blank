// -----------------------------------------
// обработка покупок в  магазине

let balance = 10000;
const payment = 2000;

const errorMsg = 'На счету недостаточно средств для проведения операции';
const finalMsg = 'Опреация завершена';

let balanceTryMsg = `Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету.`;

let balanceOkMsg = `На счету осталось ${balance - payment} кредитов.`;

let userMsg = '';

console.log(balanceTryMsg);

if (balance >= payment) {
  balance -= payment;
  userMsg = balanceOkMsg;
} else {
  userMsg = errorMsg;
}

console.log(userMsg);
console.log(finalMsg);

// сумма с учетом скидки
