let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let cont in car) {
    console.log(cont + ': ' + car[cont])
  }