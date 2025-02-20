let amigos = []

function adicionar() {
    let nome = document.getElementById('nome-amigo');
    let listaNomes = document.getElementById('lista-amigos');
    listaAmigos.push(nome.value);

    if (listaNomes.textContent === '' || listaNomes.textContent === null) {
        listaNomes.textContent = nome.value;
    } else {
        listaNomes.textContent = listaNomes.textContent + ', ' + nome.value;
    }

    
    nome.value = '';
    atualizarSorteio()
    atualizarLista();
} 