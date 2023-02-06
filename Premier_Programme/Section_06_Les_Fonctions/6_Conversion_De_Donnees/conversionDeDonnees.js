// function demanderAge() {
//     let age = prompt("Entrer votre âge : ");
//     alert("Vous avez " + age + " ans !");
// }

// demanderAge();

function prevoirAge() {
    let age     = prompt("Entrer votre âge : "); //"30" + " = 301"
    age         = Number(age); //converti age en nombre (entier ou à virgule)

    //age = parseInt(age); Converti age en entier
    //age = parseFloat(age); Converti age en nombre décimal

    //nombre = 45;
    //nombreEnString = nombre + ""; 1ère méthode pour tranqformer un nombre en chaîne de caractères
    //nombreEnString = nombre.toString(); Méthode la plus utilisée. PAS DE VARIABLE DANS LES PARENTHESES

    alert("Vous aurez alors " + (age + 2)+ " ans !");
}

prevoirAge();