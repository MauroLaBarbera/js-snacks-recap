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

/**SNACK 4 -> VUE 
Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome, numero, attivo (true,false)
Andiamo a stampare nome cognome e numero dentro una lista.
Fare in modo poi che i contatti non attivi (attivo: false) siano stampati di colore rosso mentre gli altri normalmente di nero.
 Cliccando sul numero della persona fate in modo che appaia in console il cognome della persona di cui è stato cliccato il numero */

const app = new Vue({
    el: '#app',
    data: {
        contatti: [
            {
                nome: 'Mauro',
                cognome: 'La Barbera',
                numero: '3254664656',
                attivo: false,
            },
            {
                nome: 'Paolo',
                cognome: 'Duzioni',
                numero: '3365998745',
                attivo: true,
            },
            {
                nome: 'Ciccio',
                cognome: 'Pasticcio',
                numero: '3894568521',
                attivo: false,
            },
            {
                nome: 'Rita',
                cognome: 'Levi Montalcini',
                numero: '31456652324',
                attivo: true,
            },
            {
                nome: 'Antonio',
                cognome: 'Conte',
                numero: '3216545564',
                attivo: false,
            },
        ],
    },
});
