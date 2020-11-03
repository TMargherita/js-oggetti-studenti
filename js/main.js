
$(document).ready(function() {

// Creare un oggetto che riporta i dati dello studente: nome, cognome e età. Stampare a schermo in tutte le proprietà.

var student = {
  "nome": "Margherita",
  "cognome": "Testi",
  "eta": 34
};

for (var key in student) {
  //console.log(key + " : " + student[key]);
}

// Creare un array di oggetti di studenti. fare un ciclo su tutti gli studenti e stampare per ognuno nome e cognome

var students = [
  {
    "nome": "Margherita",
    "cognome": "Testi",
    "eta": 34
  },
  {
    "nome": "Pippo",
    "cognome": "Rossi",
    "eta": 20
  },
  {
    "nome": "Franco",
    "cognome": "Bianchi",
    "eta": 50
  },
];

for (var i = 0; i < students.length; i++) {
  //console.log(students[i].nome + " " + students[i].cognome);
}

// Chiedo all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var nomeStudente = prompt("Inserisci il nome");
var cognomeStudente = prompt("Inserisci il cognome");
var etaStudente = parseInt(prompt("Inserisci l'età"));

var userStudent = {
  "nome": nomeStudente,
  "cognome": cognomeStudente,
  "eta": etaStudente
};

students.push(userStudent);

console.log(userStudent);

var source =  $("#students-template").html();
var template = Handlebars.compile(source);

for (var i = 0; i < students.length; i++) {

  var html = template(students[i]);

  $("#students-list").append(html);
}

});
