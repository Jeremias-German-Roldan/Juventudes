document.addEventListener('DOMContentLoaded', function(){
    const searchBox = document.getElementById('buscar');
    const itemList = document.getElementById('contenedor_ca');
    const items = itemList.getElementsByTagName('carpeta_archivo');

    searchBox.addEventListener('keyup', function() {
        const filter = searchBox.value.toLowerCase();

        for (let i = 0; i < items.length; i++) {
            const text = items[i].textContent || items[i].innerText;

            if (text.toLowerCase().indexOf(filter) > -1) {
                items[i].style.display = "";
            } else {
                items[i].style.display = "none";
            }
        }
    
    })
});