import PaginaAdmin from "./PaginaAdmin";
import Transazioni from "./Transazioni";
import PaginaReceptionist from "./PaginaReceptionist";
import Home from "./Home";
import RoleSelectionPage from "./RoleSelectionPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
      <div className= "App">
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<RoleSelectionPage />}></Route>
            <Route path={"/home"} element={<Home />}></Route>
            <Route path={"/pagina-receptionist"} element={<PaginaReceptionist />}></Route>
            <Route path={"/pagina-admin"} element={<PaginaAdmin />}></Route>
            <Route path={"/transazioni"} element={<Transazioni />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
