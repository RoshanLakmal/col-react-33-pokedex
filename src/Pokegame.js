import React from 'react';
import Pokedex from './Pokedex';
// import Pokecard from './Pokecard';

function splitArray(items) {
    var arry1=[];
    var arry2=[];
    var arryTotal1=0;
    var arryTotal2=0;


    while(items.length>0){
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
    for(var i=0;i<arry1.length;i++){
        arryTotal1+=arry1[i].base_experience;
        arryTotal2+=arry2[i].base_experience;
    }
    console.log(arryTotal1);
    var myObj = {o1:arry1,o2:arry2,o1T:arryTotal1,o2T:arryTotal2};
    return myObj;
}



class Pokegame extends React.Component{
    state = {a1:[], a2:[],a1T:null ,a2T:null};
    componentDidMount(){
        const pokemonList = this.props.pokemon;
        const obj = splitArray(pokemonList)
        console.log(obj.o1T);
        this.setState({a1: obj.o1, a2: obj.o2,a1T: obj.o1T, a2T: obj.o2T});
    }
    render(){
        return(
            
            <div>
                {this.state.a1T>this.state.a2T? <h1>Winner{this.state.a1T}
                                                <Pokedex pokemon={this.state.a1}/>
                                                </h1>:
                                                <h1>Looser{this.state.a1T}
                                                <Pokedex pokemon={this.state.a1}/>
                                                </h1>}         
                {this.state.a1T<this.state.a2T? <h1>Winner{this.state.a2T}
                                                <Pokedex pokemon={this.state.a2}/>
                                                </h1>:
                                                <h1>Looser{this.state.a2T}
                                                <Pokedex pokemon={this.state.a2}/>
                                                </h1>}

            </div>
        )
    }
}

export default Pokegame;