/**SNACK 1
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']*/

const array = ['pippo', 'PLUTO', 'Paperino'];

console.log(array);

const newArray = array.map((e, i) => {
    return e.charAt(0).toUpperCase() + array[i].slice(1).toLocaleLowerCase();
});

console.log(newArray);
