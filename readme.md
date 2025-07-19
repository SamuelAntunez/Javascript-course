# Javascript Curso

**ES6 (ECMAScript6)** Es el estándar técnico que define cómo debe funcionar JavaScript. 

## trabajar con directorios cap 161
## Trabajar con VITE

En la consola ubicado en la carpeta del proyecto
```console
> npm create vite@latest
> cd proyecto
> npm install
> npm run dev
```

## Tipos de Datos
### Datos Primitivos 

* **Booleanos**: True/False
* **Null**: Sin valor en lo absoluto
* **Undefined**: Variable declarada que aún no se le asigna un valor
* **Number**: Númerico
* **String**: Cadena de Carácteres
* **Symbol**: Valór 

>Los datos **Primitivos** son datos que no son objetos y son inmutables, los datos que no son primitivos son objetos en **Javascript**

## Comandos Básicos

### Delaraciones de Variable
*   **`var`:**  Tiene alcance de función o global. Si se declara dentro de una función, solo es accesible dentro de esa función, permite reasignar el valor después de su declaración
*   **`const`:** Tiene alcance de bloque, No permite reasignar el valor
*   **`let`:** Tiene alcance de bloque , permiten reasignar el valor después de su declaración

>Se recomienda utilizar `let` y `const` en lugar de `var` para evitar problemas de alcance y redeclaración
***
### Comandos de Consola
*   **`console.log( )`:** Muestra en la consola
*   **`console.clear( )`:** Limpia la consola
*   **`console.warn( )`:** Envía una advertencia en la consola 
*   **`console.table( )`:** Envía una tabla en la consola

***
### Comandos Window

*   **`alert()`:** Indica al ordenador de mostrar un dialogo con un mensaje
*   **`variable = prompt()`**: Envía el mensaje y lo guarda en un espacio de memoria

*  **`Confirm`**: Devuelve true/false

***

### Arreglos

Son objetos muy parecidos a una lista de información, que contiene un grupo de elementos

#### Creación de Arreglos

* **`const arr = new Array(10)`** Indica que sera un arreglo con 10 espacios
* **`const arr = []`** indica que sera un arreglo vacío
* **`arr[0]`** indica la primera posicion del arreglo

> Los strings tambien se pueden recorrer como arreglos

#### Métodos de los arreglos

* **`arr.slice([inicio [, fin]])`**: devuelve una copia de una parte del array dentro de un nuevo array empezando por la posición de inicio(0) hasta fin (fin no incluido). El array original no se modificará
* **`arr.length`**: devuelve la cantidad de elementos en esa matriz.
* **`arr.push()`**: añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
* **`arr.unshift()`**: agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
* **`arr.pop()`**: elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
* **`arr.splice(1, 0, '')`**: El primer parametro indica la posición, el segundo cuantos elementos se eliminaran, y del tercero en adelante los elementos que se agregarán
* **`arr.includes()`**: determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
* **`arr.indexOf()`**: retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
* **`arr.filter( arr => condicion)`**: crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
* **`Arr.map()`**: crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
* **`Arr.forEach()`**: crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
* **`arr.find( hero => hero.id === id)`**: devuelve el primer elemento de un array que cumple con una condición especificada en una función de prueba (callback) 


***
### Objetos Literales

es una forma sencilla y directa de crear un objeto usando una sintaxis basada en pares clave-valor

```js
const persona = {
  nombre: "Samuel",
  edad: 30,
  saludar: function() {
    console.log("Hola, soy " + this.nombre);
  }
};
```
Para llamar a los objetos literales

* **`console.log(persona.nombre)`** 

* **`console.log(persona.['nombre'])`** 

Mensaje en consola
```text
Samuel
```

#### Métodos de los Objetos Literales

* **`delete persona.nommbre`**: Borra la propiedad indicada
* **`object.entries(persona)`**: convierte un objeto en una matriz de pares clave-valor.
* **`object.freeze(persona)`**: sirve para congelar un objeto en JavaScript, es decir, evita que sus propiedades sean agregadas, eliminadas o modificadas.

* **`object.getOwnPropertyNames(persona) `**: te devuelve un arreglo con los nombres de todas las propiedades propias

* **`object.values(persona)`**: nos da los valores en vez de las propiedades

## Estructuras de Control

### if-else
Es una estructura de control condicional que te permite ejecutar diferentes bloques de código dependiendo de si una condición es verdadera o falsa.

#### Sintaxis Basica 
```js
if (condición) {
  // Código si la condición es verdadera
} else {
  // Código si la condición es falsa
}
```

#### Tambien se puede utilizar else if para manejar multiples condiciones

```js
const nota = 85;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 75) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
```
> Este tipo de control es fundamental para crear decisiones lógicas en formularios, juegos, validaciones, etc.

### switch
en JavaScript es otra forma de manejar múltiples condiciones, similar a `if...else`, pero más legible cuando tienes muchas comparaciones contra el mismo valor.

#### Sintaxis Basica

```js
switch (expresión) {
  case valor1:
    // Código si expresión === valor1
    break;
  case valor2:
    // Código si expresión === valor2
    break;
  default:
    // Código si ninguna condición se cumple
}
```

> `break` evita que el codigo siga al `case` siguiente, en caso de no omitirlo, los demas casos tambien se ejecutaran

## Ciclos
### while
Es una estructura de control que ejecuta un bloque de código mientras una condición sea verdadera

#### Sintaxis Basica
```js
while (condición) {
  // Código que se ejecuta si la condición es true
}
```

> Si la condicion nunca se vuelve falsa, el ciclo se vuelve infinito

### do-while
 Es una estructura de control que siempre ejecuta al menos una vez el bloque de código, incluso si la condición es falsa desde el principio. Esto lo distingue del ciclo `while`, que primero evalúa la condición antes de ejecutar.

#### Sintaxis Basica

```js
do {
  // Código que se ejecuta
} while (condición);
```

> Esto es útil cuando quieres asegurarte de que cierto código se ejecute por lo menos una vez, como mostrar menús interactivos o recibir input del usuario.

## Control de Flujo

### Break
* **`break`** Se utiliza para interrumpir la ejecución de un bucle o una sentencia

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Detiene el bucle cuando i es 5
  }
  console.log(i);
}
// Salida: 0, 1, 2, 3, 4

```
* **`return`** Se usa para finalizar la ejecución de una función y devolver un valor 
```js
function obtenerParidad(numero) {
  if (numero % 2 === 0) {
    return "Par"; // Devuelve "Par" si es divisible por 2
  }
  return "Impar"; // Si no, devuelve "Impar"
}

console.log(obtenerParidad(7)); // Salida: Impar
```
* **`continue`** Se utiliza para omitir la iteración actual de un bucle y pasar a la siguiente iteración
```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Salta la iteración cuando i es 2
  }
  console.log(i);
}
// Salida: 0, 1, 3, 4
```

## Funciones
es un bloque de código reutilizable que se ejecuta cuando lo llamas.

### Declarar una función

```js
function saludar(nombre) {
  console.log("Hola, " + nombre);
  return 'Hola'
}

saludar("Tijiz"); // Hola, Tijiz
let saludo = saludar('Tijiz') // Hola
```

Caracteristicas clave

* **saludar**: es el nombre de la funcion
* **nombre**: es el parametro que recibe la funcion( pueden ser mas de uno)
* **return**: especifica el valor devuelto por la funcion
* Son objetos de primera clase: puedes pasarlas como argumentos, devolverlas desde otras funciones o asignarlas a variables

Otras manera de declarar una funcion 

```js
const saludar = function() {
  console.log("¡Hola!");
};
```

#### Funciones flecha

```js
const saludar = () => {
  console.log("¡Hola!");
};
```
#### Dentro de un objeto

```js
const persona = {
  nombre: "Tijiz",
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};
```

## DOM

El **DOM** (Document Object Model) es una representación estructurada del contenido de un documento HTML o XML que los navegadores crean internamente. 

En el **DOM**, los atributos son pares clave-valor que proporcionan información adicional sobre un elemento HTML. Son los mismos que ves en HTML como `id`, `class`, `href`, `src`, `type`, etc

Palabra reservada para trabajar con el **DOM**: `document.`

### Comandos para la manipulacion del **DOM**

* **`document.querySelector()`**: te permite seleccionar el primer elemento del **DOM** que coincida con un selector CSS

```js
const parrafo = document.querySelector(".mensaje");
console.log(parrafo.innerText); // Hola Tijiz
```
* **`document.querySelectorAll()`**: te permite seleccionar todos los elementos del **DOM** que coincidan con un selector CSS específico. A diferencia de querySelector, que solo devuelve el primero, este devuelve un arreglo

* **`document.querySelector().innerHTML`**  Es una forma de acceder o modificar el contenido HTML interno de un elemento en el **DOM**

```js
document.querySelector("#contenido").innerHTML = "<p>Nuevo contenido</p>";
```
>Al reemplazar innerHTML, se borran todos los elementos hijos anteriores y se renderiza desde cero.

* **`document.querySelector().innerText`**: Te permite acceder o modificar el texto “visible” que hay dentro de un elemento del **DOM**

```js
const texto = document.querySelector("#mensaje").innerText = 'Nuevo texto';

```

* **`document.getElementById`**:  te permite seleccionar un elemento del **DOM** por su atributo `id` no usa # como en querySelector

* **`document.getElementsByClassName`**: Te devuelve un elemento por su atributo `class`
* **`document.createElement(img/button/div)`**:te permite crear un nuevo elemento HTML desde cero. No lo agrega automáticamente al DOM: primero lo creas, luego puedes configurarlo y finalmente insertarlo donde quieras
 
 ```js
const parrafo = document.createElement("p");
parrafo.innerText = "Este párrafo fue creado dinámicamente";
document.body.appendChild(parrafo);
 ```

* **`document.replaceChildren()`**: Se usa para reemplazar todos los hijos de un nodo del DOM con uno o más nuevos nodos o cadenas de texto. Es una forma muy práctica de limpiar un elemento y agregarle nuevo contenido sin tener que eliminar manualmente cada hijo.

> Cuando manipulamos el DOM con document. Javascript hace una llamada al documento HTML  y lo recorre cada vez, es recomendable guardarlo en una variable para ahorrar recursos

* **`element.setAttribute()`**: añade o actualiza un atributo del elemento HTML seleccionado.


```js
const parrafo = document.getElementById("saludo");
parrafo.setAttribute("class", "mensaje");

// <p id="saludo" class="mensaje">Hola</p>
```

* **`element.classList.add()`**: te permite agregar una o más clases CSS a un elemento del DOM sin reemplazar las que ya tiene.
* **`element.classList.remove()`**: te permite eliminar una o más clases CSS a un elemento del DOM sin reemplazar las que ya tiene.

```js
const caja = document.getElementById("caja");
caja.classList.add("resaltado", "borde-redondeado");
// <div id="caja" class="resaltado borde-redondeado">Contenido</div>
```
***
### addEventListener

* **`elemento.addEventListener()`**: te permite escuchar eventos que ocurren en elementos del DOM y ejecutar una función cuando ese evento sucede.

```js
elemento.addEventListener("evento", funcion);
```
**Ejemplo**
```js
const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  alert("¡Botón clickeado!");
});
```

```js
  form.addEventListener('submit', (e) =>{
        e.preventDefault()
  }) // Sirve para prevenir la accion predeterminada del submit de refrescar la pagina
```

#### Diferentes tipos de eventos

* **Eventos de Ratón**
```js
element.addEventListener("click", () => {
  console.log("¡Hiciste clic!");
});

element.addEventListener("mouseover", () => {
  console.log("Pasaste el mouse por encima");
});
```
* **Eventos de Teclado (keydown)**
```js
document.addEventListener("keydown", e => {
  console.log("Presionaste: " + e.key);
});

document.addEventListener("keyup", e => {
  console.log("Soltaste: " + e.key);
});
```
* **Eventos de Teclado (keyup)**
```js
input.addEventListener("keyup", (e) => {
  console.log("Tecla soltada:", e.key);
  console.log("Contenido actual:", e.target.value);
});
```
* **Eventos de Formulario**
```js
input.addEventListener("input", e => {
  console.log("Valor actual:", e.target.value);
});

form.addEventListener("submit", e => {
  e.preventDefault(); // Evita que se recargue la página
  console.log("Formulario enviado");
});
```
* **Eventos de Ventana**
```js
window.addEventListener("resize", () => {
  console.log("Tamaño de la ventana cambió");
});

window.addEventListener("scroll", () => {
  console.log("Estás haciendo scroll");
});
```
* **Eventos cuando el DOM carga**
```js
document.addEventListener("DOMContentLoaded", () => {
  console.log("El DOM está listo para usarse");
});
```

## Clases
Una clase es como un molde o plantilla que define cómo deben ser los objetos: qué datos tienen (propiedades) y qué pueden hacer (métodos o funciones).

Las clases en JavaScript son una forma más clara y estructurada de trabajar con objetos y herencia. Fueron introducidas en ECMAScript 2015 (ES6).

### Sintaxis

```js
const objeto = {
    nombre: 'Samuel',
    edad: '24',
    imprimir() {
        console.log(`Nombre: ${this.nombre}`)
    }
}
```
* Para llamar la función del objeto utilizamos `objeto.imprimir()`
* Para hacer referencia al mismo objeto se utiliza la palabra reservada `this`

### Formas para crear una clase

```js
function Persona(nombre, edad) {
    
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} Edad: ${this.edad}`)
    }
};

const maria = new Persona('Maria', 18)
```
* Al usar `this.nombre` estamos haciendo referencia a `Persona.nombre`
* Al usar `new Persona()` estamos diciendo que vamos a crear una nueva instancia de persona y la almacenaremos en la variable `maria`


### Forma moderna de trabajar con Clases en Javascript

```js
class Persona {
    nombre;
    codigo;
    frase;
    // constructor: metodo que se ejecuta cuando se crea una nueva instancia de la clase
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
}

const maria = new Persona(Maria, Vecina, 'Me gusta el pan')
```

### Metodos en las clases
Son funciones que están definidas dentro de una clase y que describen el comportamiento que los objetos creados a partir de esa clase pueden realizar.

```js
class Calculadora {
  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }
}

const miCalc = new Calculadora();
console.log(miCalc.sumar(5, 3)); // 8
console.log(miCalc.restar(5, 3)); // 2
```

### Metodo Get
se usa para obtener el valor de una propiedad de forma controlada, como si accedieras directamente a ella, pero permitiendo ejecutar lógica adicional si lo necesitas.

```js
class Producto {
  constructor(nombre, precio) {
    this._nombre = nombre;
    this._precio = precio;
  }

  get precio() {
    return `$${this._precio}`;
  }
}

const item = new Producto("Camiseta", 19.99);
console.log(item.precio); // $19.99
```
El return se utiliza para devolver el valor deseado
***
### Metodo Set
Nos ayuda a setear (establecer) un valor en una clase

```js
set setComidaFavorita( comida ) { // argumento
  this.comida = comida; // argumento
}

const spiderman = new Persona()
spiderman.setComidaFavorita = 'Pastel de carne' // enviar argumento

```
>Los set suelen recibir un solo argumento

## Variables de Entorno

Son variables que dependiendo del entorno o donde se este ejecutando la aplicacion tendran un valor distinto

### `dotenv`

Paquete para trabajar con variables de entorno con node

### trabajar con variables de entorno con vite

Se trabaja creando un archivo `.env`

```env
API_KEY =EstaEsMiLLavePrivada
BASE_URL=https://localhost:1234/cursos/samuel
```

Los archivos `.env` no se les da seguimiento, su informacion es privada
> se suele crear un archivo `.env.template` para indicarle a los demas compañeros como deben crear sus variables

En **node** las variables de entorno se guardan en `process.env`, pero en **VITE** se guardan en `import.meta.env`

Para trabajar con variables de entorno en VITE necesitamos colocar la palabra reservada `VITE` en las VE

```env
VITE_API_KEY =EstaEsMiLLavePrivada
VITE_BASE_URL=https://localhost:1234/cursos/samuel
```
Para llamar a la **VE** utilizamos
```js
import.meta.env.DEV // true
import.meta.env.VITE_API_KEY // EstaEsMiLLavePrivada
import.meta.env.VITE_BASE_URL // https://localhost:1234/cursos/samuel

```
>VE = Variables de Entorno

## Callbacks

Funcion que recibe como argumento otra funcion que se invoca

```js
export const callbacksComponent = ( element ) =>{
    const id = '5d86371f2343e37870b91ef1';
    findHero( id, (hero) =>{
        element.innerHTML = hero.name
    })
}

const findHero = ( id, callback ) =>{

   const hero = heroes.find( hero => hero.id === id)

   callback( hero)
}
```
- Permiten ejecutar código después de que una tarea haya terminado.
- Son fundamentales en operaciones como eventos, temporizadores, peticiones HTTP, etc.
- Son la base de conceptos más avanzados como promesas y async/await.

### Manejo de Errores en los Callbacks

```js
export const callbacksComponent = ( element ) =>{
    const id = '5d86371f2343e37870b91ef1';
    findHero( id, (hero) =>{
        element.innerHTML = hero?.name || 'No hay heroe' // si no existe devuelve undefined
    })
}
```

Colocar el `?` en el arreglo, nos evalua si existe, en tal caso de existir nos buscara la propiedad que estamos buscando

```js
const findHero = ( id, callback ) =>{

    const hero = heroes.find( hero => hero.id === id)
    if(!hero ){
        callback(`Hero with id ${id} not found`)
        return;
    }
   callback(null, hero)
}
```

Para manejar errores con los callbacks, ahora tomamos dos argumentos, donde el primer argumento sera un `error` y el segundo argumento, el que estamos buscando

### Callback Hell

```js
export const callbacksComponent = ( element ) =>{
    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f2343e37870b91ef1';
    findHero( id1, (err, hero1) =>{
        if (!hero1) {
            element.innerHTML = err
            return
        }
        findHero(id2, (err, hero2) =>{
            if (!hero2) {
            element.innerHTML = err
            return
            }
            element.innerHTML = `${hero1.name} ${hero2.name}`

        })
    })
}
```
Ocurre cuando encadenas múltiples funciones asincrónicas usando callbacks anidados, lo que genera un código difícil de leer, mantener y depurar.

## Promises

### Sintaxis Basica
```js
const promise = new Promise( (resolve, reject)=>{

  const hero = heroes.find( hero => hero.id === id)
  if (hero) {
    resolve(hero)
    return
  }
  reject(`hero with id ${id} not found`)
  return promise;
});
```
Dentro de la promesa tenemos una funcion, con dos argumentos, el argumento `resolve` y el `reject`

* el **`resolve`**: es una funcion que va a tener el valor producto de la promesa
* el **`reject`** significa que no se logro la promesa

### Optimizacion de Promesas

```js
return new Promise((res, rej) =>{  });
```
> En vez de crear una constante y luego retornar esa constante, se retorna de una vez la promesa de una vez

### Llamar a una promesa

```js
export const promiseComponent = ( element ) =>{

    const renderHero = ( hero ) =>{
        element.innerHTML = hero.name
    }
    const renderError = ( error ) =>{
        element.innerHTML = error;
    }
    const id1 = '5d86371f25a058e5b1c8a65e'
    findHero(id1)
        .then( superHero => renderHero(superHero) )
        .catch( error => renderError( error ))
};
```
> el argumento `superHero` puede tener cualquier nombre, en este caso, tiene el valor del arreglo que obtuvimos con la promesa

* **`.then()`**: Se ejecuta cuando la promesa se cumple exitosamente. Es donde escribes el código que debería ejecutarse con el resultado positivo.
* **`.catch()`**: Se ejecuta si la promesa falla. Sirve para manejar errores o situaciones inesperadas.


#### **Protip**
```js
.then( superHero => renderHero(superHero)
.then(renderHero) // Es lo mismo

.catch( error => renderError( error ))
.catch(renderError) // Es lo mismo
```
Cuando se tiene el mismo orden de argumentos y misma cantidad de argumentos, se puede aplicar esta sintaxis, solamente mandando la funcion como referencia, automaticamente los argumentos se mandaran en el mismo orden

### Promise Hell

```js
export const promiseComponent = ( element ) =>{
    const renderTwoHeros = (hero1, hero2) =>{
        element.innerHTML = `
        ${hero1.name} ${hero2.name}
        `
    }
    const renderError = ( error ) =>{
        element.innerHTML = error;
    }
    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f25a058e5b1c8a65e';
    findHero(id1)
        .then( (hero1) =>{
            findHero(id2)
                .then(  (hero2) =>{
                    renderTwoHeros(hero1, hero2)
                } )
                .catch( error => renderError( error ))
        })
        .catch( error => renderError( error ))
}
```

### Refactorizacion del Promise Hell
```js
let hero1, hero2;

findHero(id1)
  .then( hero => {
    hero1 = hero;
    return findHero(id2)
      .then( hero2 => {
        renderTwoHeros( hero1, hero2)
      })
  })
  .catch( renderError)

```

### Promises - All

Nos permite ejecutar todas las promesas que nosotros definamos en un arreglo de Promesas

>Solo aplicable en caso de que las diferentes promesas no dependan entre si 

```js
Promise.all([
        findHero(id1),
        findHero(id2), 
    ])
    .then( ([hero1, hero2]) => renderTwoHeros(hero1, hero2))
    .catch( renderError )
```

### Promise - Race

Sintaxis similar al `Promise.all` pero esta vez solo devuelve la promesa que se ejecute mas rapida

```js
Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]).then( renderValue )
```

## Async

Las funciones asyncronas, no siguen el hilo principal del programa, trabaja en base a referencias 
```js
const findHero = async(id) =>{

    const hero = heroes.find( hero => hero.id === id)
    return hero;
};
```
Una funcion marcada con Async, siempre devolvera una promesa aunque no este especificada

```js
findHero( id1 )
        .then( hero => element.innerHTML = hero.name)
```

#### Manejo de errores en Async

Como el return en una funcion asyncrona solo ocurre cuando el valor es correcto, utilizamos un `throw` para enviar el error

```js
const findHero = async(id) =>{

    const hero = heroes.find( hero => hero.id === id)
    if( !hero ) throw `Hero not found`
    return hero;
};
```

## Async-Await


```js
export const asyncAwaitComponent = async( element ) =>{
    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f2343e37870b91ef1';

    const hero1 = await findHero(id1);
    const hero2 = await findHero(id2)

    element.innerHTML = ` ${hero1} / ${hero2}`
}
```

* **`async`**: Convierte automáticamente una función en una que devuelve una promesa.
* **`await`**: Espera a que una promesa se resuelva antes de continuar con la ejecución del código, sin bloquear el hilo principal.

### Desestructuracion del ejercicio
```js
export const asyncAwaitComponent = async( element ) =>{
    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f2343e37870b91ef1';

    const {name: name1} = await findHero(id1);
    const {name: name2} = await findHero(id2)

    element.innerHTML = ` ${name1} / ${name2}`
}
```

>Al ser promesas que se ejecutan secuencialmente, siempre esperara a que se ejecute la primera para ejecutar la siguiente, solo usar cuando el resultado de una promesa depende de las anteriores

#### Manejo de errores en Async-Await

Para manejar errores utilizamos el `try` y el `catch`

```js
try {
        const {name: name1} = await findHero(id1);
        const {name: name2} = await findHero(id2)

        element.innerHTML = ` ${name1} / ${name2}`
    } catch (error) {
        element.innerHTML = error
    }
```
El `error` que agarre sera el primer error que pase por la funcion

## Optimizacion promesas no secuenciales

Utilizando el `Promise.All` podemos trabajar con promesas no secuenciales, y mejorar el tiempo
```js
const [value1, value2, value3] = await Promise.all([
  slowPromise(),
  mediumPromise(),
  fastPromise(),
])
```

Utilizando la desestructuracion para dar el valor a cada promesa
>Solo utilizar en promesas que sean independientes unas de otras y puedan utilizarse de manera simultanea

## if Await

Es posible trabajar con el `await` con estructuras de control

```js
if (await getHeroAsync(id) ){
  element.innerHTML = hero.name;
  return
}
  element.innerHTML = 'No existe'
```

## for await

En el caso de tener un arreglo de promesas, podemos recorrer ese arreglo de promesas con el `for await()`

```js
const heroIds = heroes.map ( hero => hero.id)
const heroPromises = getHeroesAsync( heroIds)
for await( const hero of heroPromises) {
    element.innerHTML += `${hero.name} `
}
```

## Funciones Generadoras

La palabra clave `function*` define una funcion generadora

```js
export const generatorFunctionComponents = ( element ) =>{

    const myGneerator = myFirstGeneratorFunction();
    console.log( myGneerator.next()); // nos da un objeto con el primer valor
    console.log( myGneerator.next()); 
    console.log( myGneerator.next()); 
    console.log( myGneerator.next()); 
    console.log( myGneerator.next()); 
}

function* myFirstGeneratorFunction(){
    yield 'Primer valor'
    yield 'Segundo valor'
    yield 'Tercer valor'
    yield 'Cuarto valor'
    return 'no hay mas valores';
}

```
Son funciones de las que se puede salir y volver a entrar, de manera incrementar, no ejecuta su cuerpo inmediatamente, puede pausarse y volver a reanudarse cada vez que lo pida

* **`yield`**: la palabra clave yield se usa para pausar y reanudar una funcion generadora
* **`next()`**: con el metodo `next` te permite avanzar hacia el siguiente `yield`, sucesivamente hasta el return 

Cada yield devolvera un objeto con dos valores `value` y `done`, donde value sera el valor del objeto y done, dependera de si la funcion generadora seguira funcionando o no, cuando `done: true` significa que ya no dara mas valores la funcion generadora

```console
{value: 'Primer valor', done: false}
{value: 'Segundo valor', done: false}
{value: 'Tercer valor', done: false}
{value: 'Cuarto valor', done: false}
{value: 'no hay mas valores', done: true}
```

### Ejemplo de funcion generadora
```js
export const generatorFunctionComponents = ( element ) =>{
  const genId = idGenerator();
  console.log(genId.next())
}
function* idGenerator(){
  let currentId= 0;
  while(true) {
    yield ++currentId
}
```

Generador de id utilizando funciones generadoras

## Funciones Generadoras Asincronas

```js
export const generatorsAsyncComponent = async( element ) =>{

    const heroGenerator = getHeroGenerator();
    let isFinished = false;
    do {
        const { value, done } = await heroGenerator.next()
        isFinished = done
        if (isFinished) break;
        element.innerHTML = value
    } while (!isFinished);

}
async function* getHeroGenerator() {
    for (const hero of heroes ){
        await sleep();
        yield hero.name;
    }
}
const sleep = () =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve()
        }, 1000)
    })
}
```

## Que es una API
**API significa “interfaz de programación de aplicaciones”.**

Las API son mecanismos que permiten a dos componentes de software comunicarse entre sí mediante un conjunto de definiciones y protocolos. Por ejemplo, el sistema de software del instituto de meteorología contiene datos meteorológicos diarios. La aplicación meteorológica de su teléfono “habla” con este sistema a través de las API y le muestra las actualizaciones meteorológicas diarias en su teléfono.

## Peticiones HTTP
Una **peticion http** es la forma en que tu navegador se comunica con un servidor web cuando quieres acceder a una página o recurso en internet
Cuando se hace una peticion Get a una API te devuelve un arreglo con JSON

```
[
    {
        "quote": "Congratulations, you’ve just left your family a second-hand Subaru.",
        "author": "Saul Goodman"
    }
]
```

### Fetch

Metodo del objeto global windows, Se utiliza para hacer solicitudes HTTP desde el navegador (o desde entornos como Node.js con algunos ajustes). Es una forma moderna de obtener datos de un servidor, ya sea para traer información, enviar datos o interactuar con una API.
```js
fetch('https://api.ejemplo.com/datos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
tambien se puede utilizar de la siguiente manera
```js
const fetchQuote = async( ) =>{
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
    const data = await res.json()

    console.log(data[0])
    return data[0]
}

```
***
### Trabajo en Postman - Peticion Get
Es una solicitud que se utiliza para obtener datos desde un servidor web, generalmente a través de una API. Es uno de los métodos HTTP más comunes y no modifica la información del servidor, solo la consulta.

### Trabajo en Postman - Peticion Post
es un tipo de solicitud HTTP que se utiliza para enviar datos al servidor, generalmente para crear o modificar recursos. A diferencia de una petición GET, los datos no se envían en la URL, sino en el cuerpo de la solicitud, lo que permite mayor seguridad y capacidad.

### Trabajo en Postman - Peticion Put
se utiliza para actualizar completamente un recurso existente o crear uno nuevo si no existe. A diferencia de POST, que suele usarse para crear, PUT reemplaza el recurso en su totalidad con los datos enviados.

### Trabajo en Postman - Peticion Patch
se utiliza para modificar parcialmente un recurso existente en el servidor. A diferencia de PUT, que reemplaza todo el recurso, PATCH solo actualiza los campos que especifiques.

### Trabajo en Postman - Peticion Delete
Sirve para eliminar un recurso
***

### CRUD ( CREATE, READ, UPDATE, DELETE)

#### Libreria json-server 
Es una herramienta súper útil cuando estás desarrollando aplicaciones web y necesitas simular un backend rápido sin escribir código del lado del servidor.

* Instalas el paquete

```console
npm install json-server
```

* Creas un archivo llamado db.json con datos de ejemplo:
```console
{
  "users": [
    { "id": 1, "nombre": "Ana" },
    { "id": 2, "nombre": "Luis" }
  ]
}
```
* le estableces un arranque en el `package.json` y un puerto unico
```console
"server": "json-server ./server/db.json --port 3001"
```
* lo ejecutas
```console
npm run server
```

> Para hacer una peticion en postman http://localhost:3001/users/1 donde el **1** indica el ID del USER de la db, si no encuentra ningun usuario, da **404**

### Mappers









