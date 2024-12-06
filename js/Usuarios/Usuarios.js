// Importar archivo de datos (asegúrate de que data.js exporte un arreglo de usuarios)

export default class Usuarios {
    constructor() {
        this.correo = document.getElementById('loginEmail').value;
        this.password = document.getElementById('loginPassword').value;
    }
    mostrarUsuarios() {
        console.log(this.correo);
        console.log(this.password);
    }
    //buscar usuario en el localstorage
    login() {
        const usuarios = JSON.parse(localStorage.getItem('cuentas'));
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email === this.correo && usuarios[i].password === this.password) {
                return true;
            }
        }
        return false;
    }



}