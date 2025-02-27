import Encabezado from "../components/Encabezado";
import PieDePagina from "../components/PieDePagina";
import { Link } from "react-router-dom";

function OtraPagina() {
  return (
    <div className="contenedor">
      <Encabezado />
      <h2>Esta es otra página</h2>
      <Link to="/">
        <button className="boton">Volver al Inicio</button>
      </Link>
      <PieDePagina />
    </div>
  );
}

export default OtraPagina;
