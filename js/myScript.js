function validarEdad() {
            // Pregunta al usuario su edad y guarda la respuesta
            let edad = prompt("Para acceder a 'Destilación Nocturna', por favor ingresa tu edad:");

            // Verifica si la edad ingresada es 18 o mayor (o si se canceló el prompt/no se ingresó nada)
            // Asumiendo que la mayoría de edad para consumo de alcohol es 18 años.
            if (edad === null || edad === "" || isNaN(edad) || parseInt(edad) < 18) {
                // Si el usuario cancela, no ingresa nada o es menor de 18
                alert("Debes ser mayor de 18 años para ver el contenido de esta página.");
                
                // Redirige al usuario a otra página (ej: Google, o una página de error)
                window.location.href = "index.html"; 
            } else {
                // Si es mayor o igual a 18
                alert("¡Bienvenido! Disfruta de la experiencia.");
            }
        }
        // Ejecuta la función tan pronto como el script es cargado
validarEdad();


// Inicializa un objeto para almacenar los votos (para persistencia simple en esta sesión)
// En un entorno real, esto se manejaría con una base de datos.
let votos= {
'vodka': 120,
'mezcal': 95,
'ron': 150,
'tequila': 180
};

// Obtiene todos los íconos de corazón
const botonesVoto = document.querySelectorAll('.bi-heart');
botonesVoto.forEach(boton => {
    boton.addEventListener('click', function() {
    // Obtiene el ID del producto al que pertenece el botón
    const productoId = this.getAttribute('data-votos-id');
    const elementoVotos = document.getElementById(`votos_${productoId}`);
    if (productoId && elementoVotos) {
    // Incrementa el contador de votos
    votos[productoId]++;
    // Actualiza el texto en la página
    elementoVotos.textContent = `${votos[productoId]} Votos`;
        }
    });
});