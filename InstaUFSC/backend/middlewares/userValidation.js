const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no minimo 3 caracteres mano."),
    body("email")
      .isString()
      .withMessage("O email é obrigado.")
      .isEmail()
      .withMessage("Coloca essa merda direito."),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória.")
      .isLength({ min: 6 })
      .withMessage("A senha precisa ter no mínimo 6 caracteres."),
    body("confirmpassword")
      .isString()
      .withMessage("A comparação da senha é obrigatória.")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          //quando se usa validação customizada,
          //a mensagem de erro deve ser escrita desta forma
          throw new Error("As senhas não são iguais");
        }
        return true; // aqui, tudo deu certo
      }),
  ];
};

const loginValidation = () => {
  return [
    body("email")
      .isString()
      .withMessage("O email é obrigatório.")
      .isEmail()
      .withMessage("Insira um e-mail válido"),
    body("password").isString().withMessage("A senha é obrigatória."),
  ];
};

//exportação como objeto
module.exports = { userCreateValidation, loginValidation };
