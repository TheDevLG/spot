const express = require("express");

const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
res.render("index")
})

app.get("/info-instante-atual", (req, res) => {

    const posicao = req.query.formato || "Inválido";
    const agora = new Date();
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    let dataAtual = (agora.getDate() + "/" + (agora.getMonth() + 1) + "/" + agora.getFullYear()).toString();
    let diaAtual = agora.getDay();
    let horarioAtual = (agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds()).toString();

    let instanteAtual = "Instante atual:  ";

    switch(posicao){
        case "data":
            instanteAtual += dataAtual;
            break;

        case "dia-da-semana":
            instanteAtual += diasDaSemana[diaAtual];
            break;

        case "data-hora":
            instanteAtual += (dataAtual + " " + horarioAtual);
            break;
        
        case "horas":
            instanteAtual += horarioAtual;
            break;

        default:
            instanteAtual = "Formato Inválido"
    }
    
    res.send(instanteAtual);

})


app.listen(3000);