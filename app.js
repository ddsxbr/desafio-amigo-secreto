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



