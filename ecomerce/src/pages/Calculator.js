import React, { useState } from "react";
import Operadores from "../components/Operadores";
import "./Calculator.css";

const Calculator = () => {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState("");

  const bloquearNaoNumerico = (e) => {
    const keyCode = e.keyCode || e.which;
    const tecla = String.fromCharCode(keyCode);

    // Permite apenas números e teclas de controle
    if (!/^[0-9]+$/.test(tecla) && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
    }
  };

  const handleOperacao = (operador) => {
    // Verifique se ambos os valores são numéricos antes de realizar a operação
    if (!isNaN(valor1) && !isNaN(valor2)) {
      if (operador === "+") {
        setResultado(parseFloat(valor1) + parseFloat(valor2));
      } else if (operador === "-") {
        setResultado(parseFloat(valor1) - parseFloat(valor2));
      } else if (operador === "X") {
        setResultado(parseFloat(valor1) * parseFloat(valor2));
      } else if (operador === "÷" && valor2 !== "0") {
        setResultado(parseFloat(valor1) / parseFloat(valor2));
      } else if (operador === "÷" && valor2 === "") {
        setResultado("Infinity")
      }else {
        setResultado("Erro");
      }
    } else {
      setResultado("0");
    }
  };

  return (
    <fieldset>
      <legend>Minha Calculadora</legend>
      <div className="calculadora">
        <div className="linha">
          <div className="coluna">
            <input
              className="entrada"
              type="text"
              value={valor1}
              onChange={(e) => setValor1(e.target.value)}
              onKeyDown={bloquearNaoNumerico}
            />
          </div>
          <div className="coluna">
            <input
              className="entrada"
              type="text"
              value={valor2}
              onChange={(e) => setValor2(e.target.value)}
              onKeyDown={bloquearNaoNumerico}
            />
          </div>
          <div className="coluna operadores">
            <div className="coluna operador">
              <Operadores
                simbolo="+"
                handleOperacao={() => handleOperacao("+")}
              />
            </div>
            <div className="coluna operador">
              <Operadores
                simbolo="-"
                handleOperacao={() => handleOperacao("-")}
              />
            </div>
            <div className="coluna operador">
              <Operadores
                simbolo="X"
                handleOperacao={() => handleOperacao("X")}
              />
            </div>
            <div className="coluna operador">
              <Operadores
                simbolo="÷"
                handleOperacao={() => handleOperacao("÷")}
              />
            </div>
          </div>

          <div className="coluna igual">=</div>
          <div className="coluna">
            <input
              className="resultado"
              type="text"
              value={resultado}
              readOnly
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default Calculator;
