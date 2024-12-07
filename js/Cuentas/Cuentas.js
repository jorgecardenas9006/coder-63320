export default class Cuentas {
    constructor() {
        this.cuentas = JSON.parse(localStorage.getItem('cuentas'));
    }

    getCuentas() {
        return this.cuentas;
    }
    getCuentaByCorreo(correo) {
        try {
            for (let i = 0; i < this.cuentas.length; i++) {
                if (this.cuentas[i].email === correo) {
                    return this.cuentas[i];
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    retirarDinero(correo, valorRetiro){
        try{
            const cuenta = this.getCuentaByCorreo(correo);
            const saldoActual = cuenta.saldoCuentaAhorros;
            if(saldoActual < valorRetiro){
                return alert('Saldo insuficiente');
            }
            const nuevoSaldo = saldoActual - valorRetiro
            cuenta.saldoCuentaAhorros = nuevoSaldo;
            this.actualizarCuentaUsuario();
        }
        catch{
            console.error(error);
        }
    }
    actualizarCuentaUsuario(){
        try{
            localStorage.setItem('cuentas', JSON.stringify(this.cuentas));
        }
        catch{
            console.error(error);
        }
    }
}
