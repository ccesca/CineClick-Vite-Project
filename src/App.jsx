import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Peliculas from "./pages/Peliculas";
import Cines from "./pages/Cines";
import Ingresar from "./pages/Ingresar";
import ElegirPelicula from "./pages/ElegirPelicula";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/peliculas" element={<Peliculas />} />
                <Route path="/cines" element={<Cines />} />
                <Route path="/ingresar" element={<Ingresar />} />
                <Route path="/elegir_pelicula" element={<ElegirPelicula />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;