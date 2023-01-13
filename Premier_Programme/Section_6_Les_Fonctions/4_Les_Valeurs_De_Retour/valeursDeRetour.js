let nombreUn = 5, nombreDeux = 8;

function addition(nombreA, nombreB) {

    let addition = nombreA + nombreB;
    // console.log(addition); //affiche
    return addition; //Stock le résultat en mémoire, ici la fonction addition, ce qu'elle fait.
}
// console.log(addition(nombreUn, nombreDeux)); //affiche le résultat de la fonction avec nos 2 nombres

function division(nombreA, nombreB) {

    let addition = nombreA / nombreB;
    // console.log(addition); //affiche
    return addition; //Stock le résultat en mémoire, ici la fonction addition, ce qu'elle fait.
}

let resultatAddition = addition(nombreUn, nombreDeux);
let resultatDivision = division(nombreUn, nombreDeux);

console.log(resultatAddition * resultatDivision);