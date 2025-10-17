/** Snack 2
 * Creare un array di oggetti di squadre di calcio.
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
 * Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e
 * stampiamo tutto in console.
 */

const squadre = [
	{ nome: "Atalanta", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Bologna", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Como", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Cremonese", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Fiorentina", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Genoa", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Lazio", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Lecce", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Parma", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Pisa", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Sassuolo", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Torino", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Udinese", puntiFatti: 0, falliSubiti: 0 },
	{ nome: "Verona", puntiFatti: 0, falliSubiti: 0 },
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

// Crea un array in cui esistono solo "nome" e "falliSubiti".
const newArray = [];
for (let i = 0; i < squadre.length; i++) {
	const current = {};
	current.nome = squadre[i].nome;
	current.falliSubiti = squadre[i].falliSubiti;
	newArray.push(current);
}

console.log(squadre);
console.log(newArray);
