const express = require("express");
const videosController = require("../controllers/videosController");

const router = express.Router();

// Rota para listar todos os vídeos
router.get("/", videosController.index);

// Rota para buscar um vídeo pelo ID
router.get("/:id", videosController.show);

// Rota para criar um novo vídeo
router.post("/", videosController.store);

// Rota para editar um vídeo pelo ID
router.put("/:id", videosController.update);

// Rota para deletar um vídeo pelo ID
router.delete("/:id", videosController.delete);

module.exports = router;
