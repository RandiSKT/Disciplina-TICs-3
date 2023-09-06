import React from "react";

const ShowUserData = ({name, age, curso}) => {
  return (
    <div>
      <h1>Nome do Estudante {name}</h1>
      <h2>Idade do Estudante {age}</h2>
      <h3>Curso do Estudante {curso}</h3>
    </div>
  );
};

export default ShowUserData;
