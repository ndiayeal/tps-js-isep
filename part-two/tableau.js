/* let tab1 = [1, 2, , , 3, "felix",];

console.log(tab1);
console.log("La taille du tableau est :" + tab1.length);
console.log("position 0: " + tab1[0]);
console.log("position 1: " + tab1[1]);
console.log("position n: " + tab1[3]);
console.log("position n: " + tab1["3"]);
console.log("position n: " + tab1[tab1.length - 1]);



for (let i = 0; i < tab1.length; i++) {
	console.log("index: " + i + " = " + tab1[i]);
}
console.log("----------");
tab1.length = 10;

for (let i = 0; i < tab1.length; i++) {
	console.log("index: " + i + " = " + tab1[i]);
}

console.log("----------");
tab1.length = 2;

for (let i = 0; i < tab1.length; i++) {
	console.log("index: " + i + " = " + tab1[i]);
} */


let tableau = [1, 2, 4, 5, 3, 2, 1,];
console.log(tableau.indexOf(2));
console.log(tableau.indexOf(2, 3));


tableau.push(-1, 0);
console.log(tableau);
console.log("---------");


tableau.unshift(-51);
console.log(tableau);
console.log("---------");



let tabTwo = [4, 8, 15, 16, 23, 42];
let result = tabTwo.filter(function(value, index, array) {
	//return value > 15 && value < 42;
	//return true;
	
	let test = value > 15 && value < 42;
	if (test) {
		return true;
	} else return false;
});

console.log(tabTwo);
console.log(result);
console.log("---------");


let mapResult = tabTwo.map(function(value, index) {
	//return value ** 2;
	return `${index} - ${value}`;
});
console.log(mapResult);


tabTwo.sort(function(param1, param2) {
	return param1 - param2;
});

console.log("---------");
console.log(tabTwo);


