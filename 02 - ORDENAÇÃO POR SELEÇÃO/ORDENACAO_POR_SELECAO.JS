// Função para encontrar o índice do menor elemento em um array
function buscarMenor(arr) {
    let menor = arr[0]; // Inicializa a variável menor com o primeiro elemento do array
    let menor_indice = 0; // Inicializa o índice do menor elemento com 0

    // Loop para percorrer o restante do array
    for (let i = 1; i < arr.length; i++) {
        // Verifica se o elemento atual é menor que o menor encontrado até agora
        if (arr[i] < menor) {
            menor = arr[i]; // Atualiza o menor elemento
            menor_indice = i; // Atualiza o índice do menor elemento
        }
    }

    return menor_indice; // Retorna o índice do menor elemento
}

// Função para ordenar um array utilizando o algoritmo de ordenação por seleção
function ordenacaoPorSelecao(arr) {
    let novoArr = []; // Inicializa um novo array para armazenar os elementos ordenados

    // Loop enquanto o array original ainda tiver elementos
    while (arr.length > 0) {
        let menor = buscarMenor(arr); // Encontra o menor elemento no array atual
        novoArr.push(arr.splice(menor, 1)[0]); // Remove o menor elemento do array original e o adiciona ao novo array
    }

    return novoArr; // Retorna o array ordenado
}

// Exemplo de uso da função de ordenação por seleção
console.log(ordenacaoPorSelecao([7,6,4,15,39,27,12,1,18,16,22,8,5,37,40,31,24,20,2,30,36,23,32,21,11,26,13,38,9,33]));