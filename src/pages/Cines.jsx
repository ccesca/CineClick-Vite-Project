import { Link } from "react-router-dom";
function Cines(){
    return(
        <>
 <div className="marco">
    <header className="navbar">

        <Link to="/"><img className="logo" src="/imagenes/LOGO.png" alt="logo" width="100px"/></Link>
        <div className="barra-titulo">

            <p className="secciones">CINES</p>
            

            <div className="cerrar">

                <Link to="/"><img src="/imagenes/salirCLARO.png" alt="volver" width="70px"/></Link>
            </div>

        </div>

    </header>
    </div>




    <div className="marco">
    <div className="CINES">
        <p className="secciones">Hace click en el mapa para ver la ubicacion</p>

        <article className="article_cines">
            <section className="filtro">
            
                <p className="secciones">ABASTO SHOPPING</p>
                <p className="secciones">BUENOS AIRES</p>
                <a href="https://maps.app.goo.gl/mw4HeJTY1f4qfiFdA"><img className="link_ubicacion" src="/imagenes/ubicacion.png" alt="link ubicacion" width="50px"/></a>
                    
            </section>

            <section className="filtro">
                <p className="secciones">ALTO AVELLANEDA</p>
                <p className="secciones">BUENOS AIRES</p>
                <a href="https://maps.app.goo.gl/P9LejKzAfwpp45Vq7"><img className="link_ubicacion" src="/imagenes/ubicacion.png" alt="link ubicacion" width="50px"/></a>
            </section>

            <section className="filtro">
                <p className="secciones">NUEVO CENTRO SHOPPING</p>
                <p className="secciones">CÓRDOBA</p>
                <a href="https://maps.app.goo.gl/ESUvvyQmVSMhn6ic6"><img className="link_ubicacion" src="/imagenes/ubicacion.png" alt="link ubicacion" width="50px"/></a>
            </section>

            <section className="filtro">
                <p className="secciones">PATIO OLMOS</p>
                <p className="secciones">CORDOBA</p>
                <a href="https://maps.app.goo.gl/a4TntBVZpCk4Af8P6"><img className="link_ubicacion" src="/imagenes/ubicacion.png" alt="link ubicacion" width="50px"/></a>
            </section>

            <section className="filtro">
                <p className="secciones">PASEO ALDREY</p>
                <p className="secciones">MAR DEL PLATA</p>
                <a href="https://maps.app.goo.gl/Ay8UWueNAG1HAPC58"><img className="link_ubicacion" src="/imagenes/ubicacion.png" alt="link ubicacion" width="50px"/></a>
            </section>

            <section className="filtro">
                <p className="secciones">PALERMO</p>
                <p className="secciones">BUENOS AIRES</p>
                <a href="https://maps.app.goo.gl/rfDZPb3RW5WTA8yBA"><img className="link_ubicacion" src="/imagenes/ubicacion.png" alt="link ubicacion" width="50px"/></a>
            </section>
            

        </article>

        </div>
    </div>

</>

    );
}

export default Cines;