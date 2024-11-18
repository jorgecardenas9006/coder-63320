// Importar archivo de datos (asegúrate de que data.js exporte un arreglo de usuarios)
import cuentas from '../../data/data.js';

export default class Usuarios {
    constructor() {
        this._usuarios = cuentas; // Asegúrate de que data sea un arreglo de usuarios [{ usuario, senha }]
    }

    getUsuario(usuario) {
        return this._usuarios.find(u => u.usuario === usuario);
    }

    login(usuario, password) {
        let u = this.getUsuario(usuario);
        if (u && u.password === password) {
            return true;
        }
        return false;
    }

    solicitarUsuario() {
        let usuario = prompt('Por favor digite su usuario: ');
        return usuario;
    }

    solicitarPassword() {
        let password = prompt('Por favor digite su contraseña: ');
        return password;
    }
}