function higherWord(words) {
    let higherName = words[0]
    for (let index in words) {
        if (words[higherName.length] < words[index.length]) {
            higherName = words[index]
        }
    }
    return higherName
}

let test = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

console.log(higherWord(test))