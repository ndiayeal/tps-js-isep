///exo1
/* let n = Math.round(Math.random() * 100) + 1;
let maxAttempt = 10;

console.log(n);
while (true) {
	console.log("maxAttempt :" + maxAttempt);
  let res = prompt("Donner une valeur, vous avez " + maxAttempt + " tentatives!");
	if (res == null) {
    alert("A bientôt!");
		break;
	}
  res = parseInt(res);

	if (isNaN(res)) {
    alert("Veuillez donner un nombre !");
  } else {
    if (res < n) {
      alert("Plus grand");
    } else if (res > n) {
      alert("Plus petit");
    } else {
      alert("Bravo!");
      break;
    }
  }

  maxAttempt = maxAttempt - 1;
	if (maxAttempt <= 0) {
		alert("Vous avez perdu!");
		break;
	}
};
 */
/* let randomNumber = Math.round(Math.random() * 100) + 1;
let maxAttempt = 10;
let found = false;
let cancelled = false;

console.log(randomNumber);

while (maxAttempt > 0 && !found) {
  let res = prompt("Donner une valeur, vous avez " + maxAttempt + " tentatives!");
		if (res == null) {
    alert("A bientôt!");
		cancelled = true;
		break;
	}
  res = parseInt(res);

  if (isNaN(res)) {
    alert("Donner une valeur correcte!");
  } else {
    if (res < randomNumber) {
      alert("Plus grand !");
    } else if (res > randomNumber) {
      alert("Plus petit !");
    } else {
      alert("Bravo !");
      found = true;
    }
  }

  maxAttempt--;
}

if (!found && !cancelled) {
	alert("Vous avez perdu!");
} */
//exo2
/* let chiffre = prompt('Entrez un nombre')
if (chiffre > 10 || chiffre < 0) {
    console.log("Le nombre n'est pas entre 0 et 10")
} else {
    for (let i = chiffre; i >= 0; i--) {
        console.log(i)
    }
}  */

////exo2.3
// Fonction minimum pour trouver le minimum de deux nombres
function minimum(a, b) {
	return a < b ? a : b;
}

// Fonction maximum pour trouver le maximum de deux nombres
function maximum(a, b) {
	return a > b ? a : b;
}

function afficheNombres() {
	for (let i = 1; i <= 100; i++) {
			if (i === 93) {
					console.log("Seine-Saint-Denis !");
			} else {
					let message = "";
					if (i % 3 === 0) {
							message += "divisible par 3";
					}
					if (i % 5 === 0) {
							if (message !== "") {
									message += " et ";
							}
							message += "divisible par 5";
					}
					console.log(i + (message !== "" ? " - " + message : ""));
			}
	}
}

// Appel de la fonction pour afficher les nombres avec les conditions spécifiées
//afficheNombres();


function puissance(x, n) {
	let resultat = 1;

	// Si n est négatif, on effectue l'inverse de la puissance
	let negatif = n < 0;
	if (negatif) {
			n = -n;
	}

	for (let i = 0; i < n; i++) {
			resultat *= x;
	}

	// Si n était négatif, on renvoie l'inverse de la puissance calculée
	return negatif ? 1 / resultat : resultat;
}


function puissancerec(x, n) {
	if (n === 0) {
			return 1;
	} else if (n > 0) {
			return x * puissancerec(x, n - 1);
	} else {
			return 1 / puissancerec(x, -n);
	}
}

function creerMultiplicateur(n) {
	return function(x) {
			return x * n;
	};
}

function creerSequence(init, step) {
	let currentValue = init;

	return function() {
			let result = currentValue;
			currentValue += step;
			return result;
	};
}

function fibonacci(u0, u1) {
	let current = u0;
	let next = u1;

	return function() {
			let temp = current;
			current = next;
			next = temp + next;
			
			console.log("temp", temp);
			console.log("current", current);
			console.log("next", next);
			return temp;
	};
}



// console.log(puissance(2, 2));
// console.log(puissance(2, 3));
// console.log(puissance(2, 0));
// console.log(puissance(2, -1));

// console.log("--------------------");

// console.log(puissancerec(2, 2));
// console.log(puissancerec(2, 3));
// console.log(puissancerec(2, 0));
// console.log(puissancerec(2, -1));


// let multiplicateurPar2 = creerMultiplicateur(2);
// console.log(multiplicateurPar2(5));

// let multiplicateurPar3 = creerMultiplicateur(3);
// console.log(multiplicateurPar3(5));


let sequence = creerSequence(2, 3);
console.log(sequence());
console.log(sequence());
console.log(sequence());
console.log(sequence());


// let generateFibonacci = fibonacci(0, 1);
// console.log(generateFibonacci()); // Output: 0
// console.log(generateFibonacci()); // Output: 1
// console.log(generateFibonacci()); // Output: 1
// console.log(generateFibonacci()); // Output: 2
// console.log(generateFibonacci()); // Output: 3
// console.log(generateFibonacci()); // Output: 5