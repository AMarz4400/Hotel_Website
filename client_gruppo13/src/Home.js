import "./Home.css";
import * as React from 'react';
import {Link} from "react-router-dom";
import {useEffect} from "react";
import codingDSImg from "./images/foto_stanza.jpg";

function Home () {

    const [carrello, setCarrello] = React.useState([]);
    const [stanze, setStanze] = React.useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/stanze", {
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setStanze(result);
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    const aggiungiAlCarrello = (el) => {
        return () => {
            setCarrello([...carrello, el])
            console.log(carrello)
        }
    }

    const getTotale = () => {
        let totale = 0;
        carrello.forEach(el => {
            totale += el.prezzo
        })
        return totale
    }

    const creaPrenotazione = () => {
        const data = {
            stanze : carrello,
            stato : ""
        }
        fetch("http://localhost:8080/creaPrenotazione", {
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
        setCarrello([])
    }

    return (
        <div>
            <Link to={"/"} style={{textDecoration: "none"}}><p className={"iconaFreccia"}>Torna indietro</p></Link>
            <div className={"box"}>
                <div className={"stanze"}>
                    {stanze.map(el => (
                        <div className={"card"} key={el._id}>
                            <div className={"title"}>{el.nome}</div>
                            <div className={"img"}><img src={codingDSImg} alt={'Coding DS IMG'} /></div>
                            <div className={"footer"}>
                                <div className={"prezzo"}>{el.prezzo}$</div>
                                {el.disponibile === "si" ? (
                                    <button className={"ordinaBtn"} onClick={aggiungiAlCarrello(el)}>Ordina</button>
                                    ) : (
                                    <button className={"nonDisp"}> Non Disponibile</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={"carrelloBox"}>
                    {carrello.map(el => (
                        <div className={"elementoCarrello"} key={el._id}>
                            <p>{el.nome}</p>
                            <p>{el.prezzo}$</p>
                        </div>
                    ))}
                    <div className={"completaPrenotazioneBox"}>
                        <p>{getTotale()}</p>
                        <button className={"ordinaBtn"} style={{ border: "white solid 2px"}} onClick={creaPrenotazione}>Prenota</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;