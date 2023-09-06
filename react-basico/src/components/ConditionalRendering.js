import React, { useState } from "react";

const ConditionalRendering = () => {
  const [test] = useState(true);
  const [place, setPlace] = useState("UFSCAR");
  const handleClick = () => {
    place === "UFSC" ? setPlace("UDESC") : setPlace("UFSC");
  };

  return (
    <div>
      <h1>Vai mostrar?</h1>
      {test && <p>Se a variavel de teste for true SIM</p>}
      <h1>Outro IF é UFSC?</h1>
      {place === "UFSC" ? (
        <p>Sim o local é UFSC</p>
      ) : (
        <p>Não o local é outro {place}</p>
      )}
      <button onClick={handleClick}>Mudar nome</button>
    </div>
  );
};

export default ConditionalRendering;
