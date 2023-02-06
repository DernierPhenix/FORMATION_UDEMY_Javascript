try {
    //erreur ?
    let recompense = prompt("Choisissez une récomprense : épée, arc, haches");
    let degats;

    switch (recompense) {
        case 'épée':
            degats = 40
            break;
        
        case 'arc':
            degats = 30
            break;

        case 'haches':
            degats = 20
            break;
    
        default:
            throw new Error("Vous ne pouvez pas tricher."); // Permet de créer une nouvelle erreur dans l'objet Error.
    }
    alert("Vous avez choisi " + recompense + ". Vous infligez " + degats + " points de degâts à votre adversaire");
} catch (error) {
    //erreur !
    alert(error);// On appelle notre nouvelle erreur personnalisée.
}