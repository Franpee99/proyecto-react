import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import Inicio from "./pages/Inicio";
import OtraPagina from "./pages/OtraPagina";
import Carrito from "./pages/Carrito";
import "./styles.css";


function App() {
  return (
    <CarritoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/otra" element={<OtraPagina />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;
