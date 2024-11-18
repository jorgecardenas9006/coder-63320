//importar data.js
import cuentas from '../../data/data.js';

export default class Cuentas {
    constructor() {
        this._cuentas = [];
        this._data = cuentas;
    }
        getCuentas() {
            return this._cuentas;
        }
    
        setCuentas(cuenta) {
            this._cuentas.push(cuenta);
        }
    
        getCuenta(cuenta) {
            return this._data.find(u => u.usuario === cuenta);
        }
        consultarSaldo(cuenta) {
            let u = this.getCuenta(cuenta);
            if (u) {
                return u.saldoCuentaAhorros;
            }
            return false;
        }
        retirarSaldo(cuenta, monto) {
            const cuentaCliente = this.getCuenta(cuenta);
            if(cuentaCliente.saldoCuentaAhorros >= monto) {
                const nuevoSaldo = cuentaCliente.saldoCuentaAhorros -= monto;
                this._data.find(u => u.usuario === cuenta).saldoCuentaAhorros = nuevoSaldo;
                return cuentaCliente.saldoCuentaAhorros;
            }
            return false;
        }
        depositarSaldo(cuenta, monto) {
            const cuentaCliente = this.getCuenta(cuenta);
            const nuevoSaldo = cuentaCliente.saldoCuentaAhorros += monto;
            this._data.find(u => u.usuario === cuenta).saldoCuentaAhorros = nuevoSaldo;
            return cuentaCliente.saldoCuentaAhorros;
        }
}