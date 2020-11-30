let totalPrise;

const country = prompt('Введите название Вашей страны');

const countryName = country !== null ? country.toLowerCase() : '';

switch (countryName) {
  case 'китай': {
    totalPrice = 100;
    alert(`Доставка в ${country} будет стоить ${totalPrice} кредитов`);
    break;
  }

  case 'чили': {
    totalPrice = 250;
    alert(`Доставка в ${country} будет стоить ${totalPrice} кредитов`);
    break;
  }

  case 'австралия': {
    totalPrice = 170;
    alert(`Доставка в ${country} будет стоить ${totalPrice} кредитов`);
    break;
  }

  case 'индия': {
    totalPrice = 80;
    alert(`Доставка в ${country} будет стоить ${totalPrice} кредитов`);
    break;
  }

  case 'ямайка': {
    totalPrice = 120;
    alert(`Доставка в ${country} будет стоить ${totalPrice} кредитов`);
    break;
  }

  default:
    alert('В Вашей стране доставка не доступна');
}
