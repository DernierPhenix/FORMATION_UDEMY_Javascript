function timer(secondes) {  //fonction Timer avec paramètres secondes

    if (secondes < 0) { //Si les secondes sont inférieures à 0 (et ils le sont voir dernière ligne)

        console.log(secondes); //D'abord affiche la valeur de secondes (-10)
        timer(secondes + 1); //Appel de la fonction timer (RÉCURSIVITÉ) à laquelle tu ajoutes 1 ( ici, -9)
        //Comme -9 est plus peit que 0, on appelle de nouveau la ligne 5. Secondes vaut maintenant -9.
        //On applique le timer(secondes +1) =>(-9 +1) = -8, et on fait cela jusqu'à ce que secondes arrive à -1
    } else {

        console.log(secondes); //Ici on affiche juste la valeur de secondes quand elle ne rentre plus dans le SI. 
                                // Donc quand seconde = 0. Et on affiche 0.
    }
}
timer(-10) //Timer = -10