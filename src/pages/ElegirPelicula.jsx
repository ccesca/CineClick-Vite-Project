function ElegirPelicula(){
    return(
<>

    <div className="marco">
        <header className="navbar">

            <a href="/index.html"><img className="logo" src="/imagenes/LOGO.png" alt="logo" width="100px"/></a>

            <div className="barra-titulo">

                <p className="secciones">COMPRÁ TU ENTRADA</p>

                <div className="cerrar_sesion" id="cerrar_sesion">
                    <button type="button" className="boton_secundario btn_salir" onclick="cerrarSesion()">CERRAR SESIÓN</button>
                </div>

                <div className="cerrar">
                    <a href="/index.html"><img src="/imagenes/salirCLARO.png" alt="volver" width="70px"/></a>
                </div>

            </div>

        </header>
    </div>


    <main className="cm">

        <div className="comprar_entrada">

            <form className="form_comprar_entrada" id="form_comprar_entrada" action="">

                <div className="contenedor-fila-marcos">

                    <div className="marco form">
                        <p className="secciones">Estrenos</p>
                        <select className="filtro" name="peliculas_disponibles" id="">
                            <option className="secciones" value="" disabled selected hidden>Peliculas</option>
                            <option className="secciones" value="spiderMan">SPIDERMAN BRAND NEW DAY</option>
                            <option className="secciones" value="odisea">LA ODISEA</option>
                            <option className="secciones" value="guerra_de_los_ultimos">LA GUERRA DE LOS ULTIMOS</option>
                            <option className="secciones" value="impactoMortal">IMPACTO MORTAL</option>
                            <option className="secciones" value="OnePice">ONE PICE</option>
                            <option className="secciones" value="ResidentEvil">RESIDENT EVIL: NOCHE CERO</option>
                            <option className="secciones" value="endGame">END GAME:BONUS</option>
                            <option className="secciones" value="dune">DUNE</option>
                        </select>

                        <p className="secciones">Reestrenos</p>
                        <select className="filtro" name="peliculas_disponibles" id="">
                            <option className="secciones" value="" disabled selected hidden>Peliculas</option>
                            <option className="secciones" value="caroline">CAROLINE</option>
                            <option className="secciones" value="casper">CASPER & WENDY</option>
                            <option className="secciones" value="harryPotter">HARRY POTTER</option>
                            <option className="secciones" value="alicia">ALICIA EN EL PAIS DE LAS MARAVILLAS</option>
                            <option className="secciones" value="PeterPan">Peter Pan</option>
                            <option className="secciones" value="Matilda">Matilda</option>
                            <option className="secciones" value="thegodfather">The Godfather</option>
                        </select>


                    </div>


                    <div className="marco ubicacion">
                        <p className="secciones">Fecha</p>
                        <div className="fecha_funcion">
                            <label className="radio-circular">
                                <input type="radio" id="dia_hoy" name="fecha_cine" value="hoy" checked/>
                                <span className="circulo-neon"></span>
                                <span className="info_pelicula">09-10-2026</span>
                            </label>

                            <label className="radio-circular">
                                <input type="radio" id="dia_manana" name="fecha_cine" value="manana"/>
                                <span className="circulo-neon"></span>
                                <span className="info_pelicula">10-10-2026</span>
                            </label>

                            <label className="radio-circular">
                                <input type="radio" id="dia_pasado" name="fecha_cine" value="pasado"/>
                                <span className="circulo-neon"></span>
                                <span className="info_pelicula">11-10-2026</span>
                            </label>

                            <label className="radio-circular">
                                <input type="radio" id="dia_pasadom" name="fecha_cine" value="pasadom"/>
                                <span className="circulo-neon"></span>
                                <span className="info_pelicula">12-10-2026</span>
                            </label>
                        </div>
                    </div>
                    <div className="marco form">
                        <p className="secciones">Horario</p>
                        <select className="filtro" name="formatos">
                            <option className="secciones" value="" disabled selected hidden>Horario</option>
                            <option className="secciones" value="">12:00</option>
                            <option className="secciones" value="">14:00</option>
                            <option className="secciones" value="">16:00</option>
                            <option className="secciones" value="">18:00</option>
                            <option className="secciones" value="">20:00</option>
                            <option className="secciones" value="">22:00</option>
                        </select>
                        <p className="secciones">Formato</p>
                        <select className="filtro" name="formatos">
                            <option className="secciones" value="" disabled selected hidden>Formato</option>
                            <option className="secciones" value="">2D</option>
                            <option className="secciones" value="">3D</option>
                        </select>
                    </div>

                    <div className="marco form">
                        <p className="secciones">Idioma</p>
                        <select className="filtro" name="idioma">
                            <option className="secciones" value="" disabled selected hidden>Idioma</option>
                            <option className="secciones" value="">Castellano</option>
                            <option className="secciones" value="">Subtitulada</option>
                        </select>

                        <p className="secciones">Cantidad de entradas</p>
                        <select className="filtro" name="idioma">
                            <option className="secciones" value="" disabled selected hidden>Cantidad</option>
                            <option className="secciones" value="">1</option>
                            <option className="secciones" value="">2</option>
                            <option className="secciones" value="">3</option>
                            <option className="secciones" value="">4</option>

                        </select>
                    </div>

                    <div className="marco form">
                        <p className="secciones">Cine</p>
                        <select className="filtro" name="cine">
                            <option className="secciones" value="" disabled selected hidden>Cines</option>
                            <option className="secciones" value="ABASTO">Abasto Shopping</option>
                            <option className="secciones" value="AltoAvellaneda">Alto Avellaneda</option>
                            <option className="secciones" value="nuevoCENTRO">Nuevo centro Shopping</option>
                            <option className="secciones" value="patioOlmos">Patio Olmos</option>
                            <option className="secciones" value="aldrey">Paseo Aldrey</option>
                            <option className="secciones" value="palermo">Palermo</option>
                        </select>

                        <p className="ubicacion"><a href="/cines.html">¿No sabes que cine elegir?</a></p>

                    </div>

                </div>

                <div className="bloque-boton-centrado">
                    <button className="boton_secundario">Finalizar</button>
                </div>

                <div className="alerta-exito" id="mensaje_error_compra">
                    <div className="marco">
                        <p className="secciones">Debe iniciar sesión para finalizar la compra.</p>
                    </div>

                </div>

            </form>

        </div>
    
    </main>


 </>

    );
}

export default ElegirPelicula;