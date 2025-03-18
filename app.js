// Array para armazenar os nomes dos amigos
const amigos = [];

// Adiciona um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (!nome) {
        alert('Digite um nome válido!');
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = '';
    input.focus();
}

// Atualiza a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Sorteia um amigo aleatoriamente e exibe o resultado
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear!');
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigos[indice]}</strong></li>`;
}


