const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let answer;
do {
  answer = prompt('Какое количество дроидов Вы хотите купить?');

  if (answer === null) {
    console.log('Отменено пользователем!');
  } else if (Number(answer) > 0) {
    totalPrice = pricePerDroid * Number(answer);
    let message =
      totalPrice > credits
        ? 'Недостаточно средств на счету!'
        : `Вы купили ${answer} дроидов, на счету осталось ${
            credits - totalPrice
          } кредитов.`;
    alert(message);
  } else {
    answer = '';
  }
} while (answer === '');
