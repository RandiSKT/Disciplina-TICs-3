const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const authGuard = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  //O token vem no formato do tipo Bearer dfhjdr47rq3jdhskjdsjd...
  //verificar se o header possui um token
  if (!token) {
    return res.status(401).json({ errors: ["Acesso negado."] });
  } //verificar se o token recebido é válido
  try {
    //verificar se o token contém o segredo
    const checkedToken = jwt.verify(token, jwtSecret);
    //ocorre outra validação, pois se não encontrar o usuário, também retornará erro
    //define-se select("-password") para que as informações do usuário trafeguem sem sua senha, que queremos preservar
    req.user = await User.findById(checkedToken.id).select("-password"); //prosseguir com a requisição
    next();
  } catch (error) {
    res.status(401).json({ errors: ["Token inválido."] });
  }
};
module.exports = authGuard;
