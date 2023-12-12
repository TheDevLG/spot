const express = require("express");

const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
res.render("index")
})

app.get("/tempo-restante", (req, res) => {

    const formato = req.query.formato || "segundos";

    let momentoAtual = new Date();
    let horaAtual = momentoAtual.getHours();
    let minutoAtual = momentoAtual.getMinutes();
    let segundoAtual = momentoAtual.getSeconds();

    let resposta = "";

    switch(formato){
        case "segundos":
            let calculoSegundos = 24 * 3600 - (horaAtual * 3600) + (minutoAtual * 60) + segundoAtual + " segundo (s)";
            resposta = calculoSegundos.toString();
            break;
        case "horas":
            let calculoHoras = (23 - horaAtual) + "h  " + (59 - minutoAtual) + "min  " + (59 - segundoAtual) + "seg";
            resposta = calculoHoras.toString(); 
            break;
        default:
            resposta = "Formato Inválido"
    }

    res.send("Tempo restante: " + resposta);

    
})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})