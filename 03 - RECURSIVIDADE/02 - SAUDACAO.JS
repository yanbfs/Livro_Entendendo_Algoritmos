/**
 * Exibe uma mensagem no console
 * @param {string} nome Nome
 */
function saudacao2(nome) {
    console.log("como você está, " + nome + "?");
}

/*** Exibe uma mensagem no console***/
function tchau() {
    console.log("ok, tchau!");
}

/**
 * Exibe uma mensagem no console
 * @param {string} nome Nome
 */
function saudacao(nome) {
    console.log("olá, " + nome + "!");
    saudacao2(nome);
    console.log("preparando para dizer tchau...");
    tchau();
}

saudacao("Yan");