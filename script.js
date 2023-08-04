// Exo 1

let myAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "$",
  "*",
  "/",
  "-",
  "+",
];

console.log(myAlphabet.length); // Résultat 31

function myAlphabetLength() {
  console.log(myAlphabet.length);
}

myAlphabetLength();

// Exo 2
// afficher tous les éléments d'un tableau .forEach()
/*
    // Données
    let fruits = ["Pomme", "Orange", "Fraise"];

    // Traitement
    fruits.forEach((fruit) => {
        console.log(fruit); // Résultat : Pomme Orange Fraise
    });

*/
// Données
let planets = ["terre", "venus", "mars", "mercure", "saturne"];
// Traitement

console.log("terre", "venus", "mars", "mercure", "saturne");

planets.forEach((planet) => {
  console.log(planet);
});
