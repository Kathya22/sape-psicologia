<?php

$destinatario = "informes@sapepsicologos.com"; // 👈 correo del cliente

$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$tipo = $_POST['tipo_atencion'];
$modalidad = $_POST['modalidad'];
$mensaje = $_POST['mensaje'];

$contenido = "Nombre: $nombre\n";
$contenido .= "Teléfono: $telefono\n";
$contenido .= "Correo: $correo\n";
$contenido .= "Tipo de atención: $tipo\n";
$contenido .= "Modalidad: $modalidad\n";
$contenido .= "Mensaje: $mensaje\n";

$headers = "From: $correo";

mail($destinatario, "Nueva solicitud desde la web", $contenido, $headers);

// Redireccionar después de enviar
header("Location: gracias.html");
exit;

?>