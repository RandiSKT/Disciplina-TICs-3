const express = require("express");
const router = express.Router(); 

//controller
const { register } = require("../controllers/UserController");

//middleware 
const validate = require("../middlewares/handleValidation");
const { userCreateValidation } = require("../middlewares/userValidation");

//rotas
router.post("/register", userCreateValidation(), validate, register); 
//será uma rota de post, define-se o caminho e associa-se a função equivalente

module.exports = router;
