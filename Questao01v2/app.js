const QTD   = 10;
const MIN   = 1;
const MAX   = 100;
const express  = require("express");
const numjacks = require("nunjucks");

const app = express();

numjacks.configure("views", {
    autoescape: true,
    express: app
});

app.get("/", (req, resp) => {
    resp.render("index.html");
});

app.get("/index-data-hora", (req, resp) => {

    for (let i = 0; i < QTD; i++) {
        listaNum += i == 0 ? "" : "\n";
        listaNum += getNumeroRandomico(MIN, MAX);
    }

    resp.render("index-data-hora.njk", {
        datahora: new Date(),
        numeros: [listaNum + ""]
    });
});
var listaNum = "";
app.get("/lista-numeros", (req, resp) => {
    

    for (let i = 0; i < QTD; i++) {
        listaNum += i == 0 ? "" : "\n";
        listaNum += getNumeroRandomico(MIN, MAX);
    }

    resp.end(listaNum);
})

app.listen(3000, () => {
    console.log("Servidor iniciado!");
});

function getNumeroRandomico(min, max) {
    min = Math.ceil(min);                                  // maior inteiro inferior ao mínimo
    max = Math.floor(max);                                 // menor inteiro superior ao máximo
    return Math.floor(Math.random() * (max - min)) + min;  // retorno de número pseudoaleatório
}