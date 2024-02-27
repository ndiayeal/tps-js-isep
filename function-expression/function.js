function salut(nombre) {
  for (let i = 0; i < nombre; i++) {
    console.log("Bonjour!");
  }
}

console.log(salut(2));
console.log("----------------");

let s1 = salut;
let s2 = s1;

s1(3);
s2(2);

console.log("----------------");

let s3 = function (message, nombre) {
  for (let i = 0; i < nombre; i++) {
    console.log(message + " à tous");
  }
};

console.log(s3.name);
s3("Bye Bye", 2);

console.log("--------callback function--------");

function add10(x) {
  return x + 10;
}

let multiply10 = (x) => x * 10;

function processTable(tab, operation) {
  for (let i = 0; i < tab.length; i++) {
    tab[i] = operation(tab[i]);
  }
}

let table = [1, 2, 3, 4, 5];
console.log(table);

processTable(table, add10);
console.log(table);

processTable(table, multiply10);
console.log(table);

processTable(table, function (x) {
  return x * 100;
});

console.log(table);

console.log("--------resultat function--------");

function incrementeur(x) {
  let result = (a) => a + x;
  return result;
}

let incr5 = incrementeur(5);
console.log(incr5(7));
console.log(incr5(2041));

console.log(incrementeur(5)(7));

function updateValue(x) {
  x = -x;

  console.log("dans la fonction " + x);
}

console.log("--------passage par valeur--------");

let test = 42;
updateValue(test);
console.log("à la sortie de la fonction" + test);

console.log("--------passage par reference--------");

function updateParams(myObject, value) {
  myObject.age = myObject.age + value;
}

let testObject = { prenom: "Alioune", nom: "FAYE", age: 32 };
console.log(testObject);
updateParams(testObject, 5);
console.log(testObject);

console.log("--------function comme attribut--------");
let felicite = {
	nom: "Félicité",
	age: 10,
	race: "chat de goutière",
	aimes: ["manger, dormir", "grimper"],
	poids: 3.5,
	miauler: function () {
		console.log("Miaou ! Miaou !");
	},
	maigrir: function(deltaPoids) {
		this.poids = this.poids - deltaPoids;
	}
};

felicite.miauler();
felicite.maigrir(1);

console.log(felicite);