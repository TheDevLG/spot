const express = require("express");

const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
res.render("index")
})

app.get("/fibonacci", (req, res) => {

    let fibonacci = "";
    let fiboAnterior = 0;
    let fiboAtual = 1;

    const posicao = req.query.posicao || -1;

    if(posicao <= 0 ){
        fibonacci = "posição inválida, indique um número de 1 acima!"
    } else if (posicao == 1){
        fibonacci = fiboAnterior.toString();
    }else if(posicao == 2){
        fibonacci = fiboAtual.toString();
    }else {
        for(let i = 3; i <= posicao; i++){
            let temp = fiboAtual;
            fiboAtual += fiboAnterior;
            fiboAnterior = temp;
        }

        fibonacci = fiboAtual.toString();
    }

    res.send(fibonacci)
})  

app.listen(3000)