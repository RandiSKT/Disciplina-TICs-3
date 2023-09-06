import React from "react";

const ShowUserData2 = ( {name, age, curso, universidade, e_calouro}) => {
  return (
    <div>
      <ul>Dados Do aluno:</ul>
      <li>Nome: {name}</li>
      <li>Idade: {age}</li>
      <li>Curso: {curso}</li>
      <li>Universidade: {universidade}</li>
      {e_calouro ? (<li>è calouro: Sim </li>) : (<li>é calouro: Não</li>)}
    </div>
  );
};

export default ShowUserData2;
