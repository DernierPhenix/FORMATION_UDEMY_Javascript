//Ancienne nomencalutre d'un tableau 2D - ne pas oublier la virgule pour delimiter 
let tableau2D = new Array(
    Array('Bruce', 'Dwayne', 'Sylvester'),
    Array('LEE', 'JOHNSON', 'STALLONE')
);

//Nouvelle Nomenclature d'un tableau 2D

let monTableau2D = [
    ['Bruce', 'Dwayne', 'Sylvester'], // Ligne 0 avec les élément 0, 1, 2
    ['LEE', 'JOHNSON', 'STALLONE'] // Ligne 1 avec les éléments 0, 1, 2
];

console.log(monTableau2D[0][0]); // élément 0 = 1ère ligne / élément 0 = 1er élément de la ligne 0
console.log(monTableau2D[0][1]); // élément 0 = 1ère ligne / élément 1 = 2ème élément de la ligne 0 
console.log(monTableau2D[1][2]); // élément 1 = 2ème ligne / élément 2 = 3ème élément de la ligne 1