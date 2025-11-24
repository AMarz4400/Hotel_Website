const mongoose = require('mongoose');

const prenotazioneSchema = mongoose.Schema({
    stanze: [{
        _id : String,
        nome: String,
        prezzo: Number,
    }],
    stato: String,
});

exports.Prenotazione = mongoose.model("Prenotazione", prenotazioneSchema);