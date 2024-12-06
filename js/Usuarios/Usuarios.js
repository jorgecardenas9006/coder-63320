// Importar archivo de datos (asegúrate de que data.js exporte un arreglo de usuarios)

export default class Usuarios {
    constructor() {
        this.cuentas = JSON.parse(localStorage.getItem('cuentas'));
        this.correo = document.getElementById('loginEmail').value;
        this.password = document.getElementById('loginPassword').value;
    }
    mostrarUsuarios() {
        console.log(this.correo);
        console.log(this.password);
    }
    //buscar usuario en el localstorage
    login() {
        try {
            const usuarios = JSON.parse(localStorage.getItem('cuentas'));
            for (let i = 0; i < this.cuentas.length; i++) {
                if (this.cuentas[i].email === this.correo && this.cuentas[i].password === this.password) {
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
    setLogin() {
        try {
            const login = [];
            login.push({
                correo: this.correo,
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
}