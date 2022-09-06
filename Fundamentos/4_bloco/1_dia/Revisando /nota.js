const nota = 100;
let notaFinal;

if (nota < 0 || nota > 100) {
    console.log('ERRO')
} else if (nota >= 90) {
    notaFinal = 'A'
} else if (nota >= 80) {
    notaFinal = 'B'
} else if (nota >= 70) {
    notaFinal = 'C'
} else if (nota >= 60) {
    notaFinal = 'D'
} else if (nota >= 50) {
    notaFinal = 'E'
} else {
    notaFinal = 'F'
}

console.log('Sua nota final foi: ' + notaFinal)