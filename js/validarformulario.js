// INICIO VALIDACIÓN FORMULARIO

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();

  // INICIO VALIDACIÓN CAMPO NOMBRE
  
  let nombre = document.getElementById ('nombre').value.trim();
  let nombrevalido =  /^[A-ZÑa-zñáéíóúÁÉÍÓÚ-]{4,15}[\s]{0,1}[A-ZÑa-zñáéíóúÁÉÍÓÚ-]{0,15}$/; // Con esta exp. reg. hago que no coja números y que permita nombres compuestos con un único espacio entre el nombre. Además de extensión entre 4 y 15 letras.

  if(!nombrevalido.test(nombre)) {
    Swal.fire({
      icon: 'warning',
      title: 'Advertencia',
      text: 'El nombre debe tener como mínimo 4 letras (máximo 15). Si es compuesto sería de la forma (15 letras + 15 letras máximo) y no pueden contener números',
    })
    return;
  }

  // FIN VALIDACIÓN CAMPO NOMBRE

  // INICIO VALIDACIÓN CAMPO APELLIDOS

  let apellidos = document.getElementById ('apellidos').value;
  let apellidosvalido =  /^[A-ZÑa-zñáéíóúÁÉÍÓÚ-]{4,20}[\s]{0,1}[A-ZÑa-zñáéíóúÁÉÍÓÚ-]{4,20}$/; // almaceno en 'apellidosvalido' exp. reg. para que el apellido tenga este formato: (primer apellido'un espacio'segundo apellido). Además evito que se puedan poner números pero si guiones pues hay apellidos compuestos por guiones (antes estaba usando este /^[a-zA-Z]{4,}[^a-z][a-zA-Z]{4,}$/)

  if(!apellidosvalido.test(apellidos)) {
    Swal.fire({
      icon: 'warning',
      title: 'Advertencia',
      text: 'Los apellidos deben tener como mínimo 4 letras (máximo 20) cada uno y no pueden contener números. Deben tener este formato: primer apellido"espacio"segundo apellido',
    })
    return;
  }

  // FIN VALIDACIÓN CAMPO APELLIDOS

  // INICIO VALIDACIÓN CAMPO COMENTARIOS

  let sugerencias = document.getElementById ('sugerencias').value;
  
  if(sugerencias.length > 400) {
    Swal.fire({
      icon: 'warning',
      title: 'Advertencia',
      text: 'Has escrito ' + sugerencias.length + ' ' + 'caracteres.' + ' ' + 'Los comentarios no pueden tener más de 400 caracteres',
    })
    return;
  }

  // FIN VALIDACIÓN CAMPO COMENTARIOS

  // INICIO VALIDACIÓN CAMPO EMAIL

  let email = document.getElementById ('email').value;
  let emailvalido = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;  // este es más genérico /^(.+\@.+\..+)$/

	if(!emailvalido.test(email) ){
    Swal.fire({
      icon: 'warning',
      title: 'Advertencia',
      text: 'El email no es válido. Por favor introduce un formato de email válido',
    })
		return;
	}

  // FIN VALIDACIÓN CAMPO EMAIL

  // INICIO VALIDACIÓN CAMPO TELÉFONO

  let tel = document.getElementById ('tel').value;
  let telvalido = /^\(\+\d[34]\)\d{9}$/;
	
  if(!telvalido.test(tel) ){
    Swal.fire({
      icon: 'warning',
      title: 'Advertencia',
      text: 'El teléfono no es válido. Utiliza el formato (+34) seguido de 9 dígitos (todo escrito sin poner ningún espacio)',
    })
		return;
	}  

  // FIN VALIDACIÓN CAMPO TELÉFONO

  Swal.fire({
    icon: 'success',
    title: 'El formulario se ha enviado correctamente',
    showConfirmButton: false,
    timer: 1500
  })
this.submit();

}

// FIN VALIDACIÓN FORMULARIO