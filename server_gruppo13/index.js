const
    port = 8080,
    mongodbUrl = "mongodb+srv://MVangi:progettoWeb89@cluster0.rydvjn8.mongodb.net/Database_Progetto_Web?retryWrites=true&w=majority",
    express = require('express'),
    mongoose = require('mongoose'),
    roomController = require('./controllers/stanzaCtrl'),
    reservationController = require('./controllers/prenotazioneCtrl.js'),
    cors=require("cors")
;

mongoose.connect(mongodbUrl, {useNewUrlParser: true});
const db = mongoose.connection;
db.once("open", () => console.log("Connessione al database riuscita"));

const app = express();
const corsOptions = {
    origin: "http://localhost:3000",
    httpOnly: true,
    credentials: true,
}
app.use(cors(corsOptions))
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set("view engine", "ejs");

app.get("/stanze", roomController.getStanze)
app.post("/aggiungiStanza", roomController.aggiungiStanza)
app.delete("/cancellaStanza", roomController.cancellaStanza)
app.put("/aggiornaStanza", roomController.aggiornaStanza)

app.post("/creaPrenotazione", reservationController.creaPrenotazione)
app.post("/eliminaPrenotazione", reservationController.eliminaPrenotazione )
app.get("/prenotazioni", reservationController.getPrenotazioni)
app.get("/prenotazioniAttive", reservationController.getPrenotazioniAttive)

app.listen(port, () => console.log("Applicazione in ascolto"));