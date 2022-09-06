let verificar = 37;
let divisores = 1;

for (let index = 2; index <= verificar; index += 1) {
    if (index % verificar == 0) {
        divisores += 1
    }
}
if (divisores == 2) {
    console.log(`${verificar} é um número primo`)
} else {
    console.log(`${verificar} Não é um número primo`)
}