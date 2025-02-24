let amigos = [];

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

function sortear() {
    embaralhar(listaAmigos); 
    let sorteio = document.getElementById('lista-sorteio'); 

    for (let index = 0; index < listaAmigos.length; index++) {
        if (index == listaAmigos.length -1) {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[index] + ' --> ' + listaAmigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[index] + ' --> ' + listaAmigos[index+1] + '<br/>';
        }
        
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice -1]];
    }
}

function reiniciar() {
    let botaoreiniciar = document.querySelector('a');
    botaoreiniciar.innerHTML
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

    }

    