import React from "react";
import Operadores from "../components/Operadores";
import "./Calculator.css";

const Calculator = () => {
  return (
    <fieldset>
      <legend>Minha Calculadora</legend>
      <div class="calculadora">
        <div class="linha">
          <div class="coluna">
            <input className="entrada" type="text" />
          </div>
          <div class="coluna">
            <input className="entrada" type="text" />
          </div>
          <div class="coluna operadores">
            <div class="coluna operador">
              <Operadores simbolo="+" />
            </div>
            <div class="coluna operador">
              <Operadores simbolo="-" />
            </div>
            <div class="coluna operador">
              <Operadores simbolo="X" />
            </div>
            <div class="coluna operador">
              <Operadores simbolo="÷" />
            </div>
          </div>
          <div class="coluna igual">=</div>
          <div class="coluna">
            <input className="resultado" type="text" />
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default Calculator;
