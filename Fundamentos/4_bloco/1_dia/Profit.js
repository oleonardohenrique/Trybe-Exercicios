const valorCusto = 2.50;
const valorVenda = 5;
let lucro;

if (valorCusto === 0) {
    console.log("Erro, valor invalido")
} else {
    let impostoSobreOCusto = valorVenda * 0.2
    let valorCustoTotal = valorCusto + impostoSobreOCusto
    lucro = (valorVenda - valorCustoTotal) * 1000
}
console.log(lucro)
