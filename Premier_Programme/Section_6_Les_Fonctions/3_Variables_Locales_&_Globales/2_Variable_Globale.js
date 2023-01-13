let crie; //Variable Globale
function crieDeGuerre() {

    crie = "Toujours plus fort !"; //Variable Locale
    console.log(crie);
}
crieDeGuerre();
console.log(crie);
//Résultat : Cela affiche 2 fois Toujours plus fort.
//Forme d'écriture déconseillée cependant.

// Forme d'écriture recommandée

let crier = "Toujours plus haut ! "; //Vriable Globale

function crieDuGuerrier() {

    let crier = 'Toujours plus fort !';//Variable Locale
    console.log(crier);
}
crieDuGuerrier();
console.log(crier);