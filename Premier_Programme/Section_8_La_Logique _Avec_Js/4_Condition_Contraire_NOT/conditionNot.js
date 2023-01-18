//Ici X n'est pas inférieur à 5 puisqu'il vaut 7
let x = 7;

if (x < 5) { //Ici la condition est TRUE

    console.log("X est inférieur à 5.");
} else {

    console.log("X n'est pas inférieur à 5.");
}

//ici, Y n'est pas inférieur à 5, Pourtant:
let y = 7;

//Avec le ! on inverse le résultat de la condition.
if (!y < 5) { // Ici la condition est False

    console.log("Y est inférieur à 5.");
} else {

    console.log("Y n'est pas inférieur à 5.");
}
