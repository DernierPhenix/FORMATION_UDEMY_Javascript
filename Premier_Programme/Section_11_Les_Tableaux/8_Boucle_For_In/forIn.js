let panier = ['Banane', 'Fraise', 'Pomme'];

for (const fruits in panier) {  // Création d'une constante à chaque itération et en rapport avec notre variable de panier
    console.log(fruits); // Ici on affiche les INDEX et non la <valeur.

}

let panierUn = ['Banane', 'Fraise', 'Pomme'];

for (const fruits in panierUn) {  // Création d'une constante à chaque itération et en rapport avec notre variable de panier
    console.log(panierUn[fruits]); // En écrivant console.log(panier[fruits]), on demande d'écrire la valeur du tableau 'panier'
                                   // Correspondant à l'index de 'fruits' (Ex: index 0 = Banane)

}

let panierDeux = ['Banane', 'Fraise', 'Pomme', 'prune'];

for (const fruits in panierDeux) {
    panierDeux[fruits] = 'Poire'; // On modifie à la volée un à un les éléments du tableau

}
console.log(panierDeux); // On aura comme résultat ['Poire', 'Poire', 'Poire', 'poire']