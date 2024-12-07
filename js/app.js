/*
===================================================================
Proyecto:    PRACTICA DE JAVASCRIPT DOM
Version:      0.0.2
Nombre proyecto:   cajero automatico javascript
===================================================================
*/
import cuentas from "../data/data.js";
import Usuarios from "./Usuarios/Usuarios.js";
import Cuentas from "./Cuentas/Cuentas.js";


//subir cuentas a localstorage
localStorage.setItem('cuentas', JSON.stringify(cuentas));
const login = JSON.parse(localStorage.getItem('login'));
const loginView = document.getElementById('root');
if(login === null){
    //renderizar el login
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
            <div class="col d-flex justify-content-center align-items-center">
                <h1 class="text-center">Bienvenido al cajero automatico</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title
                        ">Bienvenido ${login[0].correo}</h5>
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
    //Validar que el boton de login exista
    const loginButton = document.getElementById('iniciarSesion');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');

     // Manejar el evento de inicio de sesión 
    if(loginButton){
        //al hacer focus en el input de email se cierra la alerta
        loginEmail.addEventListener('focus', cerrarAlerta);
        //al hacer focus en el input de password se cierra la alerta
        loginPassword.addEventListener('focus', cerrarAlerta);

        loginButton.addEventListener('click', function(event){
            const loginUser = new Usuarios();
            if(loginUser.login(loginEmail, loginPassword)){
                loginUser.setLogin(loginEmail);
                //window.location.reload();
            }
            else{
                event.preventDefault();
                //crear alerta y agregarla abajo de iniciar sesion          
                const alerta = crearAlerta('danger', 'Usuario o contraseña incorrectos');
                loginButton.after(alerta);
            }
        });
    }
    

});

const crearAlerta = (tipo, mensaje) => {
    const alerta = document.createElement('div');
    alerta.classList.add('alert', `alert-${tipo}`, 'mt-2');
    alerta.id = 'alertaLogin';
    alerta.innerHTML = mensaje;
    return alerta;
}

const cerrarAlerta = () => {
    const alerta = document.getElementById('alertaLogin');
    if(alerta){
        alerta.remove();
    }
}

const botonSalir = document.getElementById('salir');
if(botonSalir){
    botonSalir.addEventListener('click', function(){
        const loginUser = new Usuarios();
        loginUser.logout();
        window.location.reload();
    });
}
const cuenta = new Cuentas();
const consultarSaldo = document.getElementById('consultar');
if(consultarSaldo){
    consultarSaldo.addEventListener('click', function(){
        const cuentaUsuario = cuenta.getCuentaByCorreo(login[0].correo);
        //imprimir un child de root con el saldo
        const saldoDiv = document.createElement('div')
        saldoDiv.innerHTML = `
        <h1>
            su saldo en la cuenta de ahorros es: ${cuentaUsuario.saldoCuentaAhorros}
        </h1>
        `
        loginView.appendChild(saldoDiv)
    });
}

const retirarDinero = document.getElementById('retirar');
if(retirarDinero){
    const buttonFinalRetirarDinero = document.getElementById('retirarDinero');
    retirarDinero.addEventListener('click', function(){
        const buttonFinalRetirarDinero = document.getElementById('retirarDinero');
        if(buttonFinalRetirarDinero == null){
            const saldoRetirar = document.createElement('div')
            saldoRetirar.innerHTML = `
            <div class="input-group mt-3">
                <button class="btn btn-outline-secondary" type="button" id="retirarDinero">Retirar</button>
                <span class="input-group-text">$</span>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                <span class="input-group-text">.00</span>
            </div>
            <div class="form-text" id="basic-addon4">Digite el saldo a retirar.</div>
            `
            loginView.appendChild(saldoRetirar)
        }
    })
}