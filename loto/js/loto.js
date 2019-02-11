var numeros = [0];
var njogados = [0];

sorteio();

function sorteio() {
    for (x = 0; x < 6; x++) {
        numeros[x] = (Math.random() * 60).toFixed(0);
    }
    console.log(numeros);
}

function jogo() {
    //sorteio();
    let j = document.getElementsByTagName("input");
    for (x = 0; x < 6; x++) {
        njogados[x] = j[x].value;
    }
    console.log(njogados);
    resultado();
}

function resultado() {
    let cont = 0;
    for (x = 0; x < 6; x++) {
        for (y = 0; y < 6; y++) {
            if (numeros[x] == njogados[y]) {
                cont++;
            }
        }
    }
    console.log("Resultado: acertos " + cont);
}