import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Ingresar(){
    const navigate = useNavigate();
    const [loginExitoso, setLoginExitoso] = useState(false);
    const [registroExitoso, setRegistroExitoso] = useState(false);
    const ejecutarLogin = (evento) => {
      evento.preventDefault();
      const datos = new FormData(evento.currentTarget);
      const usuario = datos.get("usuario");
      const contrasena = datos.get("contrasena");
      const usuarioGuardado = localStorage.getItem("usuario_guardado");
      const contrasenaGuardada = localStorage.getItem("contraseña_guardada");
      const esAdmin = usuario === "admin" && contrasena === "1234";
      if ((usuario === usuarioGuardado && contrasena === contrasenaGuardada && usuarioGuardado !== null) || esAdmin) {
        localStorage.setItem("usuario_ingresado", "si");
        if (esAdmin) localStorage.setItem("rol_usuario", "admin");
        else localStorage.removeItem("rol_usuario");
        setLoginExitoso(true);
        window.setTimeout(() => navigate("/"), 2000);
      } else {
        setLoginExitoso(false);
        window.alert("Usuario y/o contraseña incorrectos");
      }
    };
    const ejecutarRegistro = (evento) => {
      evento.preventDefault();
      const datos = new FormData(evento.currentTarget);
      const contrasena = datos.get("contrasena");
      if (contrasena !== datos.get("confirmacion")) {
        window.alert("Las contraseñas no coinciden."); return;
      }
      if (contrasena.length < 6) {
        window.alert("La contraseña debe tener mas de 6 caracteres."); return;
      }
      localStorage.setItem("usuario_guardado", datos.get("usuario"));
      localStorage.setItem("contraseña_guardada", contrasena);
      setRegistroExitoso(true);
      window.setTimeout(() => navigate("/ingresar"), 2000);
    };
    return (

        <>
        <div className="marco_nav">
            <header className="navbar">

                <Link to="/">
                    <img className="logo" src="/imagenes/LOGO.png" alt="logo"/>
                </Link>

                <div className="barra-titulo">
                    <p className="secciones">INGRESAR</p>

                    <div className="cerrar">
                        <Link to="/">
                            <img src="/imagenes/salirCLARO.png" alt="volver" width="70px"/>
                        </Link>
                    </div>
                </div>

            </header>
        </div>


        <main className="ingresar">

            <div className="alerta-exito" id="mensaje_exito_login" style={{ display: loginExitoso ? "block" : "none" }}>
                <div className="marco">
                    <p className="secciones">Inicio de sesion exitoso</p>
                </div>
            </div>

            <div className="alerta-exito" id="mensaje_exito_registro" style={{ display: registroExitoso ? "block" : "none" }}>
                <div className="marco">
                <p className="secciones">Cuenta creada de forma exitosa</p>
                </div>
            </div>

            <div className="marco">
                <div className="inicio_sesion">

                    <p className="secciones">INICIAR SESIÓN</p>

                    <form className="login_formulario" id="form_login" onSubmit={ejecutarLogin}>

                        <div className="login_campo">
                            <label htmlFor="usuario">Usuario</label>
                            <input type="text" id="usuario" name="usuario" placeholder="Nombre de usuario" required/>
                        </div>
                        

                        <div className="login_campo">
                            <label htmlFor="contraseña_login">Contraseña</label>
                            <input type="password" id="contraseña_login" name="contrasena" placeholder="Ingresá tu contraseña" required/>
                        </div>

                        <button type="submit" className="boton_secundario" id="btn_login">INICIAR SESIÓN</button>

                    </form>


                </div>
            </div>

            <div className="marco">
                <div className="registro">

                    <p className="secciones">CREAR CUENTA</p>

                    <form className="registro_formulario" id="form_registro" onSubmit={ejecutarRegistro}>

                        <div className="login_campo">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre_registro" placeholder="Ingresá tu nombre" required/>
                        </div>

                        <div className="login_campo">
                            <label htmlFor="usuario">Usuario</label>
                            <input type="text" id="usuario_registro" name="usuario" placeholder="Ingresá tu usuario" required/>
                        </div>

                        <div className="login_campo">
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id="correo_registro" placeholder="nombre@correo.com" required/>
                        </div>

                        <div className="login_campo">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" id="contraseña_registro" name="contrasena" placeholder="Ingresá una contraseña" required/>
                        </div>

                        <div className="login_campo">
                            <label htmlFor="confirmar_contraseña_registro">Confirmar contraseña</label>
                            <input type="password" id="confirmar_contraseña_registro" name="confirmacion" placeholder="Repetí tu contraseña" required/>
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