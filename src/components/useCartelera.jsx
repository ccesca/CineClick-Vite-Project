import { useCallback, useState } from "react";

export default function useCartelera() {
  const [pelicula, setPelicula] = useState(null);
  const [ampliadas, setAmpliadas] = useState({});
  const abrirSinopsis = (titulo, sinopsis) => setPelicula({ titulo, sinopsis });
  const cerrarSinopsis = useCallback(() => setPelicula(null), []);
  const mostrarMas = (seccion) => setAmpliadas(prev => ({ ...prev, [seccion]: true }));
  return { pelicula, ampliadas, abrirSinopsis, cerrarSinopsis, mostrarMas };
}
