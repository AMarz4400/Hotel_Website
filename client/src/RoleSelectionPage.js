import "./RoleSelectionPage.css";
import {Link} from "react-router-dom";

function RoleSelectionPage() {
    return (

        <div className={"box"}>
            <div className={"btnContainer"}>
                <h1>Sito Hotel Bello</h1>
                <button className={"roleSelector"}><Link class={"link"} to={"/home"}>Cliente</Link></button>
                <button className={"roleSelector"}><Link class={"link"} to={"/pagina-receptionist"}>Receptionist</Link></button>
                <button className={"roleSelector"}><Link class={"link"} to={"/pagina-admin"}>Admin</Link></button>
            </div>
        </div>
    )
}

export default RoleSelectionPage;