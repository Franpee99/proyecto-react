import React from "react";

function Boton({ texto, onClick, tipo = "primario", deshabilitado = false, url }) {
  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className={`boton ${tipo}`} disabled={deshabilitado}>
          {texto}
        </button>
      </a>
    );
  }

  return (
    <button className={`boton ${tipo}`} onClick={onClick} disabled={deshabilitado}>
      {texto}
    </button>
  );
}

export default Boton;
