let gareDeDepart = "Valenciennes";
let gareDarrivee = "";
let chauffeur = "";

//Si gare de départ est différent de vide => ce qui est vrai
//OU gare d'arrivée est différent de Vide => vrai également
//ET que le chauffeur est diérent de vide => ce qui est faux 
//Alors on affiche le second message.
 
if ((gareDeDepart != "" || gareDarrivee != "") && chauffeur != "") {
    console.log("Le train va démarrer");
} else {
    console.log("Le train ne peut pas démarrer sans chauffeur")
}