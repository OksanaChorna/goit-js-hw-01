const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let answer = prompt("Какое количество дроидов Вы хотите купить?");

if (answer === null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = pricePerDroid * Number(answer);
   let message = totalPrice > credits
        ? 'Недостаточно средств на счету!'
        : `Вы купили ${answer} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
    alert(message);
}


// if (answer === null) {
//     console.log('Отменено пользователем!');
// } else {
//     let totalPrice = pricePerDroid * Number(answer);
//     let canBuy = credits > totalPrice; 

//     let message;

//     if (canBuy) {
//         message = `Вы купили ${answer} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
//     } else {
//         message = 'Недостаточно средств на счету!'
//     }

//     alert(message);
// }
