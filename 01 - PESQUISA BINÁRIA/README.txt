Documentação para a Função de Pesquisa Binária

Descrição
A função pesquisa_binaria implementa o algoritmo de pesquisa binária em uma lista ordenada. Este 
algoritmo é eficiente para encontrar a posição de um item específico em uma lista ordenada.

Parâmetros
    • lista: Um array ordenado contendo os elementos a serem pesquisados.
    • item: O elemento a ser localizado na lista.

Retorno
    • Se o item for encontrado na lista, a função retorna uma mensagem indicando a posição do 
    item na lista, no formato: "O item está na posição [posição] da lista".
    • Se o item não for encontrado na lista, a função retorna a mensagem "O item pesquisado não 
    está na lista".

Algoritmo
1. Inicializa os índices baixo e alto representando a extremidade inferior e superior da sublista a ser considerada.
2. Entra em um loop enquanto o índice baixo for menor ou igual ao índice alto.
3. Calcula o índice do meio da sublista utilizando a fórmula: meio = Math.floor((baixo + alto) / 2).
4. Obtém o valor na posição do meio da sublista (chamado de chute).
5. Compara o chute com o item:
    • Se chute for igual a item, retorna a mensagem indicando a posição do item na lista.
    • Se chute for maior que item, ajusta o índice alto para a sublista à esquerda.
    • Se chute for menor que item, ajusta o índice baixo para a sublista à direita.
6. Repete o processo até que o item seja encontrado ou a sublista seja reduzida a zero.
7. Se o item não for encontrado no loop, retorna a mensagem indicando que o item não está na lista.

Exemplo de Uso:
    // Lista de exemplo
    const minha_lista = [2, 4, 5, 6, 7, 8, 9, 1, 11, 12, 13, 15, 16, 18, 20, 21, 22, 23, 24, 26, 27, 30, 31, 32, 33, 36, 37, 38, 39, 40];

    // Chamada da função e impressão do resultado no console
    console.log(pesquisa_binaria(minha_lista, 20));

Observações
    • Certifique-se de que a lista esteja ordenada antes de usar a pesquisa binária, pois este algoritmo assume que a lista está ordenada.
    • A função utiliza uma abordagem iterativa para melhorar a eficiência e evitar chamadas recursivas.