<?php
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

// Hashing de la contraseña
$hashed_password = password_hash("password123", PASSWORD_DEFAULT);

$sql = "INSERT INTO administracion (usuario, contraseña) VALUES ('user1', '$hashed_password')";

if ($conn->query($sql) === TRUE) {
    echo "Nuevo registro creado correctamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>