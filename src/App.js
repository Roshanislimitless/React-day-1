import React from 'react';
import Logo from './Logo';
import BestPokemon from './BestPokemon'
import CaughtPokemon from './caughtPokemon'

const abilities = ["Anticipation", "Adaptability", "Runaway", "Jump high"]
const date = new Date().toLocaleDateString()


const App = () => {
    return ( 
    <div>
      <Logo appName = "Pokedex"/>
      <BestPokemon Abilities = {abilities} />
      <CaughtPokemon Date = {date}/>
    </div>)

    }



export default App;
