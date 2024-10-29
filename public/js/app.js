const input = document.getElementById('input');
const resultado = document.getElementById('resultado');

document.getElementById('validar').addEventListener('click', () => {
    const regexMatch = input.value.match(/^\/(.*)\/$/);
    if (regexMatch) {
        const regex = new RegExp(regexMatch[1]);
        Swal.fire({
            title: regex.test(resultado.value) ? 'Éxito' : 'Error',
            text: regex.test(resultado.value) ? "¡La expresión y el valor hacen match!" : "Error: No hay coincidencias.",
            icon: regex.test(resultado.value) ? 'success' : 'error',
            confirmButtonText: 'Aceptar'
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: 'La expresión regular debe estar entre barras diagonales',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    }
});

document.getElementById('limpiar').addEventListener('click', () => {
    input.value = '';
    resultado.value = '';
});
