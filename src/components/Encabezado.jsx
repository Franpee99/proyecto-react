import { Link } from "react-router-dom";
import "../styles.css"; // Importamos estilos globales

function Encabezado() {
  return (
    <header className="encabezado">
      <div className="logo">
        <Link to="/"><img src="/assets/logo.webp" alt="Logo de la tienda" /></Link>
      </div>

      <nav className="menu">
        <Link to="/">Chaquetas</Link>
        <Link to="/">Camisatas</Link>
        <Link to="/">Zapatos</Link>
        <Link to="/">Accesorios</Link>
      </nav>

      <div className="carrito">
        <Link to="/carrito">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icono-carrito"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2 12h13l2-8H5"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Encabezado;
