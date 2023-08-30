import React, { useState } from "react";

const ManageList = () => {
  const [products] = useState([
    "shape",
    "lixa",
    "roda",
    "rolamento",
    "adesivo",
    "truck",
  ]);
  const [skaters, setSkaters] = useState([
    { id: 0, brand: "DGK", name: "Nick Dias", age: 28 },
    { id: 1, brand: "Primitive", name: "Carlos Ribeiro", age: 32 },
    { id: 2, brand: "Disorder", name: "Marcelo Santos", age: 24 },
    { id: 3, brand: "Element", name: "Mason Silva", age: 23 },
    { id: 4, brand: "Real", name: "Ishod Wair", age: 27 },
    { id: 5, brand: "Toy Machine", name: "Gabryel Aguilar", age: 20 },
  ]);
  const deleteRandomSkater = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    console.log(randomNumber);

    setSkaters((pervSkater) => {
      return pervSkater.filter((skater) => randomNumber !== skater.id);
    });
  };
  return (
    <div>
      <ul className="skater-list">
        {products.map((item, i) => (
          <li key={i}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
        ))}
      </ul>
      <ul className="skater-list">
        {skaters.map((skater) => (
          <li key={skater.id}>
            {skater.name} - {skater.brand}, age= {skater.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandomSkater}>Remover skatista aleatório</button>
    </div>
  );
};

export default ManageList;
