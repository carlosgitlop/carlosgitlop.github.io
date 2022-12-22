var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("ocultanavbar").style.top = "0";
  } else {
    document.getElementById("ocultanavbar").style.top = "-80px"; /* ajusto este valor para el alto de la cabecera */
  }
  prevScrollpos = currentScrollPos;
}