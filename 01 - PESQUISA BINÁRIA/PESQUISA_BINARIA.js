// Função de pesquisa binária
function pesquisa_binaria(lista, item) {
    // Inicializa os índices baixo e alto
    let baixo = 0;
    let alto = lista.length - 1;

    // Loop enquanto o índice baixo for menor ou igual ao índice alto
    while (baixo <= alto) {
        // Calcula o índice do meio da sublista
        let meio = Math.floor((baixo + alto) / 2);

        // Obtém o valor na posição do meio da sublista (chute)
        let chute = lista[meio];

        // Verifica se o chute é igual ao item procurado
        if (chute == item) {
            // Retorna a mensagem indicando a posição do item na lista
            return `O item está na posição ${meio + 1} da lista`;
        } else if (chute > item) {
            // Se o chute for maior que o item, ajusta o índice alto para a sublista à esquerda
            alto = meio - 1;
        } else if (chute < item) {
            // Se o chute for menor que o item, ajusta o índice baixo para a sublista à direita
            baixo = meio + 1;
        }
    }

    // Se o item não for encontrado no loop, retorna a mensagem indicando que o item não está na lista
    return "O item pesquisado não está na lista";
}

// Lista de exemplo
minha_lista = [2,4,5,6,7,8,9,1,11,12,13,15,16,18,20,21,22,23,24,26,27,30,31,32,33,36,37,38,39,40];

// Chamada da função e impressão do resultado no console
console.log(pesquisa_binaria(minha_lista, 20));