/*
===================================================================
Proyecto:    PRACTICA DE JAVASCRIPT DOM
Version:      0.0.2
Nombre proyecto:   cajero automatico javascript
===================================================================
*/
import Usuarios from "./Usuarios/Usuarios.js";
/*import Cuentas from "./Cuentas/Cuentas.js"*/

const login = [];

//setear el login en el localstorage
localStorage.setItem('login', JSON.stringify(login));
if(login.length === 0){
    //renderizar un boton de login
    const loginView = document.getElementById('root');
    loginView.innerHTML = ` 
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="text-center">Bienvenido al cajero automatico</h1>
            </div>
        </div>
        <div class="row">
            <div class="d-flex justify-content-center align-items-center col">
                <button class="btn btn-primary" id="login" data-bs-toggle="modal" data-bs-target="#loginModal">Iniciar sesión</button>
                <div class="mx-2"></div>
                <button class="btn btn-primary" id="register" data-bs-toggle="modal" data-bs-target="#registerModal">Registrarse</button>
            </div>
        </div>
    </div>
    
    <!-- Modal Iniciar Sesión -->
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel">Iniciar sesión</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="loginEmail" class="form-label">Correo electrónico</label>
                            <input type="email" class="form-control" id="loginEmail" required>
                        </div>
                        <div class="mb-3">
                            <label for="loginPassword" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="loginPassword" required>
                        </div>
                        <button type="submit" class="btn btn-primary w-100" id="iniciarSesion">Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Registrarse -->
    <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="registerModalLabel">Registrarse</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="registerEmail" class="form-label">Correo electrónico</label>
                            <input type="email" class="form-control" id="registerEmail" required>
                        </div>
                        <div class="mb-3">
                            <label for="registerPassword" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="registerPassword" required>
                        </div>
                        <div class="mb-3">
                            <label for="registerConfirmPassword" class="form-label">Confirmar contraseña</label>
                            <input type="password" class="form-control" id="registerConfirmPassword" required>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
}
else{
    //renderizar el cajero
    const cajeroView = document.getElementById('root');
    cajeroView.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="text-center">Bienvenido al cajero automatico</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title
                        ">Bienvenido ${login[0].nombre}</h5>
                        <p class="card-text">¿Qué desea hacer?</p>
                        <button class="btn btn-primary" id="retirar">Retirar dinero</button>
                        <button class="btn btn-primary" id="depositar">Depositar dinero</button>
                        <button class="btn btn-primary" id="transferir">Transferir dinero</button>
                        <button class="btn btn-primary" id="consultar">Consultar saldo</button>
                        <button class="btn btn-primary" id="salir">Salir</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}


// Esperar a que el DOM se cargue completamente para agregar los event listeners 
document.addEventListener('DOMContentLoaded', () => {
    event.preventDefault();
    // Manejar el evento de inicio de sesión 
    const loguer = document.getElementById('iniciarSesion').addEventListener('click', function() { iniciarSesion();});
    console.log(loguer);
});


function iniciarSesion(){
    alert('hola');
}