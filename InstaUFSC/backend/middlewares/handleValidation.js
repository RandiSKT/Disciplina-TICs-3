const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  //o next indica a próxima etapa a ser seguida após a validação
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  //armazena todas as mensagens de erro existentes
  errors.array().map((err) => extractedErrors.push(err.msg));
  
  //esses erros agora precisam ser enviados para o frontend
  return res.status(422).json({
    //o frontend irá consumir essa reposta
    //o código de erro 422 significa 422 Unprocessable Entity
    errors: extractedErrors,
  });
};

module.exports = validate;
