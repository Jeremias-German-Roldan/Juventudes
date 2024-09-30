/*
const openvm = document.querySelector('.imgporta');
const vm = document.querySelector('.vm');

openvm.addEventListener('click', ()=>{
    //e.preventDefault();
    //alert("Hola");
    vm.classList.add('.show');
})
*/


var selectedLink = ""; // Variable para almacenar el enlace seleccionado

    function openLoginModal(link) {
        selectedLink = link; // Guardar el enlace de la página a la que se quiere ir
        document.getElementById("loginModal").style.display = "block"; // Mostrar el modal
    }

    function closeLoginModal() {
        document.getElementById("loginModal").style.display = "none"; // Ocultar el modal
    }

    // Validación del formulario
    function validateForm() {
        var username = document.getElementById("name").value;
        var password = document.getElementById("password").value;

        // Validación básica de usuario y contraseña (puedes ajustar la lógica según tus necesidades)
        if (username === "admin" && password === "1234") {
            // Cerrar el modal y redirigir si los datos son correctos
            closeLoginModal();
            window.location.href = selectedLink;
            return false; // Evitar el envío del formulario
        } else {
            alert("Usuario o contraseña incorrectos");
            return false; // Evitar el envío del formulario
        }
    }

    // Cerrar el modal si se hace clic fuera del formulario
    window.onclick = function(event) {
        var modal = document.getElementById("loginModal");
        if (event.target == modal) {
            closeLoginModal();
        }
    }