import "./PaginaReceptionist.css"
import {Link} from "react-router-dom";
import * as React from "react";
import {useEffect} from "react";

function PaginaReceptionist () {

    const [prenotazioni, setPrenotazioni] = React.useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/prenotazioniAttive", {
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setPrenotazioni(result);
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    const eliminaPreparazione = (prenotazione) => {
        return () => {
            const data = {
                _id : prenotazione._id
            }
            fetch("http://localhost:8080/completaPrenotazione", {
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
            const tempPrenotazioni = []
            prenotazioni.forEach((el) => {
                if (el._id !== prenotazione._id)
                    tempPrenotazioni.push(el)
            })
            setPrenotazioni(tempPrenotazioni)
        }
    }

    const getPrenotazione=(prenotazione) =>{
        let stanzePrenotazione=""
        prenotazione.stanze.forEach(stanza =>{
            stanzePrenotazione = stanzePrenotazione+ " " + stanza.nome+ "" + stanza.prezzo+ "$"
        })
        return prenotazione._id + ":" + stanzePrenotazione;

    }

    return (
        <div>
            <Link to={"/"} style={{textDecoration: "none"}}><p className={"iconaFreccia"}>Torna indietro</p></Link>
            <div className={"box"}>
                <div className={"containerPrenotazioni"}>
                    {prenotazioni.map(prenotazione => (
                        <div className={"prenotazione"}>
                            <p style={{color: "white"}}>{getPrenotazione(prenotazione)}</p>
                            <button className={"ordinaBtn"} onClick={eliminaPreparazione(prenotazione)}>Elimina Prenotazione</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PaginaReceptionist;