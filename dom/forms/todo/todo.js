"use strict";

function modifier(e) {
  let el = e.target;
  document.getElementById("resultat").value = document.getElementById("resultat").value + " " + el.options[el.selectedIndex].value;
}

window.addEventListener("load", function () {
  document.querySelector("#liste").addEventListener("change", modifier);
});
