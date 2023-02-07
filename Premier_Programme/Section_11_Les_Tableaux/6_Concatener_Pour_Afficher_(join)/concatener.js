//Tableau Simple
let monTableau = ['Un', 'Deux', 'Trois'];

console.log(monTableau.join());// affiche les élements en une chaîne de caractères
console.log(monTableau.join(" / "));// Ici on change le séparateur

//Tableau 2D
let monTableau2D = [
    ['Bruce', 'Dwayne', 'Sylvester'], // Ligne 0 avec les élément 0, 1, 2
    ['LEE', 'JOHNSON', 'STALLONE'] // Ligne 1 avec les éléments 0, 1, 2
];

console.log(monTableau2D.join()); // affiche les élements en une chaîne de caractères
console.log(monTableau2D.join(" / ")); // Ici on change le séparateur
console.log(monTableau2D[0].join(", ")); // Ici on change le séparateur du 1ere élément uniquement