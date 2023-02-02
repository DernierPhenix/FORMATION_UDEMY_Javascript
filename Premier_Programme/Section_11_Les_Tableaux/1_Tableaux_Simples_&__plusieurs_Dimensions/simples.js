//Ancienne façon d'écriture
let monTableau = new Array('Un', 'Deux', 'Trois', 'Quatre'); // (élément 0 => un, élément 1 => Deux, élément 2 => Trois)
let monTableau1 = Array('Un', 'Deux', 'Trois');

//Nouvelle façon de déclarer un tableau
let monTableau2 = ['Un', 'Deux', 'Trois'];

console.log(monTableau[1]); //accède à mon élément en position 1 de ma variable monTableau
console.log(monTableau1[0]); //accède à mon élément en position 1 de ma variable monTableau1
console.log(monTableau2[2]); //accède à mon élément en position 1 de ma variable monTableau2


console.log(monTableau[monTableau.length - 1]); // Affiche le dernier élément de mon tableau