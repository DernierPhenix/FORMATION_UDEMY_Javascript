let aliment = prompt("Entrer un de ces mots : carotte, pomme de terre, courgette, banane ou chocolat.");

switch (aliment) {

    case "courgette":
    case "pomme de terre":
    case "carotte":
        alert ("Ceci est un légume.");
        break;
    
    case "banane":
        alert ("Ceci est un fruit.");
        break;

    default:
        alert ("Ceci n'est ni un fruit ni un légume...")

}