// Fonction pour additionner
function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}

// Fonction pour soustraire
function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
}
// Fonction pour multiplier
function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
}

// Fonction pour diviser
function division(nombreA, nombreB) {
    if(nombreB == 0) {
        throw new Error("Vous ne pouvez pas diviser par 0."); // Erreur si le 2nd nombre est 0 dans la division
    }
    return nombreA / nombreB;
}

// On rentre dans la boucle principale
let restart = false; // Cette variable vaut false, ce qui veut dire que par défaut, nous ne reproposons pas un calcul.
do {
    // Demande un choix
    do {
        var choix = Number(prompt("Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Soustraction\n 3 - Multiplication\n 4 - Division\n"));
    } while(choix != 1 && choix != 2 && choix != 3 && choix != 4)

    // Demande deux nombres
    do {
        var premierNombre = Number(prompt("Entrez un 1er nombre :"));
        var deuxiemeNombre = Number(prompt("Entrez un 2nd nombre : "));
    } while(isNaN(premierNombre) || isNaN(deuxiemeNombre))

    // Appelle la fonction choisie
    try{
        switch (choix) {
            case 1: //Si cas N°1 choisi
                var resultat = addition(premierNombre, deuxiemeNombre); //Stocke le résultation de la fonction addition dans résultat.
                break;

            case 2://Si cas N°2 choisi
                var resultat = soustraction(premierNombre, deuxiemeNombre);//Stocke le résultation de la fonction soustraction dans résultat.
                break;

            case 3://Si cas N°3 choisi
                var resultat = multiplication(premierNombre, deuxiemeNombre);//Stocke le résultation de la fonction multiplication dans résultat.
                break;

            case 4://Si cas N°4 choisi
                var resultat = division(premierNombre, deuxiemeNombre);//Stocke le résultation de la fonction division dans résultat.
                break;

            default:
                throw new Error("Une erreur est survenue.");
        }

        // Affiche le résultat
        alert("Voici le résultat : " + resultat);
    }
    catch(error) {
        alert(error); // Si une erreur est survenue, on affiche l'erreur
    }
  
    restart = confirm("Souhaitez-vous recommencer un calcul ?"); // On demande si l'utilisateur veut recommencer
  
} while(restart)