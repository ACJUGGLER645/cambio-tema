# Selector de Temas Interactivo

Este proyecto es una web pensada para practicar cómo funcionan **HTML, CSS y JavaScript** planteada en la clase de programacion III en la Escuela Tecnologica Instituto Tecnico Central. La idea es sencilla: el usuario puede cambiar el tema de la página (claro, oscuro o personalizado) con un clic, ver cuántas veces ha cambiado de tema y, además, generar frases curiosas en un área de demostración.

---

## ¿Qué hace este proyecto?

* Permite cambiar entre tres temas visuales distintos.
* Cada vez que cambias de tema, se actualiza un contador.
* Tiene un botón que muestra frases curiosas escogidas al azar.
* Incluye transiciones suaves para que los cambios de estilo no sean bruscos.

---

## ¿Con qué está hecho?

* **HTML**: define la estructura de la página (títulos, botones, párrafos).
* **CSS**: se encarga de los estilos y de que cada tema tenga su propio aspecto.
* **JavaScript**: añade la lógica, como cambiar el tema, actualizar el contador o mostrar frases aleatorias.

---

## Archivos principales

* `index.html`: el esqueleto de la página.
* `style.css`: los estilos generales y la definición de los temas.
* `script.js`: la parte que hace la página interactiva.

---

## Explicación de las funciones utilizadas

En el archivo **script.js** se usaron funciones simples de JavaScript que permiten interactuar con el DOM:

1. **`querySelectorAll()`**

   * Sirve para seleccionar todos los botones de los temas.
   * Ejemplo:

     ```js
     const botonesTema = document.querySelectorAll(".theme-buttons button");
     ```

2. **`addEventListener("click", ...)`**

   * Escucha cuando el usuario hace clic en un botón.
   * Se usa para cambiar el tema o mostrar frases.
   * Ejemplo:

     ```js
     boton.addEventListener("click", () => {
         // código que cambia el tema
     });
     ```

3. **`classList.add()` y `classList.remove()`**

   * Permiten quitar y añadir clases CSS al `body` según el tema elegido.
   * Ejemplo:

     ```js
     body.classList.remove("tema-claro", "tema-oscuro", "tema-naranja");
     body.classList.add(tema);
     ```

4. **Variables y contador (`cambiosTema`)**

   * Se declara una variable que va contando cada vez que el usuario cambia de tema.
   * Ejemplo:

     ```js
     let cambiosTema = 0;
     cambiosTema++;
     contador.textContent = cambiosTema;
     ```

5. **Uso de un arreglo (`frases`) y selección aleatoria**

   * Se guardan varias frases en un arreglo.
   * Con `Math.random()` y `Math.floor()` se selecciona una al azar.
   * Ejemplo:

     ```js
     const frases = ["Frase 1", "Frase 2", "Frase 3"];
     const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
     demoArea.innerHTML = `<span>${fraseAleatoria}</span>`;
     ```

---

## Posibles actualizaciones

* Mejorar la adaptación a dispositivos móviles.
* Crear un tema automático que cambie según la hora del día.

---

**Autor:** Jhon Alejandro Correal Martinez  
**Asignatura:** Programación III  
**Programa:** Tecnología en Desarrollo de Software – Facultad de Sistemas  
**Institución:** Escuela Tecnológica Instituto Técnico Central 
