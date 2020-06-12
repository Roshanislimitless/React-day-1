import React from 'react'

const BestPokemon = (prop) => {
  
    return (
    <div>
      <p>My fav pokemon is i dont know </p>
      <ul>
        {prop.Abilities.map((any, index) => {
          return <li key={index}>{any}</li>
        })}
      </ul>
    </div> 
    
    )
  
  }

  export default BestPokemon;




