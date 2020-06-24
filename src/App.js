import React from 'react';
import Logo from './Logo';
import BestPokemon from './BestPokemon'
import CaughtPokemon from './caughtPokemon'
import BestPokemonFetcher from './BestPokemon';

const abilities = ["Anticipation", "Adaptability", "Runaway", "Jump high"]
const date = new Date().toLocaleDateString()


const App = () => {
  const logWhenClicked  = ( ) => {
    console.log("i created a function");
  }


    return ( 
    <div>
      <Logo appName = "Pokedex" handleClick={logWhenClicked}/>
      <BestPokemon Abilities = {abilities} />
      <CaughtPokemon Date = {date}/>
    </div>)

    }



export default App
