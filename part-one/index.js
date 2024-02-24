/*let js = "amazing";
console.log(js);
*/
//alert("Bienvenue");
/**/

// let a;
// console.log("a = " + a)
// console.log("typeof = " + typeof a)

// a = "Je suis en classe"
// console.log("a = " + a)
// console.log("typeof = " + typeof a)

// a = 125;
// console.log("a = " + a)
// console.log("typeof = " + typeof a)

/* let b = 10;
let c = "chaine de test";
let d = 19.2; */

// let b = 10, c = "chaine de test", d = 19.2;
// console.log("b = " + b)
// console.log("c = " + c)
// console.log("d = " + d)

/* 
let a = 50;
let b = 20;
let somme = a + b;

console.log("a + b = " + somme);

a = "50";
somme = a + b;
let multiple = a * b
console.log("a + b = " + somme);
console.log("a * b = " + multiple); */

/* let a = 5;
let b = 10;
let result = a ?? b;
console.log(result); */
/* 
let note = prompt("Saisissez une note");
let noteReel = parseInt(note);


if (noteReel >= 10) {
  //console.log("Vous avez la moyenne");
  alert("Bravo, vous avez la moyenne");
} else {
  //console.log("Vous n'avez pas la moyenne");
  alert("Oups!, vous n'avez pas la moyenne");
}
 */

/* let note = prompt("Saisissez une valeur");
let noteReel = parseInt(note);

if (noteReel >= 0 && noteReel < 10) {
	alert("Mauvaise note");
} else if (noteReel >= 10 && noteReel <15) {
	alert("Note passable");
} else alert("Pas défini"); */

/* let maChaine = prompt("Saisissez un texte");

if (maChaine === "bonjour") {
	alert("Bonjour ! ça va ?");
	
	let nouvelleChaine = prompt("Saisissez un nouveau texte");
	
	if(nouvelleChaine === 'oui') alert("Je suis content pour toi")
	else alert("Désolé, il faut que je file.")
	
} else if(maChaine === "tu vas bien ?") {
	alert("Bien et toi ?")
} else {
	alert("Désolé, je n'ai pas compris ...")
} */

/* 12: false
"12": true
"aaa": true
"12a": true */
/////
/* let valeurSaisie = prompt("Donner un nombre");
let estunNombre = isNaN(valeurSaisie);

if (!estunNombre) {
	alert("Vous avez donné un nombre");
} else {
	alert("Vous avez donné autre chose")
} */
/* 
let choix = prompt("Veuillez saisir un jour de la semaine");

switch (choix) {
  case "lundi":
  case "mardi":
    console.log("Début de semaine");
    break;


  case "mercredi":
  case "jeudi":
	case "vendredi":
    console.log("Mi-semaine");
    break;

  case "samedi":
  case "dimanche":
    console.log("Weekend");
    break;

  default:
    console.log( choix + " n'est pas un jour de la semaine");
}
 */

/* let num = 0;
while(num <= 5) {
	console.log("Tour n°" + num);
	num ++;
} */

/* for (let num = 0; num <= 20; num ++) {
	console.log(`Parcours n°${num}`);
} */

/* let i = 6;
do {
	console.log(i);
	i = i + 1;
	
} while (i <= 5); */

/* let object = {a: 1, b: 2, c: 3};
for(let proriete in object) {
	console.log(proriete);
} */

/* let eleves = ['Jean', "Moussa", "Alioune", "Awa"];

 for (let eleve in eleves) {
	console.log(eleves[eleve]);
} 

for (let eleve of eleves) {
	console.log(eleve);
} */

/* let x = 3;
if (x % 2 === 0) {
	console.log("C'est un nombre pair");
} else {
	console.log("Oops!, ce n'est pas un nombre pair");
}
 */

/* let nombre = prompt("Donner un nombre");
let sommeDiviseurs = 0;

for (let i = 1; i < nombre; i++) {
  reste = nombre % i;

  if (reste === 0) {
    //sommeDiviseurs = sommeDiviseurs + i;
    sommeDiviseurs += i;
  }
}

if (sommeDiviseurs == nombre) {
  alert(nombre + " est un nombre parfait");
} else {
  alert("Oops! " + nombre + " n'est pas un nombre parfait");
}
 */
/* 
function bonjour() {
  console.log("Bonjour à tous");
}

function bonjourAvecNom(nom) {
  console.log("Bonjour " + nom);
}

function multiplierParLuiMeme(nombre) {
  let resultat = nombre * nombre;

  return resultat;
}




let valeur = multiplierParLuiMeme(5);
console.log("Le resultat est : " + valeur);
 */


function estMultipleDeTrois(nombre) {
	let result = nombre % 3;
	
	if(result == 0) return true;
	else return false;
}

function estMultipleDeCinq(nombre) {
	let result = nombre % 5;
	
	if(result == 0) return true;
	else return false;
}


function estMultipleDeTroisEtDeCinq(nombre)  {
	
// 	let multiple3 = estMultipleDeTrois(nombre) 
	//let multiple5 = estMultipleDeCinq(nombre)  
	
	//let result = estMultipleDeTrois(nombre) && estMultipleDeCinq(nombre);
	//return result;
	
	return estMultipleDeTrois(nombre) && estMultipleDeCinq(nombre);
	//return multiple3 && multiple5;
}



let nombre = prompt('Donner un nombre');
let resultat = estMultipleDeTroisEtDeCinq(nombre)
console.log(resultat);

/* let multiple3 = estMultipleDeTrois(nombre);
let multiple5 = estMultipleDeCinq(nombre);


if (multiple3 && multiple5) {
	console.log(nombre + " est un multiple de 3 et de 5");
} else {
	console.log(nombre + " n'est pas un multiple de 3 et de 5");
	
}
 */

