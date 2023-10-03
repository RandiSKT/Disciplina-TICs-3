import React from 'react';

const Operadores = ({ handleOperacao, simbolo }) => {
  // Estilos CSS inline com base no símbolo
  const buttonStyles = {
    fontSize: '58px',
    borderRadius: '5px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 3)', // Sombra na parte inferior
    backgroundColor: simbolo === '+' ? '#00b1FF' : simbolo === '-' ? '#FFFF00' : simbolo === 'X' ? '#4CAF50' : '#EB0000',
    color: simbolo === '-' ? 'black' : 'white',
    border: 'none',
    width: '91px',
    height: '106px',
    cursor: 'pointer',
  };

  return (
    <div>
      <button style={buttonStyles} onClick={handleOperacao}>{simbolo}</button>
    </div>
  );
};

export default Operadores;
