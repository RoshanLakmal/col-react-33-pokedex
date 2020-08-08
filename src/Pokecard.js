import React from 'react';

class Pokecard extends React.Component{
    render(){
        const {id, name, type, base_experience} = this.props.pokemon;
        return(
            <div>
                <div>{name}</div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
                <div>Type: {type}</div>
                <div>EXP: {base_experience}</div>
            </div>
        )
    }
}

export default Pokecard;