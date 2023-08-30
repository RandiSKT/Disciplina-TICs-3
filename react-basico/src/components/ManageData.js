import React, { useState } from 'react'

const ManageData = () => {
    const [number, setNumber] = useState(15);
  return (
    <div>ManageData
        <p>Meu numero: { number }</p>
        <button onClick={() => { setNumber(number + 5)}}>Alterar numero</button>
    </div>
  )
}

export default ManageData