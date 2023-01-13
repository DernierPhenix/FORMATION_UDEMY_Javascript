//Paramètres par défaut de la fonction cuisiner

function cuisiner(nombreDeGateaux, minutesDePreparation = 15, tempsDeCuisson = 25) {

    let resultat = nombreDeGateaux * (minutesDePreparation + tempsDeCuisson);
    return resultat;
}

// console.log(cuisiner(5)); temps pour 5 gâteaux au chocolat
let tempsDePreparationChocolat = cuisiner(3); //Temps de préparation pour 3 gâteaux au chocolat avec les paramètres par défaut
let tempsDePreparationfraisier = cuisiner(2, 25); //Temps de préparation pour 2 fraisiers avec modification du paramètre minutesDePreparation

console.log(tempsDePreparationfraisier + tempsDePreparationChocolat) //Calcule et affiche le temps total pour les 5 gâteaux