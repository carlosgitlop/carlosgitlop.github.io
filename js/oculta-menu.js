document.addEventListener('DOMContentLoaded', function() {
  eventListeners();
})

function eventListeners() {
  const mobileMenu = document.querySelector('.mostrar-menu');
  mobileMenu.addEventListener("click", navegacionResponsive);
}

function navegacionResponsive() {
  document.getElementById("idMobile").classList.toggle("mobile");
}
