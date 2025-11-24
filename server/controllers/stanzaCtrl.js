const {response} = require("express");
const Console = require("console");
const Stanza = require('../models/stanza.js').Stanza

module.exports = {
    getStanze: (req, res, next) => {
        Stanza.find({}, (error, stanze) => {
            if (error) console.log(error);
            res.send(stanze);
        });
    },

    aggiungiStanza: (req, res, next) => {
        const stanza = new Stanza(req.body);
        stanza.save((error, savedDocument) => {
            console.log('stanza aggiunta')
            if (error) console.log(error);
            res.send(stanza);
        });
    },

    cancellaStanza: (req, res, next) => {
        Stanza.deleteOne({_id : req.body._id}, (error, response) => {
            console.log('stanza eliminata')
            if (error) console.log(error);
            res.send(response);
        })
    },

    aggiornaStanza: (req, res, next) => {
        Stanza.findOneAndUpdate({_id : req.body._id}, {nome: req.body.nome, prezzo: req.body.prezzo, disponibile: req.body.disponibile}, {}, (error,response) => {
            console.log('aggiornata')
            if (error) console.log(error);
            res.send(response);
        })
    }
}