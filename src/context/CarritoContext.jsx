import { createContext, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar productos con cantidad
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find((item) => item.id === producto.id);

      if (productoExistente) {
        return prevCarrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  // Función para eliminar productos completamente
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  };

  // Función para disminuir cantidad (si llega a 0, se elimina)
  const reducirCantidad = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, reducirCantidad }}>
      {children}
    </CarritoContext.Provider>
  );
}
