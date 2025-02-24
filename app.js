let amigosSecretos = [];



function adicionarAmigo(){

    
    let digito = document.getElementById("amigo");
    let nomeDoAmigoSecreto = digito.value.trim();
    
    
    if (nomeDoAmigoSecreto == '') {
        alert("Por favor, digite um nome válido!");
        return;
    }

    
    amigosSecretos.push(nomeDoAmigoSecreto);

    digito.value = '';

    limparMenu();
}

function sortearAmigo(){
    if (amigosSecretos.length == 0) {
        alert("Por favor, inserir nomes para iniciar o sorteio.");
        return;
    }

    let sorteador = Math.floor(Math.random() * amigosSecretos.length);
    let nomePessoaSorteada = amigosSecretos[sorteador];
    let resultadoDoAmigoSecreto = document.getElementById("resultado");
    resultadoDoAmigoSecreto.innerHTML = "Seu amigo secreto é " + nomePessoaSorteada;
}