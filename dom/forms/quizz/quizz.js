function avertissement(e) {
  if (e.target.checked === true) {
    alert("N'importe quoi !");
  }
}

function verification(e) {
  let c1 = document.querySelector("#besson");
  let c2 = document.querySelector("#ducournau");
  let c3 = document.querySelector("#imamura");
  let c4 = document.querySelector("#tarantino");
  let c5 = document.querySelector("#vansant");
  if (c1.checked === false && c2.checked === true && c3.checked === true && c4.checked === true && c5.checked === true)
    alert(" Bonne réponse !");
  else alert("Faux , retournez au cinéma !");
}

document.querySelector("#verifier").addEventListener("click", verification);
document.querySelector("#reinitialiser").addEventListener("click", (e) => {
  document.getElementById("formulaire").reset();
});
document.querySelector("#besson").addEventListener("click", avertissement);
