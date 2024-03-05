Documentação para função buscarMenor()

Descrição
A função buscarMenor é responsável por encontrar o índice do menor elemento em um 
array. Essa funcionalidade é frequentemente utilizada em algoritmos de ordenação e seleção.

Parâmetros
    • arr: Um array contendo os elementos a serem comparados para encontrar o menor.
    
Retorno
    • A função retorna o índice do menor elemento encontrado no array.

Algoritmo
    1. Inicializa a variável menor com o primeiro elemento do array (arr[0]).
    2. Inicializa a variável menor_indice com 0.
    3. Inicia um loop para percorrer o restante do array, começando a partir do segundo 
    elemento (i = 1).
    4. Verifica se o elemento atual (arr[i]) é menor que o menor elemento encontrado até 
    agora (menor).
        • Se for menor, atualiza o valor de menor com o elemento atual e atualiza menor_indice 
        com o índice atual (i).
    5. Repete o processo até percorrer todo o array.
    6. Retorna o valor de menor_indice, que é o índice do menor elemento encontrado.

Exemplo de Uso
// Exemplo de uso da função buscarMenor
const arrayExemplo = [7, 6, 4, 15, 39, 27, 12, 1, 18, 16, 22, 8, 5, 37, 40, 31, 24, 20, 2, 30, 36, 23, 32, 21, 11, 26, 13, 38, 9, 33];
const indiceMenor = buscarMenor(arrayExemplo);
console.log(`O menor elemento está no índice ${indiceMenor}`);

Documentação para a Função de ordenacaoPorSelecao()

Descrição
A função ordenacaoPorSelecao utiliza o algoritmo de ordenação por seleção para ordenar os 
elementos de um array.

Parâmetros
    • arr: Um array contendo os elementos a serem ordenados.

Retorno
    • A função retorna um novo array contendo os elementos ordenados em ordem crescente.

Algoritmo
    1. Inicializa um novo array vazio chamado novoArr para armazenar os elementos ordenados.
    2. Entra em um loop enquanto o array original ainda tiver elementos (usando while (arr.length > 0)).
    3. Chama a função buscarMenor para encontrar o menor elemento no array atual.
    4. Remove o menor elemento do array original utilizando arr.splice(menor, 1), e o 
    adiciona ao novo array utilizando novoArr.push.
    5. Repete o processo até que todos os elementos sejam removidos do array original.
    6. Retorna o novo array, que está ordenado.

Exemplo de Uso
// Exemplo de uso da função ordenacaoPorSelecao
const arrayDesordenado = [7, 6, 4, 15, 39, 27, 12, 1, 18, 16, 22, 8, 5, 37, 40, 31, 24, 20, 2, 30, 36, 23, 32, 21, 11, 26, 13, 38, 9, 33];
const arrayOrdenado = ordenacaoPorSelecao(arrayDesordenado);
console.log('Array Ordenado:', arrayOrdenado);

Observações
    • Este é um algoritmo de ordenação simples, adequado para arrays de tamanho pequeno a médio.
    • Há algoritmos mais eficientes para grandes conjuntos de dados, como Merge Sort e Quick Sort.

    Sobre o trecho: novoArr.push(arr.splice(menor, 1)[0]);
    O trecho de código faz parte da função ordenacaoPorSelecao, que é um 
    algoritmo de ordenação por seleção. Explicando como esse trecho funciona:

    1. buscarMenor(arr): Esta função retorna o índice do menor elemento no array arr.
    2. let menor = buscarMenor(arr): Encontramos o índice do menor elemento no array atual.
    3. arr.splice(menor, 1): A função splice é usada para remover elementos do array original (arr). 
    Neste caso, ela remove um elemento na posição do menor índice encontrado. O segundo argumento (1) 
    indica que apenas um elemento deve ser removido. O método splice retorna um array contendo os elementos removidos.
    4. [0]: O índice [0] é usado para acessar o primeiro (e único) elemento do array retornado pelo splice.
    5. novoArr.push(...): Adiciona o menor elemento ao final do array novoArr. O operador push é utilizado para 
    inserir elementos no final de um array.

    Resumindo, esse trecho de código está removendo o menor elemento do array original (arr) e adicionando-o ao novo 
    array (novoArr). Isso é repetido iterativamente até que todos os elementos do array original sejam removidos e 
    adicionados ao novo array, resultando em um array ordenado em ordem crescente. Este é o princípio básico do algoritmo 
    de ordenação por seleção.