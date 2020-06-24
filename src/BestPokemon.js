import React, { useState } from 'react'

const BestPokemon = (props) => {

  
  
    return (
    <div>
      <p>My fav pokemon is</p>
      <ul>
        {props.pokemon.abilities.map((abilityObj, index) => {
          return <li key={index}>{abilityObj.ability.name}</li>
        })}
      </ul>
    </div> 
    
    )
  
  }

 const BestPokemonFetcher = ( ) => {
  const [bestPokemon, setBestPokemon] = useState(null);

  React.useEffect( ( ) => {
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then( (response) => response.json())
    .then(data => setBestPokemon(data))
  }, [])


  return bestPokemon ? <BestPokemon pokemon={bestPokemon} /> : null;

 }

  export default BestPokemonFetcher;




