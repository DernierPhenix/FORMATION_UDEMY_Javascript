let gareDeDepart    = "Valenciennes";
let gareDarrivee    = prompt("Quelle est votre destination ?") || "Gare du Nord";
let chauffeur       = "Jean-Pierre";

//Si gare de départ est différent de vide => ce qui est vrai
//OU gare d'arrivée est différent de Vide => vrai également
//ET que le chauffeur est diérent de vide => ce qui est faux 
//Alors on affiche le second message.
 
if ((gareDeDepart != "" || gareDarrivee != "") && chauffeur != "") {
    alert("Le train va démarrer à destination de " + gareDarrivee + ".");
} else {
    alert("Le train ne peut pas démarrer sans chauffeur")
}

// Condition Ternaire des 6 lignes en-dessous
let x = 5;

x > 3 ? console.log("X est supérieur à 3.") : console.log("X est inférieur à 3.");

// let x   = 5;

// if (x > 3) {
//     console.log("X est supérieur à 3.");
// }else{
//     console.log("X est inférieur à 3.");
// }