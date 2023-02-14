let listeDePays = ['France', 'Japon', 'Russie', 'Suède']

// Méthode pour afficher la liste des pays avec un FOR...OF
// for (const pays of listeDePays) {
//     console.log(pays);
// }

// 1ère Méthode pour afficher la liste des pays avec un FOREACH
listeDePays.forEach(function (pays) {
    console.log(pays);
});


// Autre méthode pour afficher la liste avec un FOREACH et une 'FONCTION FLÉCHÉE'
listeDePays.forEach(pays => console.log(pays));

