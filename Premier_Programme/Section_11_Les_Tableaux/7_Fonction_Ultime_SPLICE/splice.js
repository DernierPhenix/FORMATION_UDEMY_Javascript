//Tableau Simple
let monTableau = ['Un', 'Deux', 'Trois'];
monTableau.splice(1, 1, "random", "pie");// Supprime un élément à partir de l'indice 1 (Ici "deux")
// et ajoute les mots à partir de cet indice

console.log(monTableau);


//Tableau 2D
let monTableau2D = [
    ['Bruce', 'Dwayne', 'Sylvester'], // Ligne 0 avec les élément 0, 1, 2
    ['LEE', 'JOHNSON', 'STALLONE'] // Ligne 1 avec les éléments 0, 1, 2
];
// monTableau2D.splice(0, 1); //Ici on demande de supprimer 1 élément à partir de l'index 0 (l'élement est la ligne complète)
// monTableau2D[0].splice(0, 1); //Ici on demande de supprimer 1 élément à partir de l'index 0 UNIQUEMENT sur la ligne ayant l'index 0
monTableau2D.splice(2, 0, [33, 45, 70]) // Ici j'ai ajouté un nouvel élément avec l'indice 2

console.log(monTableau2D);
