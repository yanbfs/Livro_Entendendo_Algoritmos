01 - CONTAGEM REGRESSIVA (RECURSIVIDADE).JS
Esta função realiza uma contagem regressiva a partir de um número fornecido até zero.

Parâmetros
'i' (number): O número a partir do qual a contagem regressiva deve começar.

Comportamento
1. A função 'contagemRegressiva' recebe um número inteiro 'i'.
2. Exibe o valor de 'i' no console.
3. Verifica se 'i' é menor ou igual a zero (caso base):
    - Se for verdadeiro, a função retorna imediatamente.
4. Caso contrário, a função chama a si mesma recursivamente com 'i' diminuído em uma unidade.

Exemplo de Uso:
    contagemRegressiva(5);

Este exemplo chama a função contagemRegressiva com o argumento 5, resultando em uma contagem 
regressiva no console começando de 5 e terminando em 0.



02 - SAUDACAO.JS
Este algoritmo demonstra a interação básica com funções em JavaScript para exibir mensagens de 
saudação e despedida no console do navegador. Ele contém três funções principais: saudacao2(), 
tchau() e saudacao(), cada uma com sua função específica na sequência de saudação e despedida.

Funções:
1. 'saudacao2(nome)'
    Descrição: Esta função exibe uma mensagem de perguntando como a pessoa está no console, utilizando 
    o nome fornecido como parâmetro.

    Parâmetros:
        • 'nome': Uma string representando o nome da pessoa a ser saudada.

    Exemplo de Uso:
        saudacao2("Yan");

    Saída no console:
        "como você está, Yan?"

2. tchau()
    Descrição: Esta função exibe uma mensagem de despedida no console.
    Parâmetros: Nenhum.

    Exemplo de Uso:
        tchau();

    Saída no console:
        ok, tchau!

3. saudacao(nome)
    Descrição: Esta função executa uma sequência de saudação, que inclui exibir uma saudação no 
    console, perguntar como a pessoa está chamando a função saudacao2(), exibir uma mensagem 
    preparatória para dizer tchau e, finalmente, chamar a função tchau() para se despedir.

    Parâmetros:
        • "nome": Uma string representando o nome da pessoa a ser saudada.

    Exemplo de Uso:
        saudacao("Yan");

    Saída no console:
        olá, Yan!
        como você está, Yan?
        preparando para dizer tchau...
        ok, tchau!



03 - FATORIAL.JS
    Este algoritmo calcula o fatorial de um número dado utilizando o conceito de recursividade. O fatorial 
    de um número x é o produto de todos os números inteiros positivos menores ou iguais a x.

Função:
1. fatorial(x)
    Descrição: Esta função calcula o fatorial do número fornecido.
    Parâmetros:
        • x: Um número inteiro para o qual se deseja calcular o fatorial.
    Retorno:
        • Um número representando o fatorial de x.
    Exemplo de Uso:
        console.log(fatorial(5)); 
    
    Saída no console:
        Saída: 120
    
    Este exemplo calcula o fatorial de 5, que é 5 x 4 x 3 x 2 x 1 = 120.