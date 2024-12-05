// Importar archivo de datos (asegúrate de que data.js exporte un arreglo de usuarios)
import cuentas from '../../data/data.js';

export default class Usuarios {
    constructor() {
        this._usuarios = cuentas; // Asegúrate de que data sea un arreglo de usuarios [{ usuario, senha }]
        this.correo = document.getElementById('loginEmail').value;
        this.password = document.getElementById('loginPassword').value;
    }

    // Método para iniciar sesión
    login() {
        let usuario = this._usuarios.find(user => user.correo === this.correo);
        if (usuario) {
            if (usuario.password === this.password) {
                return true;
            }
        }
        return false;
    }


}