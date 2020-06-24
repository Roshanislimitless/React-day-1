import React, { useState } from 'react'


const CaughtPokemon = ( ) => {

  let [totalCaught, ToCountPokemom ] = useState(4);

  const incrementTotal = () => {
    ToCountPokemom(
      totalCaught + 1)
  }

  const decrementTotal = ( ) =>{
    ToCountPokemom(totalCaught - 1)
  }
    const date = new Date().toLocaleDateString()
    return (
    <div>
    <button onClick={incrementTotal}>Click me  </button>
    <p>Caught {totalCaught} Pokemon on {date} </p>
    <button onClick={decrementTotal}>Click me  </button>
    </div>
    )
  }


export default CaughtPokemon;