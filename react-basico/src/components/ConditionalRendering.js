import React, { useState } from "react";

const ConditionalRendering = () => {
  const [test] = useState(true);

  return (
    <div>
      <h1>Vai mostrar?</h1>
      {test && <p>Se a variavel de teste for true SIM</p>}
    </div>
  );
};

export default ConditionalRendering;
