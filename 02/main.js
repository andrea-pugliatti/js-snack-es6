/** Snack 2
 * Creare un array di oggetti di squadre di calcio.
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
 * Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e
 * stampiamo tutto in console.
 */

const squadre = [
	{
		nome: "Atalanta",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Bologna",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Como",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Cremonese",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Fiorentina",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Genoa",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Inter",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Juventus",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Lazio",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Lecce",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Milan",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Napoli",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Parma",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Pisa",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Roma",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Sassuolo",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Torino",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Udinese",
		puntiFatti: 0,
		falliSubiti: 0,
	},
	{
		nome: "Verona",
		puntiFatti: 0,
		falliSubiti: 0,
	},
];

/**
 * Returns a random number between a min number and a max number.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const getRandomNumber = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

// Genera numeri random al posto degli 0 nelle proprietà “puntiFatti" e “falliSubiti”.
for (let i = 0; i < squadre.length; i++) {
	const current = squadre[i];
	current.puntiFatti = getRandomNumber(20, 60);
	current.falliSubiti = getRandomNumber(40, 120);
}
/*
// Oppure
squadre.map((current) => {
	current.puntiFatti = getRandomNumber(20, 60);
	current.falliSubiti = getRandomNumber(40, 120);
	return current;
});
*/

// Crea un array in cui esistono solo "nome" e "falliSubiti".
const newArray = [];
for (let i = 0; i < squadre.length; i++) {
	const current = {
		nome: squadre[i].nome,
		falliSubiti: squadre[i].falliSubiti,
	};

	newArray.push(current);
}
/*
// Oppure
const newArray = squadre;
newArray.forEach((current) => {
	// delete eliminerebbe l'oggetto originale
	// perché newArray punta all'originale e non fa una copia
	delete current.puntiFatti;
});
*/

// Stampa su console
// console.log(squadre);
// console.log(newArray);
// Oppure
squadre.forEach((current) => {
	console.log(`${current.nome} ${current.puntiFatti} ${current.falliSubiti}`);
});
newArray.forEach((current) => {
	console.log(`${current.nome} ${current.falliSubiti}`);
});

// Stampa su schermo
const solElement = document.getElementById("soluzione");
squadre.forEach((current) => {
	const ul = document.createElement("ul");
	for (const key in current) {
		const element = current[key];
		const li = document.createElement("li");
		if (key === "puntiFatti") {
			li.textContent += `Punti Fatti: `;
		}
		if (key === "falliSubiti") {
			li.textContent += `Falli subiti: `;
		}
		li.textContent += `${element}`;
		ul.append(li);
	}
	solElement.append(ul);
});

const nuovoElement = document.getElementById("nuovo-array");
newArray.forEach((current) => {
	const ul = document.createElement("ul");
	for (const key in current) {
		const element = current[key];
		const li = document.createElement("li");
		if (key === "puntiFatti") {
			li.textContent += `Punti Fatti: `;
		}
		if (key === "falliSubiti") {
			li.textContent += `Falli subiti: `;
		}
		li.textContent += `${element}`;
		ul.append(li);
	}
	nuovoElement.append(ul);
});
