<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica si el contenido del editor se ha enviado correctamente
    if(isset($_POST['editor'])) {
        // Recupera el contenido enviado por el formulario
        $contenido = $_POST['editor'];

        // Genera un nombre de archivo único basado en la fecha y hora actual
        $nombre_archivo = 'contenido_' . date("Y-m-d_H-i-s") . '.txt';

        // Ruta donde se guardarán los archivos
        $ruta_archivos = 'C:/xampp/htdocs/editor-tinymce-master/archivos_guardados/';

        // Verifica si la carpeta de archivos guardados existe, si no, créala
        if (!file_exists($ruta_archivos)) {
            mkdir($ruta_archivos, 0777, true);
        }

        // Guarda el contenido en el archivo en la ruta especificada
        if (file_put_contents($ruta_archivos . $nombre_archivo, $contenido) !== false) {
            // Devuelve un mensaje de éxito
            echo "Contenido guardado correctamente en " . $ruta_archivos . $nombre_archivo;
        } else {
            // Si ocurre un error al guardar el archivo, devuelve un mensaje de error
            echo "Error al guardar el archivo.";
        }
    } else {
        // Si el contenido del editor no se ha recibido, devuelve un mensaje de error
        echo "El contenido del editor no se ha recibido.";
    }
} else {
    // Si la solicitud no es de tipo POST, devuelve un mensaje de error
    echo "Método de solicitud no soportado.";
}
?>

