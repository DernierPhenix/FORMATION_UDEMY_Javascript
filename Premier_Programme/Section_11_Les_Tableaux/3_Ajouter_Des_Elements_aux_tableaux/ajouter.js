//Tableau Simple
let monTableau = ['Un', 'Deux', 'Trois'];
monTableau.push("Quatre"); // Ajoute un élément à la fin du tableau
monTableau.unshift("Zéro"); // Ajoute un élément en début de tableau

console.log(monTableau);

//Tableau 2D
let monTableau2D = [
    ['Bruce', 'Dwayne', 'Sylvester'], // Ligne 0 avec les élément 0, 1, 2
    ['WILLIS', 'JOHNSON', 'STALLONE'] // Ligne 1 avec les éléments 0, 1, 2
];
monTableau2D.push('Test_0'); // Ajoute le mot 'Test_0' en-dessous des éléments de la ligne 0 et de la ligne 1
monTableau2D[0].push('Jean-Claude'); // Ajoute un élément dans la ligne 0 du tableau en dernière position 
monTableau2D[1].push('VAN DAMME'); // Ajoute un élément dans la ligne 1 du tableau en dernière position 
monTableau2D[0].unshift('Bruce'); // Ajoute un élément dans la ligne 0 du tableau en 1ère position 
monTableau2D[1].unshift('LEE'); // Ajoute un élément dans la ligne 1 du tableau en 1ère position 

console.log(monTableau2D);

//Tableau Associatif
let tableauAssociatif = {

    "Prénom": "Jean-Pierre",
    "Nom": "FLEURY",
    "Âge": 47,
    "Ville": "Toulouse"

};
tableauAssociatif['Nationalité'] = "Française"; //Ajoute la clé et sa valeur dans le tableau
console.log(tableauAssociatif);