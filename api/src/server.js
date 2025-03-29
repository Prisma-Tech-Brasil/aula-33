require('dotenv').config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const rotaDeUsuarios = require("./routes/rotasDeUsuario");

app.use(express.json());
app.use("/usuarios", rotaDeUsuarios);

app.get("/", (_req, res) => res.send("Olá mundo!"));

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
