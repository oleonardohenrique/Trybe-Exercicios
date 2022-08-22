let maiorPrimo = 0;

for (let dividendo = 2; dividendo <= 50; dividendo += 1) {
    let primo = true;
    for (let divisor = 2; divisor < dividendo; divisor += 1) {
        if (dividendo % divisor == 0) {
            primo = false;
        }
    }
    if (primo) {
        maiorPrimo = dividendo;
    }
}
console.log(maiorPrimo)