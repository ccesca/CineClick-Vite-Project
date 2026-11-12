import useCartelera from "../components/useCartelera";
import SinopsisModal from "../components/SinopsisModal";
import { Link } from "react-router-dom";
/* tener en cuenta:
class pasa a ser className.
for pasa a ser htmlFor.
Las etiquetas que no tienen cierre deben cerrarse (<img />, <input />).
Los eventos y atributos deben adaptarse a JSX.
Cada página debe convertirse en un componente React, utilizando una función que devuelve JSX mediante return().*/

function Index(){
    const { pelicula, ampliadas, abrirSinopsis, cerrarSinopsis, mostrarMas } = useCartelera();
    return (
        <>

                <div className="marco_nav">
        <header className="navbar">


            <div className="logo">
                <Link to="/"><img className="logo" src="/imagenes/LOGO.png" alt="logo"/></Link>
            </div>

            <nav>
                <ul className="nav-links">
                    <li><Link className="link2" to="/peliculas">Películas</Link></li>
                    <li><Link className="link2" to="/cines">Cines</Link></li>
                </ul>
            </nav>

            <div className="nav-derecha">
                <Link to="/ingresar" className="boton_secundario">Ingresar</Link>

                <Link to="/elegir_pelicula" className="boton_comprar_entrada">Entradas</Link>

            </div>
            

        </header>
    </div>


    <main>
        <div className="marco">

            <section className="pelicula_apertura">


                <div className="pelicula_apertura_contenido">

                    <div className="marco_info">
                        <p className="info_pelicula">Crimen • Drama • 2h 55min</p>
                    </div>

                    <Link to="/elegir_pelicula" className="boton_comprar_entrada2">Comprar entradas</Link>

                    <a href="https://youtu.be/UaVTIH8mujA?si=laRElwO7iewu7_Ct" className="boton_secundario2">▶ Ver
                        tráiler</a>

                </div>



            </section>
        </div>



        <div className="marco">
            <div className="cartelera">
                <p className="secciones">CARTELERA</p>


                <article>
                    <section className="pelicula">
                        <div className="marco_p">
                            <img className="pelicula_cartelera" src="/imagenes/spiderman.jpg" alt="SPIDERMAN BRAND NEW DAY"
                                data-titulo="Spiderman: Brand New day"
                                data-sinopsis="Tras el Día del Juicio Final, Peter Parker intenta centrarse en la universidad y abandonar a Spider-Man. Cuando una nueva amenaza pone en peligro a sus amigos, debe romper su promesa y volver al traje." onClick={() => abrirSinopsis('Spiderman: Brand New day', 'Tras el Día del Juicio Final, Peter Parker intenta centrarse en la universidad y abandonar a Spider-Man. Cuando una nueva amenaza pone en peligro a sus amigos, debe romper su promesa y volver al traje.')}/>
                            <p>SPIDER-MAN:UN NUEVO DIA</p>
                            <p className="dimensiones">2D-3D</p>
                        </div>
                    </section>

                    <section className="pelicula">
                        <div className="marco_p">
                            <img className="pelicula_cartelera" src="/imagenes/guerra.png" alt="LA GUERRA DE LOS ULTIMOS"
                                data-titulo="La Guerra de los ultimos"
                                data-sinopsis="En un mundo postapocalíptico, un virus aniquila a la humanidad. Los supervivientes se enfrentan a unos carroñeros errantes llamados Segadores. El protagonista, Hig, un piloto, sobrevivió a la gripe pero perdió a su mujer." onClick={() => abrirSinopsis('La Guerra de los ultimos', 'En un mundo postapocalíptico, un virus aniquila a la humanidad. Los supervivientes se enfrentan a unos carroñeros errantes llamados Segadores. El protagonista, Hig, un piloto, sobrevivió a la gripe pero perdió a su mujer.')}/>
                            <p>LA GUERRA DE LOS ULTIMOS</p>
                            <p className="dimensiones">2D-3D</p>
                        </div>
                    </section>

                    <section className="pelicula">
                        <div className="marco_p">
                            <img className="pelicula_cartelera" src="/imagenes/impacto.jpg" alt="IMPACTO MORTAL"
                                data-titulo="Impacto Mortal"
                                data-sinopsis="Un grupo de pasajeros internacionales en ruta de Los Ángeles a Shanghai se ven obligados a realizar un aterrizaje de emergencia en aguas infestadas de tiburones. Ahora deben superar el frenesí de los tiburones merodeantes." onClick={() => abrirSinopsis('Impacto Mortal', 'Un grupo de pasajeros internacionales en ruta de Los Ángeles a Shanghai se ven obligados a realizar un aterrizaje de emergencia en aguas infestadas de tiburones. Ahora deben superar el frenesí de los tiburones merodeantes.')}/>
                            <p>IMPACTO MORTAL </p>
                            <p className="dimensiones">2D-3D</p>
                        </div>
                    </section>

                    <section className="pelicula">
                        <div className="marco_p">
                            <img className="pelicula_cartelera" src="/imagenes/laodisea.jpg" alt="LA ODISEA"
                                data-titulo="La odisea"
                                data-sinopsis="Tras la guerra de Troya, el héroe griego Odiseo regresa a Ítaca, Grecia, enfrentándose a figuras de la mitología griega como el Cíclope Polifemo, las Sirenas y Calipso." onClick={() => abrirSinopsis('La odisea', 'Tras la guerra de Troya, el héroe griego Odiseo regresa a Ítaca, Grecia, enfrentándose a figuras de la mitología griega como el Cíclope Polifemo, las Sirenas y Calipso.')}/>
                            <p>LA ODISEA</p>
                            <p className="dimensiones">2D-3D</p>
                        </div>
                    </section>

                    <section className={`pelicula ${ampliadas.cartelera ? "" : "pelicula_ver_mas"}`}>
                        <div className="marco_p">
                            <img className="pelicula_cartelera" src="/imagenes/endgame.jpg" alt="END GAME"
                                data-titulo="End Game"
                                data-sinopsis="Tras los devastadores sucesos de Avengers: Infinity War, el universo está en ruinas pero de los que quedan, los Avengers se unirán una vez más para deshacer la destrucción de Thanos y restaurar el orden del mundo." onClick={() => abrirSinopsis('End Game', 'Tras los devastadores sucesos de Avengers: Infinity War, el universo está en ruinas pero de los que quedan, los Avengers se unirán una vez más para deshacer la destrucción de Thanos y restaurar el orden del mundo.')}/>
                            <p>END GAME: BONUS </p>
                            <p className="dimensiones">2D-3D</p>
                        </div>
                    </section>

                    <section className={`pelicula ${ampliadas.cartelera ? "" : "pelicula_ver_mas"}`}>
                        <div className="marco_p">
                            <img className="pelicula_cartelera " src="/imagenes/dune.jpg" alt="DUNE"
                                data-titulo="Dune: Parte III" data-sinopsis="La última parte de la trilogía de Dune." onClick={() => abrirSinopsis('Dune: Parte III', 'La última parte de la trilogía de Dune.')}/>
                            <p>DUNE: PARTE III</p>
                            <p className="dimensiones">2D-3D</p>
                        </div>
                    </section>


                </article>
                {!ampliadas.cartelera && <button type="button" className="ver_mas" onClick={() => mostrarMas("cartelera")}>VER MÁS</button>}
            </div>
        </div>
        
    </main>

    <SinopsisModal pelicula={pelicula} onClose={cerrarSinopsis} />
    </>
        
);
}


export default Index;