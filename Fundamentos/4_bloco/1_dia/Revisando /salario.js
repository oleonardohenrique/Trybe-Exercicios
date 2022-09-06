let salBruto = 3000;

if (salBruto <= 1556.94) {
    INSS = salBruto * 0.08
    salINSS = salBruto - INSS
} else if (salBruto >= 1556.95 && salBruto <= 2594.92) {
    INSS = salBruto * 0.09
    salINSS = salBruto - INSS
} else if (salBruto >= 2594.93 && salBruto <= 5189.82) {
    INSS = salBruto * 0.11
    salINSS = salBruto - INSS
} else {
    INSS = 570.88
    salINSS = salBruto - INSS
}

if (salINSS <= 1903.98) {
    valorIR = "Isento"
} else if (salINSS >= 1903.99 && salINSS <= 2826.65) {
    valorIR = (salINSS * 0.075) - 142.80 
} else if (salINSS >= 2826.66 && salINSS <= 3751.05) {
    valorIR = (salINSS * 0.15) - 354.80 
} else if (salINSS >= 3751.06 && salINSS <= 4664.68) {
    valorIR = (salINSS * 0.225) - 636.13
} else {
    valorIR = (salINSS * 0.275) - 869.36
}

console.log(salINSS - valorIR)