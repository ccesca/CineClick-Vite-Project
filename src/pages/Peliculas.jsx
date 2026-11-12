import useCartelera from "../components/useCartelera";
import SinopsisModal from "../components/SinopsisModal";
import { Link } from "react-router-dom";
function Peliculas(){
    const { pelicula, ampliadas, abrirSinopsis, cerrarSinopsis, mostrarMas } = useCartelera();
    return(
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

        <div className="marco">
         <div className="peliculas">
            <p className="secciones">CARTELERA</p>

            <article>
            <section className="pelicula">
            <div className="marco_p">
            <img className="pelicula_cartelera" src="/imagenes/spiderman.jpg" alt="SPIDERMAN BRAND NEW DAY" data-titulo="Spiderman: Brand New Day" data-sinopsis="Tras el Día del Juicio Final, Peter Parker intenta centrarse en la universidad y abandonar a Spider-Man. Cuando una nueva amenaza pone en peligro a sus amigos, debe romper su promesa y volver al traje." onClick={() => abrirSinopsis('Spiderman: Brand New Day', 'Tras el Día del Juicio Final, Peter Parker intenta centrarse en la universidad y abandonar a Spider-Man. Cuando una nueva amenaza pone en peligro a sus amigos, debe romper su promesa y volver al traje.')}/>
            <p>SPIDER-MAN:UN NUEVO DIA</p>
            <p className="dimensiones">2D-3D</p>
            </div>
            </section>
            

            <section className="pelicula">
            <div className="marco_p">
            <img className="pelicula_cartelera" src="/imagenes/guerra.png" alt="LA GUERRA DE LOS ULTIMOS" data-titulo="La guerra de los ultimos" data-sinopsis="En un mundo postapocalíptico, un virus aniquila a la humanidad. Los supervivientes se enfrentan a unos carroñeros errantes llamados Segadores. El protagonista, Hig, un piloto, sobrevivió a la gripe pero perdió a su mujer." onClick={() => abrirSinopsis('La guerra de los ultimos', 'En un mundo postapocalíptico, un virus aniquila a la humanidad. Los supervivientes se enfrentan a unos carroñeros errantes llamados Segadores. El protagonista, Hig, un piloto, sobrevivió a la gripe pero perdió a su mujer.')}/>
            <p>LA GUERRA DE LOS ULTIMOS</p>
            <p className="dimensiones">2D-3D</p>
            </div>
            </section>
            

            <section className="pelicula">
            <div className="marco_p">
            <img className="pelicula_cartelera" src="/imagenes/impacto.jpg" alt="IMPACTO MORTAL" data-titulo="Impacto mortal" data-sinopsis="Un grupo de pasajeros internacionales en ruta de Los Ángeles a Shanghai se ven obligados a realizar un aterrizaje de emergencia en aguas infestadas de tiburones. Ahora deben superar el frenesí de los tiburones merodeantes." onClick={() => abrirSinopsis('Impacto mortal', 'Un grupo de pasajeros internacionales en ruta de Los Ángeles a Shanghai se ven obligados a realizar un aterrizaje de emergencia en aguas infestadas de tiburones. Ahora deben superar el frenesí de los tiburones merodeantes.')}/>
            <p>IMPACTO MORTAL </p>
            <p className="dimensiones">2D-3D</p>
            </div>
            </section>
           

            <section className="pelicula">
            <div className="marco_p">
            <img className="pelicula_cartelera" src="/imagenes/laodisea.jpg" alt="LA ODISEA" data-titulo="La odisea" data-sinopsis="Tras la guerra de Troya, el héroe griego Odiseo regresa a Ítaca, Grecia, enfrentándose a figuras de la mitología griega como el Cíclope Polifemo, las Sirenas y Calipso." onClick={() => abrirSinopsis('La odisea', 'Tras la guerra de Troya, el héroe griego Odiseo regresa a Ítaca, Grecia, enfrentándose a figuras de la mitología griega como el Cíclope Polifemo, las Sirenas y Calipso.')}/>
            <p>LA ODISEA</p>
            <p className="dimensiones">2D-3D</p>
            </div>
            </section>
            

            <section className={`pelicula ${ampliadas.cartelera ? "" : "pelicula_ver_mas"}`}>
            <div className="marco_p">
            <img className="pelicula_cartelera" src="/imagenes/minions.jpg" alt="MINIONS" data-titulo="MINIONS& MONSTRUOS" data-sinopsis="Los Minions emprenden un viaje para encontrar criaturas aterradoras para que aparezcan en su película de monstruos." onClick={() => abrirSinopsis('MINIONS& MONSTRUOS', 'Los Minions emprenden un viaje para encontrar criaturas aterradoras para que aparezcan en su película de monstruos.')}/>
            <p>MINIONS & MONSTRUOS</p>
            <p className="dimensiones">2D-3D</p>
            </div>
            </section>
            

            <section className={`pelicula ${ampliadas.cartelera ? "" : "pelicula_ver_mas"}`}>
            <div className="marco_p">
            <img className="pelicula_cartelera" src="/imagenes/toystory5.jpg" alt="TOYSTORY" data-titulo="TOY STORY 5" data-sinopsis="Los juguetes están de vuelta. Esta vez, Buzz Lightyear, Woody, Jessie y el resto de la pandilla se enfrentan a un nuevo reto cuando conocen a Lilypad, una nueva tablet que llega con sus propias ideas disruptivas sobre lo que es mejor para Bonnie. ¿Volverá a ser lo mismo la hora de jugar?" onClick={() => abrirSinopsis('TOY STORY 5', 'Los juguetes están de vuelta. Esta vez, Buzz Lightyear, Woody, Jessie y el resto de la pandilla se enfrentan a un nuevo reto cuando conocen a Lilypad, una nueva tablet que llega con sus propias ideas disruptivas sobre lo que es mejor para Bonnie. ¿Volverá a ser lo mismo la hora de jugar?')}/>
            <p>TOY STORY 5</p>
            <p className="dimensiones">2D-3D</p>
            </div>
            </section>
            
        </article>
        <br/>
        {!ampliadas.cartelera && <button type="button" className="ver_mas" onClick={() => mostrarMas("cartelera")}>VER MÁS</button>}
        </div>
        </div>
        


        <div className="marco">
        <br/>
        <p className="secciones">PREVENTA</p>

        <article>
            <section className="pelicula">
            <div className="marco_p">
            <img className="pelicula_cartelera" src="/imagenes/onepice.jpg" alt="ONE PICE" data-titulo="One pice: La pelicula" data-sinopsis="Habia un pirata conocido como el Gran Pirata del Oro Woonan, que consiguió mucho oro del mundo. La existencia del pirata desvaneció y creció la leyenda de que desapareció con su oro en una isla remota que los piratas siguen buscando." onClick={() => abrirSinopsis('One pice: La pelicula', 'Habia un pirata conocido como el Gran Pirata del Oro Woonan, que consiguió mucho oro del mundo. La existencia del pirata desvaneció y creció la leyenda de que desapareció con su oro en una isla remota que los piratas siguen buscando.')}/>
            <p>ONE PICE: LA PELICULA</p>
            <p className="dimensiones">2D-3D</p>
            </div>
            </section>

            <section className="pelicula">
            <div className="marco_p">
            <img className="pelicula_cartelera" src="/imagenes/resident.jpg" alt="RESIDENT EVIL" data-titulo="Resident Evil: Noche cero" data-sinopsis="Sigue a un desafortunado mensajero encargado de entregar un paquete a un hospital remoto. Pronto se encuentra atrapado en medio de una epidemia y debe luchar contra hordas de criaturas mutantes para sobrevivir." onClick={() => abrirSinopsis('Resident Evil: Noche cero', 'Sigue a un desafortunado mensajero encargado de entregar un paquete a un hospital remoto. Pronto se encuentra atrapado en medio de una epidemia y debe luchar contra hordas de criaturas mutantes para sobrevivir.')}/>
            <p>RESIDENT EVIL: NOCHE CERO</p>
            <p className="dimensiones">2D-3D</p>
            </div>
            </section>

            <section className="pelicula">
            <div className="marco_p">
            <img className="pelicula_cartelera" src="/imagenes/endgame.jpg" alt="END GAME" data-titulo="End Game: Bonus" data-sinopsis="Tras los devastadores sucesos de Avengers: Infinity War, el universo está en ruinas pero de los que quedan, los Avengers se unirán una vez más para deshacer la destrucción de Thanos y restaurar el orden del mundo." onClick={() => abrirSinopsis('End Game: Bonus', 'Tras los devastadores sucesos de Avengers: Infinity War, el universo está en ruinas pero de los que quedan, los Avengers se unirán una vez más para deshacer la destrucción de Thanos y restaurar el orden del mundo.')}/>
            <p>END GAME: BONUS </p>
            <p className="dimensiones">2D-3D</p>
            </div>
            </section>

            <section className="pelicula">
            <div className="marco_p">
            <img className="pelicula_cartelera" src="/imagenes/dune.jpg" alt="DUNE" data-titulo="Dune: Parte III" data-sinopsis="La última parte de la trilogía de Dune." onClick={() => abrirSinopsis('Dune: Parte III', 'La última parte de la trilogía de Dune.')}/>
            <p>DUNE: PARTE III</p>
            <p className="dimensiones">2D-3D</p>
            </div>
            </section>

            
            
            
        </article>
        {!ampliadas.preventa && <button type="button" className="ver_mas" onClick={() => mostrarMas("preventa")}>VER MÁS</button>}
    </div>


    <div className="marco">
         <div className="peliculas">
            <p className="secciones">REESTRENOS</p>

            <article>
            <section className="pelicula">
            <div className="marco_p">
            <img className="pelicula_cartelera" src="/imagenes/alicia.jpg" alt="Alicia en el pais de las maravillas" data-titulo="Alicia en el pais de las maravillas" data-sinopsis="Alicia aterriza en el País de las Maravillas. Aunque quiere regresar a casa, la Reina de Corazones se interpone en su camino." onClick={() => abrirSinopsis('Alicia en el pais de las maravillas', 'Alicia aterriza en el País de las Maravillas. Aunque quiere regresar a casa, la Reina de Corazones se interpone en su camino.')}/>
            <p>Alicia en el pais de las maravillas</p>
            <p className="dimensiones">2D</p>
            </div>
            </section>
            

            <section className="pelicula">
            <div className="marco_p">
            <img className="pelicula_cartelera" src="/imagenes/peterpan.jpg" alt="Peter Pan" data-titulo="Peter Pan" data-sinopsis="Wendy y sus hermanos son transportados al mágico mundo de Nunca Jamás con el héroe de sus historias favoritas Peter Pan." onClick={() => abrirSinopsis('Peter Pan', 'Wendy y sus hermanos son transportados al mágico mundo de Nunca Jamás con el héroe de sus historias favoritas Peter Pan.')}/>
            <p>Peter Pan</p>
            <p className="dimensiones">2D</p>
            </div>
            </section>
            

            <section className="pelicula">
            <div className="marco_p">
            <img className="pelicula_cartelera" src="/imagenes/casper.jpg" alt="Casper & Wendy" data-titulo="Casper & Wendy" data-sinopsis="Casper, un fantasma, se une a Wendy, una bruja, contra un brujo malvado." onClick={() => abrirSinopsis('Casper & Wendy', 'Casper, un fantasma, se une a Wendy, una bruja, contra un brujo malvado.')}/>
            <p>Casper & Wendy</p>
            <p className="dimensiones">2D</p>
            </div>
            </section>
           

            <section className="pelicula">
            <div className="marco_p">
            <img className="pelicula_cartelera" src="/imagenes/harrypotter.jpg" alt="Harry Potter" data-titulo="Harry Potter: La piedra filosofal" data-sinopsis="Un huérfano entra a una escuela de magia y hechicería donde se dará cuenta de la verdad sobre su familia, de sí mismo y del mal que asecha el mundo mágico." onClick={() => abrirSinopsis('Harry Potter: La piedra filosofal', 'Un huérfano entra a una escuela de magia y hechicería donde se dará cuenta de la verdad sobre su familia, de sí mismo y del mal que asecha el mundo mágico.')}/>
            <p>Harry Potter: La piedra filosofal</p>
            <p className="dimensiones">2D</p>
            </div>
            </section>
            

            <section className={`pelicula ${ampliadas.reestrenos ? "" : "pelicula_ver_mas"}`}>
            <div className="marco_p">
            <img className="pelicula_cartelera" src="/imagenes/matilda.jpg" alt="Matilda" data-titulo="Matilda" data-sinopsis="La historia de una niña maravillosa, que resulta ser un genio, y su maravillosa maestra contra los peores padres de todos los tiempos y el peor director de escuela imaginable." onClick={() => abrirSinopsis('Matilda', 'La historia de una niña maravillosa, que resulta ser un genio, y su maravillosa maestra contra los peores padres de todos los tiempos y el peor director de escuela imaginable.')}/>
            <p>Matilda</p>
            <p className="dimensiones">2D</p>
            </div>
            </section>
            

            <section className={`pelicula ${ampliadas.reestrenos ? "" : "pelicula_ver_mas"}`}>
            <div className="marco_p">
            <img className="pelicula_cartelera" src="/imagenes/caraline.jpg" alt="Caroline" data-titulo="Caroline" data-sinopsis="Una niña aventurera de 11 años encuentra otro mundo que es una versión extrañamente idealizada de su hogar frustrante, pero tiene secretos siniestros" onClick={() => abrirSinopsis('Caroline', 'Una niña aventurera de 11 años encuentra otro mundo que es una versión extrañamente idealizada de su hogar frustrante, pero tiene secretos siniestros')}/>
            <p>Caroline</p>
            <p className="dimensiones">2D</p>
            </div>
            </section>
            
            
            <section className={`pelicula ${ampliadas.reestrenos ? "" : "pelicula_ver_mas"}`}>
            <div className="marco_p">
            <img className="pelicula_cartelera" src="/imagenes/thegodfatherCart.jpg" alt="The godfather" data-titulo="El padrino" data-sinopsis="El patriarca de una organización criminal transfiere el control de su clandestino imperio a su reacio hijo." onClick={() => abrirSinopsis('El padrino', 'El patriarca de una organización criminal transfiere el control de su clandestino imperio a su reacio hijo.')}/>
            <p>El padrino</p>
            <p className="dimensiones">2D</p>
            </div>
            </section>

        </article>
        <br/>
        {!ampliadas.reestrenos && <button type="button" className="ver_mas" onClick={() => mostrarMas("reestrenos")}>VER MÁS</button>}
        </div>
        </div>
        
    
            <SinopsisModal pelicula={pelicula} onClose={cerrarSinopsis} />

    </>
    );
}

export default Peliculas;