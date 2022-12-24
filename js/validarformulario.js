document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  
  let nombre = document.getElementById ('nombre').value;
  let nombresinespacios = nombre.replace(/\s/g,""); // almaceno en nombressinespacios para no contabilizar los espacios en blanco
  if(!isNaN(nombresinespacios) || nombresinespacios.length < 4) {
    alert('El nombre debe tener como mínimo 4 letras');
    return;
  }

  let apellidos = document.getElementById ('apellidos').value;
  let apellidossinespacios = apellidos.replace(/\s/g,"");  // almaceno en apellidossinespacio para no contabilizar los espacios en blanco
  if(!isNaN(apellidossinespacios) || apellidossinespacios.length < 8) {  // tengo que hacer que sean 4caracteres y 4caracteres mínimo
    alert('Los apellidos debe tener como mínimo 4 letras cada uno');
    return;
  }

  let sugerencias = document.getElementById ('sugerencias').value;
  if(sugerencias.length > 400) {
    alert('Las sugerencias no pueden tener más de 400 caracteres');
    return;
  }

  let email = document.getElementById ('email').value;
  let emailvalido = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;  // este es más genérico /^(.+\@.+\..+)$/

	if(!emailvalido.test(email) ){
		alert('El email introducido no es válido');
		return;
	}

  let tel = document.getElementById ('tel').value;
  let telvalido = /^\(\+\d{2,3}\)\d{9}$/; // adaptar para que solamente coja el 34, ahora coge cualquiera de dos cifras
	
  if(!telvalido.test(tel) ){
		alert('El teléfono introducido no es válido');
		return;
	}  
  
this.submit();
}