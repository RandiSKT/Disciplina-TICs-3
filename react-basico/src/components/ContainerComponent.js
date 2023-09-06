import React from "react";

const ContainerComponent = ({ children, number }) => {
  return (
    <div>
      <h1>Este é meu componente container</h1>
      {children}
      <p>Children Prop numero: {number}</p>
      {children}
    </div>
  );
};

export default ContainerComponent;
