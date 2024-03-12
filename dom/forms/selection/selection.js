"use strict";

function modifier(e) {
  let el = e.target;
  console.log(document.getElementById("resu  ltat").value);
  console.log(el.options[el.selectedIndex].value);
  document.getElementById("resultat").value = document.getElementById("resultat").value + " " + el.options[el.selectedIndex].value;
}

window.addEventListener("load", function () {
  document.querySelector("#liste").addEventListener("change", modifier);
});
