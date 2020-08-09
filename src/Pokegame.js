import React from 'react';
import Pokedex from './Pokedex';

function splitArray(items) {
    var arry1=[];
    var arry2=[];
    var myObj = {o1:arry1,o2:arry2};
    
    for(let i=0;i<items.length;i++){
        var item = items[Math.floor(Math.random() * items.length)];
        const index = items.indexOf(item);
        if(arry1.length<4){
            arry1.push(items[index]);
        }else{
            arry2.push(items[index]);
        }
        if (index > -1) {
            items.splice(index, 1);
        }
    }
    return myObj;
}

class Pokegame extends React.Component{

    render(){
        const pokemonList = this.props.myPokedexPokemons;
        console.log(splitArray(pokemonList));
        return(
            <div>Pokegame</div>
        )
    }
}

export default Pokegame;