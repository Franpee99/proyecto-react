import Encabezado from "../components/Encabezado";
import PieDePagina from "../components/PieDePagina";
import { Link } from "react-router-dom";
import Boton from "../components/Boton";

function OtraPagina() {
  return (
    <div className="contenedor">
      <Encabezado />
      <h2>Esta es otra página de ejemplo</h2>
      <p>Puedes volver a la página de inicio haciendo clic en el botón de abajo.</p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/">
          <Boton texto="⬅ Volver al Inicio" tipo="primario" />
        </Link>
      </div>

      <PieDePagina />
    </div>
  );
}

export default OtraPagina;
