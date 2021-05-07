/**SNACK 1
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']*/

const array = ['pippo', 'PLUTO', 'Paperino'];

console.log(array);

const newArray = array.map((e, i) => {
    return e.charAt(0).toUpperCase() + array[i].slice(1).toLocaleLowerCase();
});

console.log(newArray);

/**SNACK 2
Un oggetto rappresenta una finestra di un browser e contiene due campi: 
un array di tab aperte
un numero che indica l'indice della tab aperta nell'array:
{
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
}
Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
Nel caso la tab fosse attiva, deve attivare la successiva. */

const browser = {
    tab: ['Facebook', 'Gmail', 'GitHub', 'Youtube', 'Twitch'],
    activeTab: 0,
};

browser.tab.forEach((element, index, array) => {
    if (index == browser.activeTab) {
        array.splice(browser.activeTab, 1);
    }
});

console.log(browser);
