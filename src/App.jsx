import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import OtraPagina from "./pages/OtraPagina";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/otra" element={<OtraPagina />} />
      </Routes>
    </Router>
  );
}

export default App;
