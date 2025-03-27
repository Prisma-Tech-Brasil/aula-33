const express = require("express");
const app = express();
const rotaDeUsuarios = require("./routes/rotasDeUsuario");

app.use(express.json());
app.use("/usuarios", rotaDeUsuarios);

app.get("/", (_req, res) => res.send("Olá mundo!"));

app.listen(3000, () => console.log("Servidor rodando!"));
