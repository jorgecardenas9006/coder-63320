/*
===================================================================
Proyecto:    PRACTICA DE JAVASCRIPT 1
Version:      0.0.1
Nombre proyecto:   cajero automatico javascript
===================================================================
*/
import Usuarios from "./Usuarios/Usuarios.js";
import Cuentas from "./Cuentas/Cuentas.js"

const usuario = new Usuarios();
const cuenta = new Cuentas();
let response = '';

function mostrarMenu() {
    response =prompt('Por favor digite alguna de las siguientes opciones: \n1. Consultar saldo \n2. Retirar dinero \n3. Depositar dinero \n4. Cambiar contraseña \n5. Consultar datos de la cuenta \n6. Salir \n')
    // Validar si el usuario y contraseña son correctos
    let user = usuario.solicitarUsuario();
    let pass = usuario.solicitarPassword();
    response = !usuario.login(user, pass) ? (console.log('Usuario o contraseña incorrectos'), '6') : response;
    switch(response) {
        case '1':
            //consultar saldo de la cuenta
            alert(`Tu saldo es: ${cuenta.consultarSaldo(user)}`);
            mostrarMenu();  
            break;
        case '2':
            //retirar dinero
            const monto = prompt('Digite el monto a retirar: ');
            const saldoFinal = cuenta.retirarSaldo(user, monto);
            if(!saldoFinal) {
                alert('No tienes saldo suficiente');
            }
            alert(`Tu saldo actual es: ${saldoFinal}`);
            mostrarMenu();
            break;
        case '3':
            //depositar dinero
            const montoDeposito = prompt('Digite el monto a depositar: ');
            const saldoFinalDeposito = cuenta.depositarSaldo(user, montoDeposito);
            alert(`Tu saldo actual es: ${saldoFinalDeposito}`);
            mostrarMenu();  
            break;
        case '4':
            alert('Cambiar de contraseña');
            mostrarMenu();  
            break;
        case '5':
            //Consultar todos los datos de la cuenta
            alert(`datos de la cuenta: ${
                JSON.stringify(usuario.getUsuario(user))
            }`);
            mostrarMenu();
            break;
        case '6':
            console.log('Gracias por usar nuestros servicios');
            break;
        default:
            console.log('Opción no válida');
            mostrarMenu();
            break;
    }
}

// Inicia el menú
mostrarMenu();