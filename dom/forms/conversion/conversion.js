function convertirChamp(idChamp) {
  if (document.querySelector("#maj").checked)
    idChamp.value = idChamp.value.toUpperCase();
  else if (document.querySelector("#min").checked)
    idChamp.value = idChamp.value.toLowerCase();
}

function convertirTout(e) {
  let formulaire = document.getElementById("formulaire");
  convertirChamp(formulaire.nom);
  convertirChamp(formulaire.prenom);
  convertirChamp(formulaire.ville);
}

window.addEventListener("load", function () {
  document.querySelector("#maj").addEventListener("click", convertirTout);
  document.querySelector("#min").addEventListener("click", convertirTout);
  document
    .querySelector("#ville")
    .addEventListener("change", (e) => convertirChamp(e.target));

  document.querySelector("#reinitialiser").addEventListener("click", (e) => {
    document.getElementById("formulaire").reset();
  });
});
