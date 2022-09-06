let array = ['java', 'javascript', 'python', 'html', 'css'];
let aux = ''
let maior = '';
let menor = '';

for (let index = 0; index < array.length; index += 1) {
    aux = array[index]
    if (aux.length > maior.length) {
        maior = array[index]
    }
    if (menor.length == 0 || menor.length > aux.length) {
        menor = array[index]
    }
}

console.log(maior)
console.log(menor)