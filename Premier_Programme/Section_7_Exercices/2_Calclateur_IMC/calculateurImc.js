let poids = prompt("Quel est votre poids (en Kgs)? ");

let taille = prompt("Quelle est votre taille (en cm)? ");

function calculerImc(poids, taille) {
    
    let tailleEnMetre = taille /100;

    let imc = poids / Math.pow(tailleEnMetre, 2);

    return imc;
}


alert(calculerImc(poids, taille));

