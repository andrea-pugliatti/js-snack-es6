/** Snack 1
 * Creare un array di oggetti:
 * Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
 * Stampare a schermo la bici con peso minore.
 */

// Dichiara l'array
const bici = [
	{
		nome: "Genoveffa",
		peso: 30,
	},
	{
		nome: "Basso",
		peso: 19,
	},
	{
		nome: "Cinelli",
		peso: 22,
	},
	{
		nome: "Lombardo",
		peso: 22,
	},
	{
		nome: "Olmo",
		peso: 19,
	},
	{
		nome: "Cannondale",
		peso: 18,
	},
	{
		nome: "Bianchi",
		peso: 16,
	},
	{
		nome: "Specialized",
		peso: 18,
	},
];

// Trova la più leggera
// Inizializza la variabile
let lightest = bici[0];
// Loop dell'array
for (let i = 1; i < bici.length; i++) {
	// Se la bici attuale è più leggera
	if (bici[i].peso < lightest.peso) {
		// Riassegna lightest
		lightest = bici[i];
	}
}

// Stampa
console.log(lightest.nome);
