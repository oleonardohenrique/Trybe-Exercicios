let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (let cont in info) {
    if (info.recorrente === 'Sim' && info2.recorrente === 'Sim' && cont == 'recorrente') {
        console.log('Ambos recorrentes')
    } else {
        console.log(info[cont] + ' e ' + info2[cont])
    }
}
