import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import Encabezado from "../components/Encabezado";
import PieDePagina from "../components/PieDePagina";
import { Link } from "react-router-dom";
import Boton from "../components/Boton";

function Carrito() {
  const { carrito, agregarAlCarrito, reducirCantidad, eliminarDelCarrito } = useContext(CarritoContext);

  // 🔹 Calcular el total a pagar
  const totalPagar = carrito.reduce((total, producto) => total + (producto.price || producto.precio) * producto.cantidad, 0);

  return (
    <div className="contenedor">
      <Encabezado />
      <h2>🛒 Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <div className="carrito-grid">
            {carrito.map((producto) => (
              <div key={producto.id} className="producto-carrito">
                <img src={producto.image || producto.imagen} alt={producto.title || producto.nombre} />
                <p><strong>{producto.title || producto.nombre}</strong></p>
                <p>Precio: ${producto.price || producto.precio}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <div className="botones-carrito">
                  <Boton texto="➕" tipo="secundario" onClick={() => agregarAlCarrito(producto)} />
                  <Boton texto="➖" tipo="secundario" onClick={() => reducirCantidad(producto.id)} />
                  <Boton texto="❌" tipo="eliminar" onClick={() => eliminarDelCarrito(producto.id)} />
                </div>
              </div>
            ))}
          </div>

          {/* 🔹 Total a pagar */}
          <div className="total-carrito">
            <h3>Total a Pagar: ${totalPagar.toFixed(2)}</h3>
          </div>
        </>
      )}

      <div style={{ marginTop: "20px" }}>
        <Link to="/">
          <Boton texto="⬅ Seguir Comprando" tipo="primario" />
        </Link>
      </div>
      <PieDePagina />
    </div>
  );
}

export default Carrito;
