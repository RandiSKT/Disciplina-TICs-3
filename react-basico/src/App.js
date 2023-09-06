import "./App.css";
import Component01 from "./components/Component01";
import Component02 from "./components/Component02";
import Calculation from "./components/Calculation";
import ManageData from "./components/ManageData";
import ManageList from "./components/ManageList";
import ConditionalRendering from "./components/ConditionalRendering";
import ShowUserData from "./components/ShowUserData";
import React, { useState } from "react";
import ShowUserData2 from "./components/ShowUserData2";
import ShowUserData3 from "./components/ShowUserData3";

function App() {
  const userAge = 22;
  const [course, setCourse] = useState("CI");
  const calouro = false;

  const lista_cursos = [
    "ci",
    "desing",
    "Engenharia",
    "Biologia",
    "Educação Fisica",
    "Agronomia",
  ];
  const mudaCurso = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    setCourse(lista_cursos[randomNumber]);
  };

  const [students] = useState([
    { id: 0, registration: 2023123456, name: "Joãozinho", age: 21 },
    { id: 1, registration: 2022098764, name: "Mariazinha", age: 23 },
    { id: 2, registration: 2018563083, name: "Juquinha", age: 18 },
    { id: 3, registration: 2021734393, name: "Fernandinha", age: 20 },
    { id: 4, registration: 2020999935, name: "Laura", age: 22 },
  ]);

  return (
    <div className="App">
      <h1>React Mano</h1>
      <Component01 />
      <hr />
      <Component02 />
      <hr />
      <Calculation></Calculation>
      <hr />
      <ManageData></ManageData>
      <hr />
      <ManageList />
      <hr />
      <ConditionalRendering />
      <hr />
      <ShowUserData name="Fernando" age={userAge} curso={course} />
      <button onClick={mudaCurso}>Mudar Curso</button>
      <ShowUserData2
        name="Ferd"
        age="20"
        curso={course}
        universidade="UFSC"
        e_calouro={calouro}
      />
      <hr />
      {students.map((student) => (
        <ShowUserData3
          key={student.id}
          name={student.name}
          age={student.age}
          registration={student.registration}
        />
      ))}
    </div>
  );
}

export default App;
