# Login
**Login** es un ejemplo  de una login funcional elaborado para implementar tanto un componente unico en el asi como todas las funcionalidades necesarias.
# Breve Descripcion del codigo
Utiliza simplemente tres carpetas principales un css para los estilos js para las funcionalidades y una carpeta img para imagenes

## Index 
Es la implementacion del login se compone de:

Menú Colapsable:
* Al hacer clic en menu-btn, el sidebar se contrae.
* El contenido principal se redimensiona automáticamente con una animación.
```html
<div class="sidebar" id="sidebar">
        <div class="header">
            <div class="menu-btn" id="menu-btn">
                <i class='bx bx-chevron-left'></i>
            </div>
            <div class="brand">
                <img src="img/logo2.png" alt="logo">
                <span>Impresiones</span>
            </div>
        </div>
        <div class="menu-container active">
            <div class="search">
                <i class="bx bx-search"></i>
                <input type="search" placeholder="Buscar">
            </div>
            <ul class="menu">
                <li class="menu-item menu-item-static active">
                    <a href="http://localhost/prograweb/practicapagina.html?#" class="menu-link">
                        <i class="bx bx-home"></i>
                        <span>Home</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
```

Login:
* Campos para usuario y contraseña.
* Acceso rápido con redes sociales.
* Enlaces para registro y recuperación de contraseña.
* validacion de usuario y contreñas.
```html
 <div class="main-content">
        <div class="contenedor">
            <div class="encabezado">
                <h1>Iniciar sesion</h1>
                <p>Inicia sesión para continuar</p>
            </div>

            <form>
                <form>
                    <div class="grupo-formulario">
                        <label for="usuario">Usuario</label>
                        <input type="text" id="usuario" placeholder="Ingresa tu usuario" required
                            title="Por favor ingresa tu nombre de usuario">
                    </div>

                    <div class="grupo-formulario">
                        <label for="contraseña">Contraseña</label>
                        <input type="password" id="contraseña" placeholder="Ingresa tu contraseña" required
                            title="¡No olvides tu contraseña!">
                    </div>

                    <div class="opciones">
                        <div class="recordar">
                            <input type="checkbox" id="recordar">
                            <label for="recordar">Recordarme</label>
                        </div>
                        <a href="#">¿Olvidaste la contraseña?</a>
                    </div>

                    <button type="submit" class="boton-login">Iniciar Sesión</button>
                </form>

                <div class="separador">
                    <div class="linea"></div>
                    <div class="texto">o continúa con</div>
                    <div class="linea"></div>
                </div>

                <div class="botones-sociales">
                    <a href="#" class="boton-social facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="boton-social twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="boton-social google">
                        <i class="fab fa-google"></i>
                    </a>
                </div>

                <div class="pie-pagina">
                    <p>¿No tienes cuenta? <a href="#">Regístrate aquí</a></p>
                </div>
        </div>
    </div>
```

# Capturas
![image](https://github.com/user-attachments/assets/e26ea220-67e6-4dd8-b32c-ace144895cee)



