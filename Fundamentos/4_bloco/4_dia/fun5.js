function maisRepete(repete) {
    let repet = 0
    let verifica = 0
    for (let cont in repete) {
        if (repete[repet] === repete[cont]) {
            verifica = repete[repet]
        } else {
            repet = cont
        }
    }
    return verifica
}





let inteiros = [2, 3, 2, 5, 8, 2, 3];

console.log(maisRepete(inteiros))