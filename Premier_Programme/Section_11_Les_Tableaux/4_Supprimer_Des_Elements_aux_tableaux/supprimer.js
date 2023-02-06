//Tableau Simple
let monTableau = ['Un', 'Deux', 'Trois'];
monTableau.pop(); // Supprime un élément à la fin du tableau
monTableau.shift(); // Supprime un élément en début de tableau

console.log(monTableau);

//Tableau 2D
let monTableau2D = [
    ['Bruce', 'Dwayne', 'Sylvester'], // Ligne 0 avec les élément 0, 1, 2
    ['LEE', 'JOHNSON', 'STALLONE'] // Ligne 1 avec les éléments 0, 1, 2
];
//monTableau2D.pop(); // Supprime la ligne 1 du tableau (les noms de famille). Le .shift supprimerai la 1ère ligne du tableau
monTableau2D[1].pop(); // Supprime le dernier élément dans la ligne 1 du tableau (STALLONE)
monTableau2D[0].shift(); // Supprime le 1er élément dans la ligne 0 du tableau (Bruce)


console.log(monTableau2D);

//Tableau Associatif
let tableauAssociatif = {

    "Prénom": "Jean-Pierre",
    "Nom": "FLEURY",
    "Âge": 47,
    "Ville": "Toulouse"

};
delete (tableauAssociatif.Âge); //Supprime la clé 'Âge' et sa valeur dans le tableau
console.log(tableauAssociatif);