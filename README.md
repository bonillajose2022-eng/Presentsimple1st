# Present Simple Adventure

Juego de inglés Pre-A1/A1 para grado primero en Colombia (6–7 años). Proyecto estático: HTML5, CSS3 y JavaScript, sin instalación, cuentas, claves API, librerías externas ni backend.

## Archivos del repositorio

```text
present-simple-adventure/
├── index.html
├── style.css
├── script.js
└── README.md
```

Los tres archivos de código contienen la aplicación completa. README.md es esta guía. Las ilustraciones usan emojis y un personaje Pip construido con CSS; su apariencia puede variar entre sistemas. No se descargan imágenes ni fuentes externas.

## Abrir y publicar

Para probar localmente, extrae el ZIP y abre index.html, manteniendo los tres archivos juntos. El almacenamiento de archivos abiertos con file:// puede variar según el navegador. Para uso en clase y guardado estable, utiliza la dirección HTTPS de GitHub Pages.

1. En GitHub, crea un repositorio, por ejemplo `present-simple-adventure`.
2. Abre **Add file → Upload files**.
3. Sube `index.html`, `style.css`, `script.js` y, si quieres, este README directamente en la raíz del repositorio. No subas solo el ZIP ni dejes index.html dentro de una carpeta adicional.
4. Confirma la carga con **Commit changes** en la rama `main`.
5. Entra en **Settings → Pages**.
6. En **Build and deployment → Source**, elige **Deploy from a branch**.
7. Selecciona la rama **main** y la carpeta **/(root)**. Pulsa **Save**.
8. Espera la publicación. Abre la URL que GitHub muestre en Pages. Normalmente será `https://TU-USUARIO.github.io/present-simple-adventure/`.
9. Si hay problemas, revisa el flujo de publicación en **Actions** y comprueba los nombres de los archivos, incluyendo minúsculas. No se requieren compilación ni npm.

Fuente oficial de los pasos de publicación: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Para actualizar: reemplaza los archivos modificados, confirma los cambios y espera la siguiente publicación. Los enlaces `./style.css` y `./script.js` funcionan dentro de la ruta de un repositorio.

## Contenido y navegación

- Bienvenida con Pip y botón Play.
- Mapa con cinco mundos; completar uno desbloquea el siguiente.
- Explicación por mundo: ejemplo visual, audio, ayuda en español, cambio interactivo de ejemplos y ejercicio resuelto.
- Explorador con las diez acciones solicitadas.
- 65 ejercicios, 13 por mundo: 1 matching de tres parejas, 3 multiple choice, 3 complete the sentence, 3 sentence builder y 3 preguntas de lectura. En total hay cinco lecturas diferentes, de cinco oraciones cada una.
- Resultados con estrellas, aciertos en el primer intento y áreas que necesitan práctica.
- Recompensas: una insignia por mundo y un trofeo al completar el desafío final.
- Modo docente con objetivos, preguntas, respuestas y retroalimentación de los distractores.

El matching se realiza tocando una palabra y después una imagen, sin arrastrar ni depender del color. Cada ejercicio de matching completo cuenta como un desafío: cualquier pareja incorrecta hace que ese desafío no cuente como acierto en el primer intento.

Las lecturas incluyen preguntas de comprensión; no se pide al niño producir preguntas con “does”. La producción se concentra en afirmaciones. Se presenta `go → goes` como cambio particular, sin enseñar que todos los verbos simplemente reciben -s.

## Puntos, estrellas y errores

- Respuesta correcta sin error previo: +10 puntos.
- Correcta después de un error y su pista: +5 puntos.
- Los errores nunca restan puntos.
- Cada ID de ejercicio entrega puntos una sola vez. Repetirlo permite practicar y mejorar estrellas, sin volver a ganar monedas. Máximo inicial: 650 puntos.
- Tres estrellas: al menos 90% de desafíos correctos al primer intento; dos: al menos 70%; una: misión completada con menos de 70%.
- Se conserva la mejor cantidad de estrellas de cada mundo.

La ayuda general traducida explica cómo jugar; no revela la solución ni reduce puntos. Una respuesta incorrecta sí abre una pista de contenido y cambia la recompensa de ese ejercicio a cinco puntos. En lectura se muestra la frase que justifica la respuesta; en vocabulario, la acción correspondiente; en concordancia, la forma que necesita el sujeto; en construcción, la posición equivocada o las palabras faltantes.

## Guardado local

La clave de LocalStorage es `presentSimpleAdventure.v1`. Incluye preferencias de efectos de sonido, puntos por ID, errores previos, mundos completados y la posición dentro de cada misión. Se guarda al responder, cometer un error, avanzar o cambiar el sonido. Si cierras después de comprobar una respuesta pero antes de pulsar Next, al volver puedes comprobarla otra vez para avanzar; no vuelve a entregar puntos.

No hay servidor ni sincronización entre dispositivos. Un navegador compartido comparte también el progreso. Borrar los datos del sitio o utilizar otro navegador genera un progreso distinto. Si el almacenamiento está bloqueado o lleno, aparece un aviso y el juego sigue en memoria hasta cerrar o recargar.

**Docente → Reiniciar progreso** solicita confirmación y borra el estado de este juego. **Exportar resultados** descarga un JSON con el progreso local y sin nombres. La exportación es un informe; esta versión no incluye importación.

Los datos locales son editables desde las herramientas del navegador; este sistema motiva la práctica, no sirve como evaluación segura o calificación oficial.

## Audio y accesibilidad

`Listen` e `Instructions` utilizan Web Speech API cuando existe. La voz inglesa depende del navegador y de las voces instaladas; algunos sistemas pueden necesitar conexión para sintetizarla. Si no existe la API, se muestra un aviso y todas las tareas siguen disponibles por escrito.

Sound activa o silencia los efectos de acierto y error generados con Web Audio. La pronunciación solo se inicia al tocar sus botones, de forma independiente. Home detiene la pronunciación al cambiar de pantalla.

Botones grandes, etiquetas de navegación, feedback anunciado con aria-live, foco visible, texto además de iconos y diseño adaptable. Las animaciones se desactivan cuando el sistema pide movimiento reducido. No es necesario escribir ni arrastrar. Para lectores principiantes se recomienda acompañamiento docente inicial.

## Editar o agregar ejercicios

Abre `script.js`. El banco está al principio en las constantes `ACTIONS` y `WORLDS`; la lógica empieza en `const KEY`.

Cada mundo contiene `name`, `icon`, `goal`, `example`, `es`, dos ejemplos `demo`, una lectura de referencia `story` y el array `questions`. Puedes editar los textos directamente. Las preguntas de lectura contienen su propio `passage`: si cambias una historia, actualiza esos campos y la evidencia de su feedback.

Para añadir una pregunta, duplica un objeto completo del tipo deseado dentro de `questions` y cambia todos sus campos. No dejes comas faltantes; conserva los tipos:

| Tipo | Campos propios |
| --- | --- |
| `choice` | `prompt` con `___`, `answer`, tres `options`, objeto `feedback` con una clave por cada distractor |
| `complete` | Los mismos campos que choice; se muestra como banco de palabras |
| `reading` | `passage`, `prompt`, `answer`, tres `options`, `feedback` por distractor |
| `builder` | `answer` con punto final y `words` en el orden correcto, sin punto; el juego los mezcla |
| `match` | `pairs`: objetos con `word`, `icon` y `meaning`; la aplicación mezcla ambas columnas |

Todos necesitan un `id` único y estable, `type`, `prompt`, `icon` y `skill`. Usa `skill: 'vocabulary'`, `'agreement'`, `'order'` o `'reading'` para las recomendaciones.

Ejemplo completo que puede añadirse al mundo 3:

```js
{
  id: 'w3q14',
  type: 'complete',
  prompt: 'She ___ songs.',
  icon: '🎤',
  answer: 'sings',
  options: ['sing', 'sings', 'singing'],
  feedback: {
    sing: 'Con she agregamos -s: She sings songs.',
    singing: 'Singing lleva -ing. Para esta rutina usamos sings: She sings songs.'
  },
  skill: 'agreement'
}
```

`answer` debe coincidir exactamente con una opción; cada opción incorrecta debe tener su feedback. No cambies IDs existentes para retoques de texto, porque conectan con el progreso guardado. Si cambias por completo el contenido de una pregunta, utiliza un ID nuevo o reinicia el progreso. Las barras, el mapa y el cálculo de estrellas utilizan el tamaño real del banco; actualiza los textos informativos que mencionan “65 ejercicios” si amplías el contenido. Al agregar actividades, también aumenta el máximo posible de puntos.

## Validación realizada y límites

Se ejecutaron la comprobación de sintaxis JavaScript y pruebas con Node y una simulación mínima del DOM: 65 IDs únicos, opciones y respuestas configuradas, feedback para cada distractor, solución de todos los ejercicios mediante sus controles, cinco modalidades, bloqueo inicial, desbloqueo de los cinco mundos, puntuación máxima de 650, ausencia de puntos duplicados, cinco puntos tras un error, límites de estrellas, escritura en almacenamiento y reinicio.

No se ejecutaron pruebas reales en un navegador, ni se verificaron visualmente dispositivos físicos, síntesis de voz, descargas o publicación en una cuenta GitHub. Las pruebas de DOM no equivalen a esas verificaciones. El diseño incluye reglas responsive, pero requiere la comprobación manual siguiente antes de usarlo en clase.

## Comprobación manual antes de clase

1. Abre la URL publicada en un computador y un celular. Comprueba que no hay desplazamiento horizontal, que los botones se pueden tocar y que los textos se leen sin zoom.
2. Pulsa Play. Solo debe estar disponible el mundo 1. Abre la explicación, escucha y cambia los ejemplos; abre la ayuda y prueba las diez acciones.
3. Inicia la misión. En matching forma una pareja incorrecta: debe identificar la palabra y ambas acciones. Pulsa Try again y completa las tres parejas.
4. En selección y completado prueba cada distractor antes de la respuesta correcta. Revisa que explique exactamente la elección y que la recompensa sea +5. Comprueba un ejercicio sin error para ver +10.
5. En sentence builder toca las palabras en orden incorrecto, deshaz y comprueba. La explicación debe indicar la posición o que faltan palabras. Después de Try again, las tarjetas deben volver a estar disponibles.
6. En lectura escucha el texto, responde mal y verifica que la pista cite una oración de esa misma lectura.
7. Recarga a mitad de una misión: debe conservar posición, puntos y errores anteriores. Comprueba también cerrando y abriendo de nuevo la URL publicada.
8. Termina el mundo: comprueba resultados, estrellas, insignia y acceso al siguiente. Completa los cinco mundos para ver el trofeo. Repite preguntas: los puntos no deben aumentar.
9. Silencia Sound y responde; los efectos deben dejar de sonar. Los botones Listen siguen permitiendo escuchar bajo demanda.
10. Activa movimiento reducido en tu sistema y comprueba que no aparecen animaciones ni confeti. Usa Tab y Enter para verificar foco y controles.
11. En Docente revisa respuestas y descarga resultados. Cancela primero el reinicio: nada debe borrarse. Después confírmalo: puntos y desbloqueos deben reiniciarse.
12. Prueba sin Web Speech o con almacenamiento bloqueado si tienes esa opción: el juego debe seguir y mostrar la limitación correspondiente.

No se configura modo offline instalable ni service worker: GitHub Pages sirve los archivos estáticos y requiere conexión para la primera carga. No hay recursos externos obligatorios para los ejercicios.
