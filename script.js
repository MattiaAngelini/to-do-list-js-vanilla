
// Aggiungere nuovi task.
// Segnare i task come completati.
// Rimuovere i task.
// Visualizzare tutti i task o filtrarli per completati/non completati.

// Requisiti:

// Implementa un'interfaccia utente semplice con HTML e CSS.
// Aggiungi funzionalità opzionali come la modifica dei task o un contatore di task completati.

const userList = []
const completedCounter = []
const counterElement = document.getElementById('counter')

function addItem(){
    const inputValue = document.getElementById('daFare').value
    const completedList = document.getElementById('completed')
    
    //oggetto creato con valore input utente
    const userToDo = {
        id: userList.length,
        text: inputValue,
        done: false
    }

    const unorderedList = document.getElementById('list')
    const li = document.createElement('li')

    //classe univoca per ogni <li>
    li.classList = 'Class' + userToDo.id

    //per ogni <li> creo un tasto completato ed uno elimina
    const btnDelete = document.createElement('button')
    btnDelete.innerHTML = 'ELIMINA'
    btnDelete.classList = 'btnDelete' + userToDo.id
    const btnDone = document.createElement('button')
    btnDone.innerHTML = 'COMPLETATO'
    btnDone.classList = 'btnDone' + userToDo.id

    //pusho oggetto in array con scelte utente
    userList.push(userToDo) 

    //stampo scelte utente con i due bottoni in una <ul>
    li.innerHTML = inputValue
    unorderedList.appendChild(li)
    li.appendChild(btnDelete)
    li.appendChild(btnDone)

    //gestione tasto elimina con classe univoca, rimuove sia dal dom che da array
    btnDelete.addEventListener('click', function() { 
        document.querySelector(`.Class${userToDo.id}`).remove();
        userList.splice(userToDo.id)
    });

    //tasto completato: aggiorna counter, stampa in lista completati ma senza i bottoni
    btnDone.addEventListener('click', function() { 
        counterElement.innerHTML = completedCounter.length + 1
        completedCounter.push(userToDo)
        userToDo.done = true
        const completed = document.querySelector(`.Class${userToDo.id}`)
        document.querySelector(`.btnDone${userToDo.id}`).remove();
        document.querySelector(`.btnDelete${userToDo.id}`).remove();
        completedList.appendChild(completed)
    });

    console.log(userList)
}




