let tableauAssociatif = {

    "Prénom": "Jean-Pierre",
    "Nom": "FLEURY",
    "Âge": 47,
    "Ville": "Toulouse"

};

let chaineConcatenee = ''; //on va stocker dans cette variable la concanténation

for (const valeurs in tableauAssociatif) { // Pour chaque valeur dans tableauAssociatif

    chaineConcatenee += (valeurs + ' : ' + tableauAssociatif[valeurs] + '\n');
}
console.log(chaineConcatenee);


// Exemple avec une fonction

let monTableauAssociatif = {

    "Prénom": "Caroline",
    "Nom": "BERNIER",
    "Âge": 33,
    "Ville": "Bordeaux"

};

function concatener(tableau) {
    let chaineConcatenee = ''; //on va stocker dans cette variable la concanténation

    for (const valeurs in tableau) { // Pour chaque valeur dans tableau

        chaineConcatenee += (valeurs + ' : ' + tableau[valeurs] + '\n'); //On appelle avec valeurs(la clé) puis ':' puis avec tableau[valeurs] (la valeur correspondant à la clé)
    }
    console.log(chaineConcatenee);
}
concatener(monTableauAssociatif); // On appelle la fonction avec monTableauAssociatif en paramètre