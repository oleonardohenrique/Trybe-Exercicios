function somaNatural(n) {
    let soma = 0
    for (let cont = 1; cont < n; cont += 1) {
        soma += cont
    }
    return soma + n
}



let number = 10;
console.log(somaNatural(number));