const jogar = (jogador, opcaoJogador) => {
    let opcaoComputador = Math.floor(Math.random()*3)+1;

    definirOpcoes(`Jogador ${jogador}`, opcaoJogador);
    definirOpcoes(`Computador`, opcaoComputador);

    compararOpcoes(opcaoJogador, opcaoComputador);
}

const definirOpcoes = (jogador, opcao) => {
    switch (opcao) {
        case 1:
            console.log(`${jogador} selecionou pedra`);
            break;
        case 2:
            console.log(`${jogador} selecionou papel`);
            break;           
        case 3:
            console.log(`${jogador} selecionou tesoura`);
            break;
    }
}

const compararOpcoes = (opcaoJogador, opcaoComputador) => {
    if (opcaoJogador === opcaoComputador) {
        console.log("EMPATE");
    } else if (
        (opcaoJogador === 1 && opcaoComputador === 3) || 
        (opcaoJogador === 2 && opcaoComputador === 1) ||
        (opcaoJogador === 3 && opcaoComputador === 2)
    ) {
        console.log(`Jogador venceu`)
    } else {
        console.log("COMP venceu")
    }
}

var nome = prompt("Digite seu nome: ");
console.log(nome);

var opcao = prompt(`
    Selecione uma opcao: \n
    1- Pedra\n
    2- Papel\n
    3- Tesoura
    `);

opcao = parseInt(opcao);
jogar(nome, opcao);