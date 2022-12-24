document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();

  // INICIO VALIDACIÓN CAMPO NOMBRE
  
  let nombre = document.getElementById ('nombre').value;
  let nombresinespacios = nombre.replace(/\s/g,""); // almaceno en 'nombressinespacios' para no contabilizar los espacios en blanco
  if(!isNaN(nombresinespacios) || nombresinespacios.length < 4) { // hago que no puedan introducir números y que sean como mínimo 4 letras
    alert('El nombre debe tener como mínimo 4 letras');
    return;
  }

   // FIN VALIDACIÓN CAMPO NOMBRE

   // INICIO VALIDACIÓN CAMPO APELLIDOS

  let apellidos = document.getElementById ('apellidos').value;
  let apellidossinespacios = apellidos.replace(/\s/g,"");  // almaceno en 'apellidossinespacio' para no contabilizar los espacios en blanco
  if(!isNaN(apellidossinespacios) || apellidossinespacios.length < 8) {  // hago que no puedan introducir números y que sean como mínimo 4 letras
    alert('Los apellidos deben tener como mínimo 4 letras cada uno'); // me falta hacer 4 letras mínimo CADA APELLIDO (ahora funciona con 5 letras el primer apellido, un espacio y 3 letras el segundo, por ejemplo)
    return;
  }

   // FIN VALIDACIÓN CAMPO APELLIDOS

   // INICIO VALIDACIÓN CAMPO COMENTARIOS

  let sugerencias = document.getElementById ('sugerencias').value;
  if(sugerencias.length > 400) {
    alert('Has escrito ' + sugerencias.length + ' ' + 'caracteres.' + ' ' + 'Los comentarios no pueden tener más de 400 caracteres');
    return;
  }

  // FIN VALIDACIÓN CAMPO COMENTARIOS

  let email = document.getElementById ('email').value;
  let emailvalido = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;  // este es más genérico /^(.+\@.+\..+)$/

  // INICIO VALIDACIÓN CAMPO EMAIL

	if(!emailvalido.test(email) ){
		alert('El email no es válido. Por favor introduce un formato de email válido');
		return;
	}

  // FIN VALIDACIÓN CAMPO EMAIL

  // INICIO VALIDACIÓN CAMPO TELÉFONO

  let tel = document.getElementById ('tel').value;
  let telvalido = /^\(\+\d{2,3}\)\d{9}$/; // me falta adaptar para que solamente coja el 34, ahora coge cualquiera de dos cifras
	
  if(!telvalido.test(tel) ){
		alert('El teléfono no es válido. Utiliza el formato (+34) seguido de 9 dígitos (todo escrito sin poner ningún espacio)');
		return;
	}  

  // FIN VALIDACIÓN CAMPO TELÉFONO

this.submit();
alert('El formulario se ha enviado correctamente');

}