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

const fs = require("fs");

const checkProductExistence = (req, res, next) => {
  const productName = req.query.product;
  console.log(productName)
  // Usar uma expressão regular para extrair o número da string do produto
  const match = productName.match(/^([a-zA-Z]+)_([1-2])$/);

  if (match) {
    const productNumber = match[2]; // O segundo grupo capturado é o número
    console.log(`Produto: ${productName}, Número: ${productNumber}`);

    const fileName = `products${productNumber}.txt`;
    console.log(`Lendo arquivo: ${fileName}`);

    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        console.error(`Erro ao ler o arquivo de produtos: ${err}`);
        res.status(500).send("Erro ao ler o arquivo de produtos.");
      } else {
        const products = data.split("\n").map((product) => product.trim());
        console.log("Produtos no arquivo:");
        products.forEach((product) => {
          console.log(product);
        });
        if (products.includes(match[1])) {
          console.log(`Produto encontrado: ${match[1]}`);
          next(); // Produto encontrado no arquivo correspondente
        } else {
          console.log(`Produto não encontrado: ${match[1]}`);
          res.status(404).send("Produto não encontrado.");
        }
      }
    });
  } else {
    console.error("Formato de nome de produto incorreto.");
    res.status(400).send("Formato de nome de produto incorreto.");
  }
};


const checkString = (req, res, next) => {
  const productPattern = /^[a-zA-Z]+_[1-2]$/; // Expressão regular para verificar a formatação da query string
  const productName = req.query.product;
  console.log(productName)

  if (productPattern.test(productName)) {
    next(); // A formatação está correta, passe para a próxima rota/middleware
  } else {
    res.status(400).send("Query string de produto incorretamente formatada.");
  }
};

app.use(loggingMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", sigIn, (req, res) => {
  console.log(req.admin);
  res.send("Users Page");
});

app.get("/products", checkString, checkProductExistence, (req, res) => {
  const productName = req.query.product;
  console.log(productName)
  res.send(`Produto recebido: ${productName}`);
});

app.listen(3000, () => console.log("Servidor Inicializado."));
