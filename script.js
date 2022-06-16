// Elementos del formulario
const resultados = document.querySelector("#resultados");
const container = document.querySelector(".container");

/**
 * @type { Array<number> } Respuestas correctas.
 */
const correctas = [3, 1, 3, 1, 2];

/**
 * @type { Array<number> } Respuestas elegidas.
 */
const opcion_elegida = [0, 0, 0, 0, 0];

/**
 * Esta función devuelve las respuestas seleccionadas.
 * @param { HTMLInputElement } input Elemento input.
 * @param { Array<number> } respuestasElegidas Respuestas seleccionadas 
 * por el usuario.
 * @returns { void }
 */
function respuestas(input, respuestasElegidas) {
  const posicion = Number(input.dataset.posicion);
  const value = Number(input.value);
  respuestasElegidas.splice(posicion, 1, value);
}

/**
 * Devuelve la cantidad de respuestas acertadas.
 * 
 * @param { Array<number> } a Respuestas correctas
 * @param { Array<number> } b Respuestas elegidas
 * @returns { number }
 */
function corregir(a, b) {
  let acertadas = 0;

  a.forEach((respuesta, posicion) => {
    if (respuesta === b[posicion]) {
      ++acertadas;
    }
  });

  return acertadas;
}

if (container) container.onclick = (e) => {
  const element = e.target;

  if (resultados) {
    if (element.tagName === "INPUT") {
      respuestas(element, opcion_elegida);
    }
  }
}

const boton = document.querySelector("#btn-corregir");

if (boton) {
  boton.onclick = () => {
    const respuestasCorrectas = corregir(correctas, opcion_elegida);

    if (resultados) {
      resultados.textContent = respuestasCorrectas;
    }
  }
}