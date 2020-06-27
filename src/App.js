import React from 'react';
import Logo from './Logo';
import BestPokemon from './BestPokemon'
import CaughtPokemon from './caughtPokemon'

//const abilities = ["Anticipation", "Adaptability", "Runaway", "Jump high"]
//the abilities prop has been removed because of the real api fetch
const date = new Date().toLocaleDateString()


const App = () => {
  const logWhenClicked  = ( ) => {
    console.log("i created a function");
  }


    return ( 
    <div>
      <Logo appName = "Pokedex" handleClick={logWhenClicked}/>
      <BestPokemon />
      <CaughtPokemon Date = {date}/>
    </div>)

    }



export default App
