/**
 * Contagem Regressiva
 * @param {number} i Número
 */
function contagemRegressiva(i) {
  console.log(i);
  // caso base
  if (i <= 0) return;
  contagemRegressiva(i - 1);
}

contagemRegressiva(5);