import React, { useState } from 'react';

const Calculation = () => {
  const num1 = 5;
  const num2 = 7;
  const [resultado, setResultado] = useState(0);

  const handleMyClick = (operador) => {
    console.log("Vamos Calcular");
    if (operador === "soma") {
      setResultado(num1 + num2);
    } else if (operador === "sub") {
      setResultado(num1 - num2);
    }
  };

  const printEventOdd = (number) => {
    if (number%2===0) {
      return <h2>è par MANO!</h2>
    }
    else {
      return <h2>è impar Brother!</h2>
    }
  }

  return (
    <div>
      <div>Valor 1 = {num1}</div>
      <div>Valor 2 = {num2}</div>
      <div>Valor 1 + Valor 2 = {resultado}</div>
      <button onClick={() => handleMyClick("soma")}>Somar</button>
      <button onClick={() => handleMyClick("sub")}>Subtrair</button>
      <p>numero 4: {printEventOdd(4)}</p>
      <div>numero 3: {printEventOdd(3)}</div>
    </div>
  )
}

export default Calculation