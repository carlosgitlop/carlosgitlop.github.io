<?php

// Comprobar cómo se llama al script.

if (isset($_POST['ok'])) {

// Comprobamos los campos

  $nombre = trim($_POST['nombre']);
  $apellidos = trim($_POST['apellidos']);
  $email = trim($_POST['email']);
  $tel = trim($_POST['tel']);
  $sugerencias = trim($_POST['sugerencias']);
  
// Controlar los valores introducidos

// Inicio Controlar el campo nombre

  $mensaje='';
  if ($nombre == ''){ $mensaje .= "El nombre es obligatorio.\n"; }

    $patron_nombre ='#^[A-ZÑa-zñáéíóúÁÉÍÓÚ-]{4,15}[\s]{0,1}[A-ZÑa-zñáéíóúÁÉÍÓÚ-]{0,15}$#';

  if (!preg_match($patron_nombre, $nombre) ){ 
    $mensaje .= "El nombre debe tener como mínimo 4 letras (máximo 15). Si es compuesto sería de la forma (15 letras + 15 letras máximo) y no pueden contener números\n"; } 

// Fin Controlar el campo nombre

// Inicio Controlar el campo apellidos

  if ($apellidos == ''){ $mensaje .= "Los apellidos son obligatorios.\n"; }

  $patron_apellidos = '#^[A-ZÑa-zñáéíóúÁÉÍÓÚ-]{4,20}[\s]{0,1}[A-ZÑa-zñáéíóúÁÉÍÓÚ-]{4,20}$#';

 if (!preg_match($patron_apellidos, $apellidos) ){ 
  $mensaje .= "Los apellidos deben tener como mínimo 4 letras (máximo 20) cada uno y no pueden contener números. Deben tener este formato: primer apellido'espacio'segundo apellido'\n"; }

// Fin Controlar el campo apellidos

// Inicio Controlar el campo comentarios

if (!strlen($sugerencias) < 400) { 
$mensaje .= "Los comentarios no pueden tener más de 400 caracteres'\n"; }

// Fin Controlar el campo comentarios

// Inicio Controlar el campo email

if ($email == ''){ $mensaje .= "El email no puede estar vacío.\n"; }

$patron_email = '#^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$#';

if (!preg_match($patron_email, $email) ){ 
$mensaje .= "El email no es válido. Por favor introduce un formato de email válido'\n"; }

// Fin Controlar el campo email

// Inicio Controlar el campo teléfono

if ($tel == ''){ $mensaje .= "El teléfono no puede estar vacío.\n"; }

$patron_tel = '#^\(\+\d[34]\)\d{9}$#';

if (!preg_match($patron_tel, $tel) ){ 
$mensaje .= "El teléfono no es válido. Por favor introduce un formato de teléfono válido'\n"; }

// Fin Controlar el campo teléfono

} else {
  $nombre='';
  $mensaje='';
  $apellidos='';
  $email='';
  $tel='';

}

echo $nombre, $apellidos, $email, $tel;
echo $mensaje;

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

    <!-- Formulario -->

<form id="formulario" method="post">
        <fieldset>
            <legend id="datos_personales">Datos Personales</legend>
            <label for="nombre">NOMBRE *</label>
            <input type="text" id="nombre" name="nombre" class="mediana" value="<?php echo $nombre; ?>" />
            <label for="apellidos">APELLIDOS *</label>
            <input type="text" id="apellidos" name="apellidos" placeholder="Primer y segundo apellido" class="mediana" value="<?php echo $apellidos; ?>" />
        </fieldset>
        <fieldset>
            <legend>Datos de Contacto</legend>
            <label for="email">EMAIL *</label>
            <input type="email" id="email" name="email" class="mediana" value="<?php echo $email; ?>" />
            <label for="tel">TELÉFONO *</label>
            <input type="tel" id="tel" name="tel" placeholder="ej:(+34)123456789" value="(+34)" class="mediana" value="<?php echo $tel; ?>" />
            <label for="direccion">DIRECCIÓN</label>
            <input type="text" id="direccion" name="direccion" class="mediana">
            <label for="cp">C.P.</label>
            <input type="number" id="cp" name="cp" class="mediana" maxlength="5">
            <label for="ciudad">CIUDAD</label>
            <input type="text" id="ciudad" name="ciudad" class="mediana">
        </fieldset>
        <fieldset>
            <legend>Comentarios</legend>
            <label for="sugerencias"><em>Pregúntanos precio sin ningún compromiso</em></label>
            <textarea id="sugerencias" name="sugerencias" class="grande" rows="7" placeholder="Máximo 400 caracteres"></textarea>
        </fieldset>
        <fieldset>
            <input type="submit" value="Envíar datos" name="ok" class="margen-submit">
            <?php echo $mensaje; ?>
            <input type="reset" value="Borrar datos" class="margen-submit">
            <input type="hidden" id="referencia" value="123456">
        </fieldset>
    </form>
</body>
</html>


