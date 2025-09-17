// Llegir: https://lenguajejs.com/javascript/introduccion/como-funciona/

// La forma clàssica d'arrencar Javascript abans de carregar tota la pàgina és:
// window.onload = function() {
// Afegir un event per controlar-ho és més adequat:
document.addEventListener("DOMContentLoaded", function() {
  let altitud = 8;
  let amplada = 3;

  let mult = a * b;
  let missatge = a + " × " + b + " = " + mult

  document.getElementById("resultats").innerHTML = missatge;
});