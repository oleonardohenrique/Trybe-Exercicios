function verificaPal√≠ndrome(string) {
    let reverseString = string.split('').reverse().join('')
    if (string === reverseString) {
        return true
    } else {
        return false
    }
}




console.log(verificaPal√≠ndrome('Desenvolvimento'))





