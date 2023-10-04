const express = require("express");
const app = express();

const loggingMiddleware = (req, res, next) => {
  console.log("Dentro do Middleware");
  console.log(`${new Date().toISOString()}, URL acessada: ${req.originalUrl}`);
  next();
};

const sigIn = (req, res, next) => {
  if (req.query.admin === "true") {
    req.admin = true;
    next();
  } else {
    res.send(
      "Autorização de acesso negada: Só administradores do sistema podem se logar."
    );
  }
};

const checkString = (req, res, next) => {
    
};

app.use(loggingMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", sigIn, (req, res) => {
  console.log(req.admin);
  res.send("Users Page");
});

app.get("/products", checkString, (req, res) => {
  res.send("Product Page");
});

app.listen(3000, () => console.log("Servidor Inicializado."));
