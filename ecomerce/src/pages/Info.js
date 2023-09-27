import React from "react";
import { useParams } from "react-router-dom";

const Info = () => {
  const { id } = useParams();
  return <div>
    <h1>Mais Informações sobre o produtp: {id}...</h1>
  </div>;
};

export default Info;
