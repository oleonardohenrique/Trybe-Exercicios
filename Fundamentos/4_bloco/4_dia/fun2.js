function higherIndex(numbers) {
    let indiceMaior = 0
    for (let cont = 1; cont < numbers.length; cont += 1) {
        if (numbers[indiceMaior] < numbers[cont]) {
            indiceMaior = cont
        } 
    }
    return indiceMaior
}

let test = [2, 3, 6, 7, 10, 1]; 

console.log(higherIndex(test))