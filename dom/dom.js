//// ---- Sélection d’éléments du DOM
/// getElementById, getElementsByTagName, getElementsByClassName
let premier = document.getElementById("p1");
console.log(premier.nodeName ,premier.id); // affiche "P p1"

let paragraphes = document.getElementsByTagName("p");
console.log(paragraphes[1].nodeName, paragraphes[1].id); // affiche "P p2"

// let mains = document.getElementsByClassName("main");
// console.log( mains[0].nodeName , mains[0].className); // affiche " SECTION main "

/// querySelector, querySelectorAll, querySelectorAll
/* let premier = document.querySelector("#p1");
console.log(premier.nodeName, premier .id); // affiche "P p1"

let paragraphes = document.querySelectorAll("p");
console.log(paragraphes[1].nodeName, paragraphes[1].id); // affiche "P p2"

let mains = document.querySelectorAll(".main");
console.log(mains[0].nodeName, mains[0].className); // affiche " SECTION main " */
//// ---- Fin Sélection d’éléments du DOM

//// ---- Déplacement dans le DOM
/// previousSibling, nextSibling

/* let noeud = document.querySelector("#titre")
console.log(noeud.nodeName); // affiche "H1"

let parent = noeud.parentNode;
console.log(parent.nodeName); // affiche "BODY"

let frere_precedent = noeud.previousSibling;
let frere_suivant = noeud.nextSibling;

console.log(frere_precedent.nodeName); // affiche "#text"
console.log(frere_suivant.nodeName); // affiche "#text" */

/// firstChild, firstElementChild, lastChild, lastElementChild
/* let noeud = document.querySelector("body");
let fs = noeud.firstChild;

console.log(fs.nodeName); // affiche "#text"
console.log(noeud.firstElementChild.nodeName); // affiche "H1"
console.log(noeud.firstElementChild.firstChild.textContent); // affiche "JavaScript - Le DOM" */

/// childNodes, childElementCount, textContent
/* let noeud = document.querySelector("body");
let enfants = noeud.childNodes;

console.log(enfants[3].nodeName); // affiche "SECTION"
console.log(enfants.length); // affiche "6"
console.log(noeud.childElementCount); // affiche "3"
console.log(noeud.firstElementChild.firstChild.textContent); // affiche "JavaScript - Le DOM" */

//// ---- Fin Déplacement dans le DOM

//// ---- Modification du DOM
/// createElement, nextSibling
/* let noeud = document.querySelector("body");
let b = document.createElement("b");
let t = document.createTextNode('Bienvenue');
//noeud.appendChild(t);

b.setAttribute("id", "tresgras");
b.setAttribute("class","test-class");
b.innerHTML = 'Text en gras';
noeud.appendChild(b); */



//// ---- Fin Modification du DOM
