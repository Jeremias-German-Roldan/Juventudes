function validateForm() {
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;

    // Validación básica
    if (name.trim() === '' || message.trim() === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return false;
    }

    // Si pasa todas las validaciones, muestra el mensaje de éxito y reinicia el formulario
    showSuccessMessage();
    resetForm();

    // Evita el envío real del formulario
    return false;
}

function showSuccessMessage() {
    var successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('hidden');
}

function resetForm() {
    document.getElementById('contactForm').reset();
}

//subir archivo 

document.getElementById('formularioSubida').addEventListener('submit', async (event) => {
    event.preventDefault();  // Evita que el formulario se envíe de la manera tradicional

    const archivoInput = document.getElementById('archivo');
    const archivo = archivoInput.files[0];

    if (!archivo) {
        alert('Por favor, selecciona un archivo para subir.');
        return;
    }

    const formData = new FormData();
    formData.append('file', archivo);

    try {
        const respuesta = await fetch('https://ejemplo.com/subir', {  // Cambia esta URL a la del servidor que maneje la subida
            method: 'POST',
            body: formData,
        });

        if (respuesta.ok) {
            alert('Archivo subido exitosamente.');
        } else {
            alert(`Error al subir el archivo: ${respuesta.status}`);
        }
    } catch (error) {
        console.error('Error al subir el archivo:', error);
        alert('Error al subir el archivo.');
    }
});