// Importar archivo de datos (asegúrate de que data.js exporte un arreglo de usuarios)

export default class Usuarios {
    constructor() {
        this.cuentas = JSON.parse(localStorage.getItem('cuentas'));
    }
    //buscar usuario en el localstorage
    login(correo, password) {
        try {
            const usuarios = JSON.parse(localStorage.getItem('cuentas'));
            for (let i = 0; i < this.cuentas.length; i++) {
                if (this.cuentas[i].email === correo.value && this.cuentas[i].password === password.value) {
                    return true;
                }
            }
            return false;
        }
        catch (error) {
            console.log(error);
        }
    }
    //setear el login en el localstorage
    setLogin(correo) {
        try {
            const login = [];
            login.push({
                correo: correo.value,
                token: this.createToken()
            });
            localStorage.setItem('login', JSON.stringify(login));
        }
        catch (error) {
            console.log(error);
        }
    }
    createToken() {
        try {
            const token = Math.random().toString(36).substr(2);
            return token;
        }
        catch (error) {
            console.log(error);
        }
    }

    //cerrar sesion
    logout() {
        try {
            localStorage.removeItem('login');
        }
        catch (error) {
            console.log(error);
        }
    }
}