import Encabezado from "../components/Encabezado";
import PieDePagina from "../components/PieDePagina";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="contenedor">
      <Encabezado />
      <h2>Bienvenido a nuestra tienda</h2>
      <Link to="/otra">
        <button className="boton">Ir a Otra Página</button>
      </Link>
      <PieDePagina />
    </div>
  );
}

export default Inicio;
