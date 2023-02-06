// let prenom; //On déclare une variable vide en dehors de la boucle.
// do {
//     prenom  = prompt("Quel est votre prénom ?"); // On rappelle cette variable sans le LET.
// } while (prenom =="" || prenom == null) //Tant que la variable est vide OU Null, on affiche le message.

// alert("Bonjour " + prenom);// On affiche Bonjour  + le Prénom qd il est renseigné. La boucle s'arrête alors.


do {
    var prenom  = prompt("Quel est votre prénom ?"); // Variable Globale.
} while (prenom =="" || prenom == null) //Tant que la variable est vide OU Null, on affiche le message.

alert("Bonjour " + prenom);// On affiche Bonjour  + le Prénom qd il est renseigné. La boucle s'arrête alors.