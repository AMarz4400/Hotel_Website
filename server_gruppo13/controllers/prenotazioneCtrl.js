const {response} = require ("express");
const Prenotazione = require ('../models/prenotazione').Prenotazione;

module.exports = {
    creaPrenotazione: (req, res) => {
        const prenotazione = new Prenotazione (req.body);
        prenotazione.save ((error, savedDocument) => {
            if (error) console.log (error);
            res.send (prenotazione);
        });
    },

    eliminaPrenotazione: (req, res) => {
        //Prenotazione.findOneAndUpdate ({_id: req.body._id}, {stato: "completato"}, {}, (error, response) => {
        Prenotazione.deleteOne({_id: req.body._id},{}, (error, response) => {
            if (error) console.log (error);
            res.send (response);
        })
    },

    getPrenotazioni: (req, res) => {
        Prenotazione.find ({}, (error, prenotazioni) => {
            if (error) console.log (error);
            res.send (prenotazioni);
        });
    },

    getPrenotazioniAttive: (req, res) => {
        Prenotazione.find ({stato: ""}, (error, prenotazioni) => {
            if (error) console.log (error);
            res.send (prenotazioni);
        });
    }
}