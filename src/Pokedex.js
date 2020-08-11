import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends React.Component{
  
    render(){
 
        const pokemons = this.props.pokemon;
        const mypokemon = pokemons.map(p=><Pokecard key={p.id} pokemon={p}/>)
        let title;
        if(this.props.isWinner){
            title = <h1 className="Pokedex-winner">Winning Hand</h1>;
        }else{
            title = <h1 className="Pokedex-loser">Losing Hand</h1>;
        }
        return(
            <div className="Pokedex">
                <h1>Pokedex!</h1>
                {title}
                <h4>Total Experience: {this.props.exp}</h4>
                
                <div className="Pokedex-cards">
                    {mypokemon}
                </div>
             
                {/* <Pokecard pokemon={{id: 4, name: 'Charmander', type: 'fire', base_experience: 62}} />
                <Pokecard pokemon={{id: 4, name: 'Charmander', type: 'fire', base_experience: 62}} /> */}
            </div>
        )
    }
}

export default Pokedex;