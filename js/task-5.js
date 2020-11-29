let totalPrise;

let country = prompt('Введите название Вашей страны');

switch (country.toLowerCase()) {
  case 'китай': {
    let totalPrice = 100;
    alert(`Доставка в ${country} будет стоить ${totalPrice} кредитов`);
    break;
  }

  case 'чили': {
    let totalPrice = 250;
    alert(`Доставка в ${country} будет стоить ${totalPrice} кредитов`);
    break;
  }

  case 'австралия': {
    let totalPrice = 170;
    alert(`Доставка в ${country} будет стоить ${totalPrice} кредитов`);
    break;
  }

  case 'индия': {
    let totalPrice = 80;
    alert(`Доставка в ${country} будет стоить ${totalPrice} кредитов`);
    break;
  }

  case 'ямайка': {
    let totalPrice = 120;
    alert(`Доставка в ${country} будет стоить ${totalPrice} кредитов`);
    break;
  }

  default:
    alert('В Вашей стране доставка не доступна');
}
