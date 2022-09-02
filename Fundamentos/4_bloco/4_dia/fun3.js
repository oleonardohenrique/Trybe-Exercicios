function higherIndex(numbers) {
    let indiceMenor = 0
    for (let cont = 1; cont < numbers.length; cont += 1) {
        if (numbers[indiceMenor] > numbers[cont]) {
            indiceMenor = cont
        } 
    }
    return indiceMenor
}

let test = [2, 4, 6, 7, 10, 0, -3]; 

console.log(higherIndex(test))