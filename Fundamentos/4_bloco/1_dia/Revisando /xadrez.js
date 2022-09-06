let peça = 'RaiNha';

switch(peça.toLocaleLowerCase()) {
    case 'peão':
        console.log('Frente')
        break;
    case 'cavalo':
        console.log('L')
        break;
    case 'torre':
        console.log('Linha reta')
        break;
    case 'bispo':
        console.log('Diagonal')
        break;
    case 'rainha':
        console.log('Todas as direções ilimitadas')
        break;
    case 'rei':
        console.log('Todas as direções, apenas uma casa')
        break;
    default:
        console.log('Ops, acho que você errou o nome da peça!')
}