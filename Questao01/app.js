const { createServer } = require("http");

const QTD = 10;
const MIN = 1;
const MAX = 100;

const app = createServer((req, res) => {

    res.setHeader("Allow-Access-Control-Origin", "*")

    let lista = "";
    for ( let i = 0; i < QTD; i++){
        lista += getNumeroRandomico(MIN, MAX) + "\n";
    }

    res.end(lista);
})

app.listen(3000);







function getNumeroRandomico(min, max) {
    min = Math.ceil(min); // maior inteiro inferior ao mínimo
    max = Math.floor(max); // menor inteiro superior ao máximo
    return Math.floor(Math.random() * (max - min)) + min; // retorno de número pseudoaleatório
    }