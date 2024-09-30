
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ruta de destino para el archivo subido
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $uploadOk = 1;
    $fileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    // Verifica si el archivo es un archivo .docx
    if ($fileType != "docx") {
        echo "Lo siento, solo se permiten archivos .docx.";
        $uploadOk = 0;
    }

    // Verifica si $uploadOk es 0 debido a un error
    if ($uploadOk == 0) {
        echo "Lo siento, tu archivo no fue subido.";
    } else {
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            echo "El archivo ". htmlspecialchars(basename($_FILES["fileToUpload"]["name"])) . " ha sido subido.";
        } else {
            echo "Lo siento, hubo un error al subir tu archivo.";
        }
    }
}
?>
