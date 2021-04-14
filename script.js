// la mia lista di cognomi 
var cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

// convert in lower case
for (var i = 0; i < cognomi.length; i++) {
         cognomi[i]=cognomi[i].toLowerCase()   
}

// inserisci il tuo cognome
var cognomiDaRegistrare = prompt("inserisci il tuo cognome");



// i nuovi cognomi pushati in "la mia lista di cognomi "
cognomi.push(cognomiDaRegistrare);

// la lista in ordine alfabetica
var listaCompleta=cognomi.sort();

// metoto for /per stampare in html /e stampare la posizione del nuovo cognome inserito 

var whileIndex=0;

while (whileIndex < listaCompleta.length) {

        document.getElementById("lista_cog").innerHTML += "<li>" + cognomi[whileIndex] + "</li>";

        whileIndex++;
} 

var posizione = cognomi.indexOf(cognomiDaRegistrare) + 1;
document.getElementById("position").innerHTML = "Sei nella posizione numero " + posizione + " dell'elenco ";