/* tener en cuenta:
class pasa a ser className.
for pasa a ser htmlFor.
Las etiquetas que no tienen cierre deben cerrarse (<img />, <input />).
Los eventos y atributos deben adaptarse a JSX.
Cada página debe convertirse en un componente React, utilizando una función que devuelve JSX mediante return().*/

function Index(){
    return (
        <>

                <div className="marco_nav">
        <header className="navbar">


            <div className="logo">
                <a href="/index.html"><img className="logo" src="/imagenes/LOGO.png" alt="logo"/></a>
            </div>

            <nav>
                <ul className="nav-links">
                    <li><a className="link2" href="/peliculas.html">Películas</a></li>
                    <li><a className="link2" href="/cines.html">Cines</a></li>
                </ul>
            </nav>

            <div className="nav-derecha">
                <a href="/ingresar.html" className="boton_secundario">Ingresar</a>

                <a href="/elegir_pelicula.html" className="boton_comprar_entrada">Entradas</a>

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

                    <a href="/elegir_pelicula.html" className="boton_comprar_entrada2">Comprar entradas</a>

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
                                data-sinopsis="Tras el Día del Juicio Final, Peter Parker intenta centrarse en la universidad y abandonar a Spider-Man. Cuando una nueva amenaza pone en peligro a sus amigos, debe romper su promesa y volver al traje."/>
                            <p>SPIDER-MAN:UN NUEVO DIA</p>
                            <p className="dimensiones">2D-3D</p>
                        </div>
                    </section>

                    <section className="pelicula">
                        <div className="marco_p">
                            <img className="pelicula_cartelera" src="/imagenes/guerra.png" alt="LA GUERRA DE LOS ULTIMOS"
                                data-titulo="La Guerra de los ultimos"
                                data-sinopsis="En un mundo postapocalíptico, un virus aniquila a la humanidad. Los supervivientes se enfrentan a unos carroñeros errantes llamados Segadores. El protagonista, Hig, un piloto, sobrevivió a la gripe pero perdió a su mujer."/>
                            <p>LA GUERRA DE LOS ULTIMOS</p>
                            <p className="dimensiones">2D-3D</p>
                        </div>
                    </section>

                    <section className="pelicula">
                        <div className="marco_p">
                            <img className="pelicula_cartelera" src="/imagenes/impacto.jpg" alt="IMPACTO MORTAL"
                                data-titulo="Impacto Mortal"
                                data-sinopsis="Un grupo de pasajeros internacionales en ruta de Los Ángeles a Shanghai se ven obligados a realizar un aterrizaje de emergencia en aguas infestadas de tiburones. Ahora deben superar el frenesí de los tiburones merodeantes."/>
                            <p>IMPACTO MORTAL </p>
                            <p className="dimensiones">2D-3D</p>
                        </div>
                    </section>

                    <section className="pelicula">
                        <div className="marco_p">
                            <img className="pelicula_cartelera" src="/imagenes/laodisea.jpg" alt="LA ODISEA"
                                data-titulo="La odisea"
                                data-sinopsis="Tras la guerra de Troya, el héroe griego Odiseo regresa a Ítaca, Grecia, enfrentándose a figuras de la mitología griega como el Cíclope Polifemo, las Sirenas y Calipso."/>
                            <p>LA ODISEA</p>
                            <p className="dimensiones">2D-3D</p>
                        </div>
                    </section>

                    <section className="pelicula pelicula_ver_mas">
                        <div className="marco_p">
                            <img className="pelicula_cartelera" src="/imagenes/endgame.jpg" alt="END GAME"
                                data-titulo="End Game"
                                data-sinopsis="Tras los devastadores sucesos de Avengers: Infinity War, el universo está en ruinas pero de los que quedan, los Avengers se unirán una vez más para deshacer la destrucción de Thanos y restaurar el orden del mundo."/>
                            <p>END GAME: BONUS </p>
                            <p className="dimensiones">2D-3D</p>
                        </div>
                    </section>

                    <section className="pelicula pelicula_ver_mas">
                        <div className="marco_p">
                            <img className="pelicula_cartelera " src="/imagenes/dune.jpg" alt="DUNE"
                                data-titulo="Dune: Parte III" data-sinopsis="La última parte de la trilogía de Dune."/>
                            <p>DUNE: PARTE III</p>
                            <p className="dimensiones">2D-3D</p>
                        </div>
                    </section>


                </article>
                <button className="ver_mas">VER MÁS</button>
            </div>
        </div>
        
    </main>

    <div className="modal-sinopsis" id="modal-sinopsis">
        <div className="contenido-modal">

            <button className="cerrar-modal" id="cerrar-modal" aria-label="Cerrar ventana">&times;</button>
            <p className="secciones" id="titulo-modal"></p>

            <p id="p_sinopsis"></p>

        </div>
    
        </div>
    </>
        
);
}


export default Index;