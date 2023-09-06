import React from "react";

const ShowUserData3 = ({ name, age, registration }) => {
  return (
    <div>
      {"  "}
      <ul><h1>Infos Do aluno:</h1></ul>
      <li>Nome: {name}</li>
      <li>Idade: {age}</li>
      <li>Matricula: {registration}</li>
    </div>
  );
};

export default ShowUserData3;
