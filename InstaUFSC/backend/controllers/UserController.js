const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET; 

//geração de token de usuário
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: "7d" });
};

//registrar-se e logar-se
const register = async (req, res) => {
  res.send("Registro efetuado.");
};

module.exports = {
    register,
}