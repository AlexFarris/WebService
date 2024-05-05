document.getElementById('addQuizForm').addEventListener('submit', function(event) { event.preventDefault(); console.log('Invio del modulo in corso...');
 // Aggiunto console.log per verificare che la funzione venga eseguita 
 const myHeaders = new Headers(); myHeaders.append("Content-Type", "application/json"); 
 const nome = document.getElementById('nome').value; 
 const descrizione = document.getElementById('descrizione').value; 
 const punteggio = document.getElementById('punteggio').value; 
 const domanda1 = document.getElementById('domanda1').value; 
 const risposta1 = document.querySelector('input[name="risposta1"]:checked').value; 
 const domanda2 = document.getElementById('domanda2').value; 
 const risposta2 = document.querySelector('input[name="risposta2"]:checked').value; 
 const domanda3 = document.getElementById('domanda3').value; 
 const risposta3 = document.querySelector('input[name="risposta3"]:checked').value; 
 console.log('Valori ottenuti dai campi del modulo:'); 
 console.log('Nome:', nome); 
 console.log('Descrizione:', descrizione); 
 console.log('Punteggio:', punteggio); 
 console.log('Domanda 1:', domanda1); 
 console.log('Risposta 1:', risposta1); 
 console.log('Domanda 2:', domanda2); 
 console.log('Risposta 2:', risposta2); 
 console.log('Domanda 3:', domanda3); 
 console.log('Risposta 3:', risposta3); 
 const raw = JSON.stringify({ "nome": nome, "descrizione": descrizione, "punteggio": punteggio, "domande": [ { "domanda": domanda1, "punti": "5", "risposte": [ { "risposta": risposta1, "corretta": "1" } ] }, { "domanda": domanda2, "punti": "5", "risposte": [ { "risposta": risposta2, "corretta": "1" } ] }, { "domanda": domanda3, "punti": "5", "risposte": [ { "risposta": risposta3, "corretta": "1" } ] } ] }); 
 console.log('Raw:', raw); 
 // Aggiunto console.log per verificare il corpo della richiesta 
 const requestOptions = { method: "POST", headers: myHeaders, body: raw, redirect: "follow" }; 
 console.log('Invio della richiesta POST...'); 
 // Aggiunto console.log per verificare che la richiesta venga inviata 
 fetch("https://baroniadelaide.alwaysdata.net/quiz", requestOptions) .then((response) => response.text()) .then((result) => { console.log('Risposta ricevuta:', result);
  // Aggiunto console.log per verificare la risposta ricevuta 
}) .catch((error) => console.error('Errore:', error)); 
// Aggiunto console.log per gestire eventuali errori 
});