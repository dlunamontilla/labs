# Explicación del código JavaScript

## Elementos del formulario

Para el caso de este ejemplo, se capturan dos elementos HTML claves, las cuales son:

- **`#resultados`:** que es donde el usuario visualizará los resultados de sus respuestas acertadas.
- **`container`:** el contenedor de todos los `input:radio` al que le capturaremos el evento `click`.

Su estructura HTML son las que siguen a continuación:

**`#resultados`:**

```html
<span id="resultados"></span>
```

Y se captura con JavaScript de la siguiente manera:

```js
const resultados = document.querySelector("#resultados");
```

Donde `resultados` es la constante que tiene almacenado el elemento capturado mediante el selector de `id` (`#resultados`) mediante el método `querySelector` del objeto `document`.

Y **`container`:**

```html
<div class="container">
    ...
</div>
```

Que es la que contiene todos los `input:radio` con el que interactuará el usuario y se captura con JavaScript de acuerdo a la siguiente línea:

```js
const container = document.querySelector(".container");
```

## Explicando el resto del código del archivo `script.js`

Las respuestas que hemos marcado como respuestas correctas se encuentra en la siguiente línea:

```js
const correctas = [3, 1, 3, 1, 2];
```

Y las respuestas que el usuario seleccionará y que se comparará con las respuestas que hemos marcado como correctas:

```js
const opcion_elegida = [0, 0, 0, 0, 0];
```

Donde `opcion_elegida` es la respuesta elegida por el usuario.

## ¿Cómo hago que el usuario elija sus respuestas?

Para lograr que el usuario pueda elegir sus respuestas en la posición correcta del _array_ debemo sutilizar el método `splice`, pero antes, debemos haber obtenido antes, la posición de la respuesta y su valor.

Por ejemplo, veamos las siguientes líneas:

```js
function respuestas(input, respuestasElegidas) {
  const posicion = Number(input.dataset.posicion);
  const value = Number(input.value);
  respuestasElegidas.splice(posicion, 1, value);
}
```

En el ejemplo anterior tenemos la función `respuestas` que tiene dos (02) parámetros, las cuales son:

- **`input`:** que en este caso, será el elemento `input:radio` al que se le extraerán las respuestas.
- **`respuestasElegidas`:** es el parámetro de tipo _array_ que tendrá las respuestas elegidas por el usuario.

En la línea:

```js
const posicion = Number(input.dataset.posicion);
```

Se captura la posición de la respuesta dentro del _array_. En esta línea el objeto primitivo envolvente `Number` que tiene como argumento un número encerrado entre comillas ("") nos permite devolver un número. Mientras que en la línea:

```js
  const value = Number(input.value);
```

Se obtiene la respuesta en formato numérico.

Una vez que se haya obtenido los valores almacenamos la respuestas en el _array_ `respuestasElegidas`:

```js
respuestasElegidas.splice(posicion, 1, value);
```

Donde `splice` es un método de _array_ (`Array.prototype.splice`) que nos permite eliminar, agregar o reemplazar elementos dentro de `respuestasElegidas`, siendo el primer argumento la posición elegida para el _Array_ y segundo argumento, el número de elementos a eliminar o reemplazar (en este caso, reemplazar) y `value` el valor que sustituiremos por cero (`0`) que es su valor por defecto.

## ¿Cómo corregir las respuestas del usuario?

Si desea que su aplicación devuelva un número de respuestas acertadas o correctas debe utilizar las siguientes líneas que serán explicadas:

```js
function corregir(a, b) {
    let acertadas = 0;

    a.forEach((respuesta, posicion) => {
        if (respuesta === b[posicion]) {
            ++acertadas;
        }
    });

    return acertadas;
}
```

Donde el primer parámetro `a` es el _array_ con las respuestas que elegimos como correctas y `b` las respuestas seleccionadas por el usuario.

La línea:

```js
let acertadas = 0;
```

Será el número de respuestas correctas elegidas por el usuario, que se obtendrá mediante las coincidencias de las respuestas elegidas por el usuario con las respuestas correctas.

Lo anteriormente descrito se obtiene mediante la iteración de los elementos del _array_.

Para ello, iteramos el _array_ de respuestas correctas `a` y las comparamos con `b` de acuerdo a su posición:

```js
a.forEach((respuesta, posicion) => {
    if (respuesta === b[posicion]) {
        ++acertadas
    }
});
```

Y finalmente, lo retornamos:

```js
...
return acertadas;
```
