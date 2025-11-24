const mongoose = require('mongoose');

const stanzaSchema = mongoose.Schema({
    _id : String,
    nome: String,
    prezzo: Number,
    disponibile: String,
});
exports.Stanza = mongoose.model("Stanza", stanzaSchema);