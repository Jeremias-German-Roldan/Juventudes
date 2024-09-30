<?php
user_password();

$administracion = "localhost";
$usuario = "root";
$contraseña = "";
$dbname = "test_db";

// Crear conexión
$conn = new mysqli($administracion, $usuario, $contraseña, $dbname);

// Comprobar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$usuario = $_POST['usuario'];
$contraseña = $_POST['contraseña'];

// Preparar y ejecutar consulta
$sql = $conn->prepare("SELECT id, contraseña FROM users WHERE usuario = ?");
$sql->bind_param("s", $usuario);
$sql->execute();
$sql->store_result();
$sql->bind_result($id, $hashed_contraseña);
$sql->fetch();

if ($sql->num_rows > 0 && password_verify($contraseña, $hashed_contraseña)) {
    // Autenticación exitosa
    $_SESSION['id'] = $id;
    $_SESSION['usuario'] = $usuario;
    header("Location: welcome.php");
} else {
    // Autenticación fallida
    echo "Nombre de usuario o contraseña incorrectos.";
}

$sql->close();
$conn->close();
?>