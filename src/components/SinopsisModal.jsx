import { useEffect } from "react";

export default function SinopsisModal({ pelicula, onClose }) {
  useEffect(() => {
    if (!pelicula) return;
    const onKeyDown = (event) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [pelicula, onClose]);

  return (
    <div className="modal-sinopsis" id="modal-sinopsis"
      style={{ display: pelicula ? "flex" : "none" }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      role="presentation">
      <div className="contenido-modal" role="dialog" aria-modal="true" aria-label="Sinopsis de película">
        <button type="button" className="cerrar-modal" id="cerrar-modal" aria-label="Cerrar ventana" onClick={onClose}>&times;</button>
        <p className="secciones" id="titulo-modal">{pelicula?.titulo}</p>
        <p id="p_sinopsis">{pelicula?.sinopsis}</p>
      </div>
    </div>
  );
}
