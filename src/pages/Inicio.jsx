import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import Encabezado from "../components/Encabezado";
import PieDePagina from "../components/PieDePagina";
import { Link } from "react-router-dom";
import Boton from "../components/Boton";

function Inicio() {
  const { agregarAlCarrito } = useContext(CarritoContext);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuestaJSON = await fetch("/productos.json");
        if (!respuestaJSON.ok) throw new Error("Error al obtener productos locales");
        const productosLocales = await respuestaJSON.json();

        const respuestaAPI = await fetch("https://fakestoreapi.com/products");
        if (!respuestaAPI.ok) throw new Error("Error al obtener productos de la API");
        const productosAPI = await respuestaAPI.json();

        const productosCombinados = [...productosLocales.slice(0, 3), ...productosAPI.slice(0, 6)];
        setProductos(productosCombinados);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };

    obtenerProductos();
  }, []);

  return (
    <div className="contenedor">
      <Encabezado />
      <h2>Bienvenido a MAC</h2>

      {/* 🔹 Sección de botones principales */}
      <div className="botones-principales">
        <Link to="/carrito">
        </Link>
        <Link to="/otra">
          <Boton texto="Ir a Otra Página" tipo="primario" />
        </Link>
        <Boton texto="🔗 Ir a Google" tipo="secundario" url="https://google.com" />
      </div>

      {/* 🔹 Mostrar productos */}
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto">
            <img src={producto.image || producto.imagen} alt={producto.title || producto.nombre} />
            <p><strong>{producto.title || producto.nombre}</strong></p>
            <p>${producto.price || producto.precio}</p>
            <Boton texto="Agregar al Carrito" tipo="primario" onClick={() => agregarAlCarrito(producto)} />
          </div>
        ))}
      </div>

      <PieDePagina />
    </div>
  );
}

export default Inicio;
