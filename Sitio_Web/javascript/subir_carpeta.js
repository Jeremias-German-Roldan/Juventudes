document.getElementsById('carpetas').addEventListener('submit', async(event)=> {
    event.preventDefault();

    const CarpetaInput = folderElementById('Carpeta');
    const carpeta = CarpetaInput.files [0];

    if(!carpeta){
        alert("Elige un archivo para subir");
        return;
    }

    const formData = newformData;
    formData.append('folder', carpeta);

    try{
        const respuesta = await fetch('https://ejemplo.com/subir',{
            method: 'post',
            body: formData
        });
        if (respuesta.ok) {
            alert('Archivo subido exitosamente.');
        } else {
            alert(`Error al subir el archivo: ${respuesta.status}`);
        }
    } catch(error){
        console.error('Error al subir la carpeta', error);
        alert('Error al subir la carpeta');
        
    }
})