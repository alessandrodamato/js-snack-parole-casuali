Parole Casuali
===
## **Descrizione Problema**

Ci viene chiesto di creare e stampare in console una frase contenente N parole (dove il valore di N è definito in una costante) sfruttando una API e che genera parole casuali.

<aside>
📚 Per poter affrontare l'esercizio è necessario conoscere: JS in particolare variabili, array, ciclo for, functions, console.log e la libreria axios.js (per le chiamate API).

</aside>

### Step 1

Per prima cosa analizza l'API per vedere il tipo di risposta:

https://flynn.boolean.careers/exercises/api/random/word

<aside>
📚 L'endpoint restituisce *una sola parola per chiamata*, quindi per generare la lista dovremo fare N chiamate. Rivedi la [documentazione di axios.js](https://github.com/axios/axios) e i metodi per effettuare una chiamata http.

</aside>

<aside>
💡 Ricorda che è buona pratica definire all'inizio del tuo script le variabili che utilizzerai nel codice (ad es. potresti salvare il numero di parole richieste in una costante, inizializzare l'array di parole vuoto etc.)

</aside>

<aside>
⚠️ Attenzione: non fidarti mai di una API esterna; ricorda di gestire possibili errori (ad es. errori 5xx o 4xx oppure il formato della risposta o se mancano dati).

</aside>

### Step 2

Accumula tutte le parole ottenute in un array chiamando N volte l'API e infine crea la frase concatenando la lista di parole ottenute.

<aside>
💡 Dovrai effettuare N chiamate; quale buona occasione per sfruttare i cicli!!

</aside>

<aside>
🤔 Una volta riempito l'array trova un modo per concatenare le parole in un'unica frase; conosci qualche metodo degli array utile?

</aside>