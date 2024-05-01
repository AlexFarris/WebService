document.addEventListener('DOMContentLoaded', function() {
    // Funzione per eseguire la richiesta POST per aggiungere un quiz
    const addQuizRequest = () => {
        const form = document.getElementById('addQuizForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Ottenimento dei valori dai campi del modulo
            const nome = document.getElementById('nome').value;
            const descrizione = document.getElementById('descrizione').value;
            const punteggio = document.getElementById('punteggio').value;
            const domanda1 = document.getElementById('domanda1').value;
            const risposta1 = document.querySelector('input[name="risposta1"]:checked').value;
            const domanda2 = document.getElementById('domanda2').value;
            const risposta2 = document.querySelector('input[name="risposta2"]:checked').value;
            const domanda3 = document.getElementById('domanda3').value;
            const risposta3 = document.querySelector('input[name="risposta3"]:checked').value;

            // Creazione del corpo della richiesta in formato JSON
            const body = JSON.stringify({
                "nome": nome,
                "descrizione": descrizione,
                "punteggio": punteggio,
                "domande": [
                    {
                        "domanda": domanda1,
                        "punti": "5",
                        "risposte": [
                            {
                                "risposta": risposta1,
                                "corretta": "1"
                            }
                        ]
                    },
                    {
                        "domanda": domanda2,
                        "punti": "5",
                        "risposte": [
                            {
                                "risposta": risposta2,
                                "corretta": "1"
                            }
                        ]
                    },
                    {
                        "domanda": domanda3,
                        "punti": "5",
                        "risposte": [
                            {
                                "risposta": risposta3,
                                "corretta": "1"
                            }
                        ]
                    }
                ]
            });

            // Impostazione delle opzioni della richiesta
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: body,
                redirect: "follow"
            };

            // Invio della richiesta per aggiungere il quiz
            fetch("https://baroniadelaide.alwaysdata.net/quiz", requestOptions)
                .then(response => response.text())
                .then(result => console.log('Risposta ricevuta:', result))
                .catch(error => console.error('Errore:', error));
        });
    };

    // Chiamata alla funzione per aggiungere un quiz
    addQuizRequest();

    // Funzione per eseguire la richiesta POST per aggiungere una domanda
    const postDomandaRequest = () => {
        const body = JSON.stringify({
            "id_quiz": "1",
            "domanda": "test",
            "punti": "5",
            "risposte": [
                {
                    "risposta": "test",
                    "corretta": "0"
                },
                {
                    "risposta": "test",
                    "corretta": "1"
                }
            ]
        });

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body,
            redirect: "follow"
        };

        fetch("https://baroniadelaide.alwaysdata.net/domanda", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.error(error));
    };

    // Funzione per eseguire la richiesta POST per aggiungere una risposta
    const postRispostaRequest = () => {
        const body = JSON.stringify({
            "id_domanda": "2",
            "risposta": "test",
            "corretta": "0"
        });

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body,
            redirect: "follow"
        };

        fetch("https://baroniadelaide.alwaysdata.net/risposta", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.error(error));
    };

    // Funzione per eseguire la richiesta PUT per aggiornare un quiz
    const putQuizRequest = () => {
        const body = JSON.stringify({
            "id_quiz": "1",
            "nome": "quiz",
            "descrizione": "descrizione quiz",
            "punteggio": "100"
        });

        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: body,
            redirect: "follow"
        };

        fetch("https://baroniadelaide.alwaysdata.net/quiz", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.error(error));
    };

    // Funzione per eseguire la richiesta PUT per aggiornare una domanda
    const putDomandaRequest = () => {
        const body = JSON.stringify({
            "domanda": "test",
            "punti": "5"
        });

        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: body,
            redirect: "follow"
        };

        fetch("https://baroniadelaide.alwaysdata.net/domanda", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.error(error));
    };

    // Funzione per eseguire la richiesta PUT per aggiornare una risposta
    const putRispostaRequest = () => {
        const body = JSON.stringify({
            "risposta": "test",
            "corretta": "0"
        });

        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: body,
            redirect: "follow"
        };

        fetch("https://baroniadelaide.alwaysdata.net/risposta", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.error(error));
    };

    // Funzione per eseguire la richiesta DELETE per eliminare un quiz
    const deleteQuizRequest = () => {
        const requestOptions = {
            method: "DELETE",
            redirect: "follow"
        };

        fetch("https://baroniadelaide.alwaysdata.net/quiz/1", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.error(error));
    };

    // Chiamate alle funzioni delle richieste
    postDomandaRequest();
    postRispostaRequest();
    putQuizRequest();
    putDomandaRequest();
    putRispostaRequest();
    deleteQuizRequest();
});
