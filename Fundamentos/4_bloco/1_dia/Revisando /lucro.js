const custoProduto = 2.50;
const valorVenda = 5.00;
let valorCustoTotal;
let lucro;

if (custoProduto < 0 || valorVenda < 0) {
    console.log('Erro, custo do produto e/ou valor de venda não pode ser menor que 0')
} else {
    let impostoSobreOCusto = custoProduto * 0.2
    valorCustoTotal = custoProduto + impostoSobreOCusto
    lucro = valorVenda - valorCustoTotal
}

console.log(lucro)