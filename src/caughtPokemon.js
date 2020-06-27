import React, { useState } from 'react'


const CaughtPokemon = ( ) => {

  const [caughtPokemon, setCaughtPokemon ] = useState([]);
  console.log(caughtPokemon);
  

  const [pokemonNameInput, setPokemonNameInput] = useState('')

  const handleInputChanges = (event) => {
    setPokemonNameInput(event.target.value)
    console.log(pokemonNameInput);
    
  }

  const catchedPokemon = () => {
    if(pokemonNameInput)
  {const updatedcaughtPokemon = [...caughtPokemon, pokemonNameInput]
    setCaughtPokemon(
      updatedcaughtPokemon )}
  }

    const date = new Date().toLocaleDateString()
    return (
    <div>
    <input
    type='text'
    value={pokemonNameInput}
    onChange={handleInputChanges}/>
    
    <button onClick={catchedPokemon}>Click me  </button>


    <p>Caught
        <ul>
        {caughtPokemon.map((any, index) => <li key={index}>any</li>)} Pokemon on {date} 
          </ul>
          
    </p>
    </div>
    )
  }


export default CaughtPokemon;