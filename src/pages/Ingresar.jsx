function Ingresar(){
    return (

        <>
        <div className="marco_nav">
            <header className="navbar">

                <a href="/index.html">
                    <img className="logo" src="/imagenes/LOGO.png" alt="logo"/>
                </a>

                <div className="barra-titulo">
                    <p className="secciones">INGRESAR</p>

                    <div className="cerrar">
                        <a href="/index.html">
                            <img src="/imagenes/salirCLARO.png" alt="volver" width="70px"/>
                        </a>
                    </div>
                </div>

            </header>
        </div>


        <main className="ingresar">

            <div className="alerta-exito" id="mensaje_exito_login">
                <div className="marco">
                    <p className="secciones">Inicio de sesion exitoso</p>
                </div>
            </div>

            <div className="alerta-exito" id="mensaje_exito_registro">
                <div className="marco">
                <p className="secciones">Cuenta creada de forma exitosa</p>
                </div>
            </div>

            <div className="marco">
                <div className="inicio_sesion">

                    <p className="secciones">INICIAR SESIÓN</p>

                    <form className="login_formulario" id="form_login">

                        <div className="login_campo">
                            <label htmlFor="Nom_usuario">Usuario</label>
                            <input type="text" name="Nom_usuario" id="usuario" placeholder="Nombre de usuario" required/>
                        </div>
                        

                        <div className="login_campo">
                            <label htmlFor="contraseña">Contraseña</label>
                            <input type="password" name="contraseña" id="contraseña_login" placeholder="Ingresá tu contraseña" required/>
                        </div>

                        <button type="submit" className="boton_secundario" id="btn_login">INICIAR SESIÓN</button>

                    </form>


                </div>
            </div>

            <div className="marco">
                <div className="registro">

                    <p className="secciones">CREAR CUENTA</p>

                    <form className="registro_formulario" id="form_registro">

                        <div className="login_campo">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre_registro" placeholder="Ingresá tu nombre" required/>
                        </div>

                        <div className="login_campo">
                            <label htmlFor="usuario">Usuario</label>
                            <input type="text" id="usuario_registro" placeholder="Ingresá tu usuario" required/>
                        </div>

                        <div className="login_campo">
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id="correo_registro" placeholder="nombre@correo.com" required/>
                        </div>

                        <div className="login_campo">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" id="contraseña_registro" placeholder="Ingresá una contraseña" required/>
                        </div>

                        <div className="login_campo">
                            <label htmlFor="confirmar_password">Confirmar contraseña</label>
                            <input type="password" id="confirmar_contraseña_registro" placeholder="Repetí tu contraseña" required/>
                        </div>

                        <button type="submit" className="boton_secundario" id="btn_registro">REGISTRARSE</button>

                    </form>
                </div>
            </div>

        
        </main>


    </>
    );
}
export default Ingresar;