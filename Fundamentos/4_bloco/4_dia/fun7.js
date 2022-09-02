function verifyWord (word, ending) {
    let reverseWord = word.split('').reverse()
    let end = ending.split('').reverse()
    let result;
    for (let cont in ending) {
        if (reverseWord[cont] == end[cont]) {
            result = true
        } else {
            result = false
        }
    }
    return result
}


console.log(verifyWord('leonardo', 'sardo'))