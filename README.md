# Explicación del código fuente

Ejemplo de desestructuración de un objeto:

```js
const object = {
    name: "David E",
    lastname: "Luna M",
    age: 37
};

const { name, lastname, age } = object;
```

## Explicando el código HTML

La estructura básica del código HTML es la siguiente:

```html
<!DOCTYPE html>
<html lang="es-CO">

<head>
    ...
</head>

<body>
    <main>

    </main>
</body>

</html>
```

Donde `<!DOCTYPE html>` le indica al navegador que la versión **HTML** a utilizar es **HTML 5**.

El contenedor principal son las etiquetas `<html></html>` donde su parámetro `lang="es-CO"` le indica al navegador el idioma y el país mediante su **ISO**, es decir:

- **es**: es el idioma del documento.
- **CO:** es el prefijo del país. En este caso, Colombia.

Por lo tanto, cuando tenemos una estructura así:

```html
...
<html lang="es-CO">
    ...
</html>
```

Le estamos indicando al navegador que nuestro documento HTML es en español y el país es Colombia (CO).

### Estructura dentro del contenedor `<html lang="es-CO">...</html>`

Las etiquetas `<head>...</head> contiene información no visibles para el usuario, pero sí para los motores de búsqueda y el navegador web que renderiza el documento **HTML**. Por ejemplo:

```html

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estructura HTML</title>
</head>
```

Donde:

- **`<meta charset="UTF-8">`:** nos permite definir el tipo de codificación de caracteres que debe utilizar el navegador. En este caso, **UTF-8**, siendo la más utilizada en la actualidad en el desarrollo Web. Si desea profundizar más sobre codificiación de caracteres, las invito a leer [el contenido de este enlace][codificacion].
- **`<meta http-equiv="X-UA-Compatible" content="IE=edge">`:** este permite establecer el modo de compatibilidad de nuestra web con navegadores de Microsoft. Sin embargo, ya no es necesario su uso.
- Si queremos que nuestro sitio Web se pueda visualizar en los dispositivos móviles debemos utilizar la siguiente _meta etiqueta_:

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

    Donde `name="viewport` es el contenido visible de nuestro documento web y `content="width=device-width, initial-scale=1.0"` hace coincidir nuestro documento con la anchura del dispositivo (`width=device-width`) a la vez que mantiene una escala inicial igual al dispositivo móvil (`initial-scale=1.0`).

[codificacion]:https://es.wikipedia.org/wiki/Codificaci%C3%B3n_de_caracteres "Fuente: Wikipedia"
