document.getElementById('generarBtn').addEventListener('click', generarTabla);
document.getElementById('numeroInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        generarTabla();
    }
});

function generarTabla() {
    const input = document.getElementById('numeroInput');
    const numero = parseInt(input.value);
    const container = document.getElementById('tablasContainer');

    // Validar entrada
    if (isNaN(numero) || numero < 1) {
        alert('Por favor ingresa un número válido (mayor a 0)');
        input.focus();
        return;
    }

    // Crear la tabla
    const tabla = document.createElement('div');
    tabla.className = 'tabla';

    // Título de la tabla
    const titulo = document.createElement('div');
    titulo.className = 'tabla-titulo';
    titulo.textContent = `Tabla del ${numero}`;

    // Contenido de la tabla
    const contenido = document.createElement('div');
    contenido.className = 'tabla-contenido';

    // Generar filas (del 1 al 10)
    for (let i = 1; i <= 10; i++) {
        const fila = document.createElement('div');
        fila.className = 'fila';

        const operacion = document.createElement('span');
        operacion.className = 'numero';
        operacion.textContent = `${numero} × ${i}`;

        const resultado = document.createElement('span');
        resultado.className = 'resultado';
        resultado.textContent = numero * i;

        fila.appendChild(operacion);
        fila.appendChild(resultado);
        contenido.appendChild(fila);
    }

    tabla.appendChild(titulo);
    tabla.appendChild(contenido);
    
    // Limpiar contenedor y añadir la nueva tabla
    container.innerHTML = '';
    container.appendChild(tabla);

    // Limpiar input y enfocarlo
    input.value = '';
    input.focus();
}

// Enfocar el input al cargar la página
document.getElementById('numeroInput').focus();
