const cuentas = async () => {
    try {
        const response = await fetch('../data/data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}
const saveCuentasLocalStorage = async (cuentas) => {
    try {
        localStorage.setItem('cuentas', JSON.stringify(cuentas));
    } catch (error) {
        console.error('Error al guardar los datos en el local storage:', error);
    }
}
export { cuentas, saveCuentasLocalStorage };
