import "./Transazioni.css"
import {Link} from "react-router-dom";
import * as React from "react";
import {useEffect} from "react";

function Transazioni () {

    const [prenotazioni, setPrenotazioni] = React.useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/prenotazioni", {
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

    return (
        <div>
            <Link to={"/"} style={{textDecoration: "none"}}><p className={"iconaFreccia"}>Torna indietro</p></Link>
            <div className={"box"}>
                <div className={"containerPrenotazioni"}>
                    {prenotazioni.map(prenotazione => (
                        <div className={"prenotazione"}>
                            <p style={{color: "white"}}>{prenotazione?._id}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Transazioni;