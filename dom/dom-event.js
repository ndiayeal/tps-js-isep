/* let spn = document.getElementById("SPN");
let ig = document.querySelector("#IG");

spn.addEventListener("click", (event) => {
  alert(" Sorbonne!");
});

spn.addEventListener("click", (event) => {
  console.log(" Sorbonne !");
});

ig.addEventListener("mouseover", (event) => {
  console.log(" Galilée !");
}); */

window.addEventListener("load", (event) => {
  let spn = document.getElementById("SPN");
  let ig = document.querySelector("#IG");

  spn.addEventListener("click", (event) => {
    alert(" Sorbonne!");
  });

  spn.addEventListener("click", (event) => {
    console.log(" Sorbonne !");
  });

  ig.addEventListener("mouseover", (event) => {
    console.log(" Galilée !");
  });
});
