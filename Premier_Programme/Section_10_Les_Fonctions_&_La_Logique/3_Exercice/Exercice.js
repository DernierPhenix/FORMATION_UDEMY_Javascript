function somme(nombre) {    //nombre = 5 au 1er tour, puis nombre = 4 au 2nd, etc,etc...
                            //Qd nombre = 1 on reste dans le 1er return

    if (nombre == 1) { // 5 !=1, on passe au 2nd return
        return 1
    }
    return nombre + somme(nombre - 1)   // 5 + 4 (4 => somme(nombre(5) - 1))
                                        // 4 + 3 (3 => sommes(nombre(4) -1))...

    //Résultat, on a 5 + 4 + 3 + 2 + 1 = 15
}
console.log(somme(5))