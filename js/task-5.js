let totalPrise;

let country = prompt('Введите название Вашей страны');

switch (country) {
  case 'Китай': {
    country.toLowerCase() === 'Китай'.toLowerCase();
    let totalPrice = 100;
    alert(`Доставка в ${country} будет стоить ${totalPrice} кредитов`);
    break;
  }

  case 'Чили': {
    country.toLowerCase() === 'Чили'.toLowerCase();
    let totalPrice = 250;
    alert(`Доставка в ${country} будет стоить ${totalPrice} кредитов`);
    break;
  }

  case 'Австралия': {
    country.toLowerCase() === 'Австралия'.toLowerCase();
    let totalPrice = 170;
    alert(`Доставка в ${country} будет стоить ${totalPrice} кредитов`);
    break;
  }

  case 'Индия': {
    country.toLowerCase() === 'Индия'.toLowerCase();
    let totalPrice = 80;
    alert(`Доставка в ${country} будет стоить ${totalPrice} кредитов`);
    break;
  }

  case 'Ямайка': {
    country.toLowerCase() === 'Индия'.toLowerCase();
    let totalPrice = 120;
    alert(`Доставка в ${country} будет стоить ${totalPrice} кредитов`);
    break;
  }

  default:
    alert('В Вашей стране доставка не доступна');
}
