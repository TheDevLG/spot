const express = require("express");

const MIN = 1;
const MAX = 100;

const app = express();

app.get("/numeros-aleatorios", (req, res) => {
    
    const QTD = req.query.quantidade || 10;

    let lista = "";
    for ( let i = 0; i < QTD; i++){
        lista += getNumeroRandomico(MIN, MAX) + "\n";
    }

    res.end(lista);
})

app.listen(3000, () => {
    console.log("para definir a quantidade use http://localhost:3000/numeros-aleatorios?quantidade=10")
});







function getNumeroRandomico(min, max) {
    min = Math.ceil(min); // maior inteiro inferior ao mínimo
    max = Math.floor(max); // menor inteiro superior ao máximo
    return Math.floor(Math.random() * (max - min)) + min; // retorno de número pseudoaleatório
    }