import "./PaginaAdmin.css"
import {Link} from "react-router-dom";
import * as React from "react";

function PaginaAdmin () {

    const [nuovaStanzaId, setNuovaStanzaId] = React.useState("");
    const [nuovaStanzaNome, setNuovaStanzaNome] = React.useState("");
    const [nuovaStanzaPrezzo, setNuovaStanzaPrezzo] = React.useState(0);
    const [eliminaStanzaId, setEliminaStanzaId] = React.useState("null");

    const aggiornaNuovaStanzaNome = (e) => {
        setNuovaStanzaNome(e.target.value)
    }

    const aggiornaNuovaStanzaPrezzo = (e) => {
        setNuovaStanzaPrezzo(e.target.value)
    }

    const aggiornaNuovaStanzaId = (e) => {
        setNuovaStanzaId(e.target.value)
    }

    const aggiornaEliminaStanzaId = (e) => {
        setEliminaStanzaId(e.target.value)
    }

    const aggiungi = () => {
        const data = {
            _id: nuovaStanzaId,
            nome: nuovaStanzaNome,
            prezzo: nuovaStanzaPrezzo
        }
        fetch("http://localhost:8080/aggiungiStanza", {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })
        setNuovaStanzaNome("")
        setNuovaStanzaPrezzo(null)
        setNuovaStanzaId("")
    }

    const rimuovi = () => {
        const data = {
            _id: eliminaStanzaId
        }
        fetch("http://localhost:8080/cancellaStanza", {
            method: 'DELETE',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })
        setEliminaStanzaId("")
    }

    const aggiorna = () => {
        const data = {
            _id: nuovaStanzaId,
            nome: nuovaStanzaNome,
            prezzo: nuovaStanzaPrezzo
        }
        fetch("http://localhost:8080/aggiornaStanza", {
            method: 'PUT',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })
        setNuovaStanzaNome("")
        setNuovaStanzaPrezzo(null)
        setNuovaStanzaId("")
    }

    return (
        <div>
            <Link to={"/"} style={{textDecoration: "none"}}><p className={"iconaFreccia"}>Torna indietro</p></Link>
            <div className={"box"}>
                <div className={"containerComandi"}>
                    <div className={"aggiungiForm"}>
                        <input className={"input"} placeholder={"Id"} onChange={aggiornaNuovaStanzaId}/>
                        <input className={"input"} placeholder={"Nome"} onChange={aggiornaNuovaStanzaNome}/>
                        <input className={"input"} placeholder={"Prezzo"} type={"number"} onChange={aggiornaNuovaStanzaPrezzo}/>
                        <button className={"btn"} onClick={aggiungi}>Aggiungi</button>
                    </div>
                    <div className={"rimuoviForm"}>
                        <input className={"input"} placeholder={"Id"} onChange={aggiornaEliminaStanzaId}/>
                        <button className={"btn"} onClick={rimuovi}>Rimuovi</button>
                    </div>
                    <div className={"aggiornaForm"}>
                        <input className={"input"} placeholder={"Id"} onChange={aggiornaNuovaStanzaId}/>
                        <input className={"input"} placeholder={"Nome"} onChange={aggiornaNuovaStanzaNome}/>
                        <input className={"input"} placeholder={"Prezzo"} type={"number"} onChange={aggiornaNuovaStanzaPrezzo}/>
                        <button className={"btn"} onClick={aggiorna}>Aggiorna</button>
                    </div>
                    <div className={"visualizzaTransazioni"}>
                        <button className={"btn"}><Link className={"link"} to={"/transazioni"}>Visualizza Transazioni</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaginaAdmin;