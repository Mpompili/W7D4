import React from 'react';
// import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
    // console.log(this.props);
  }

  componentDidMount () {
    this.props.requestAllPokemon();
  }

  render () {
    const { pokemon } = this.props;
    return (
      <div>
        <ul>
          {pokemon.map(poke => <li key={poke.id}>{poke.name}</li>)}
        </ul> 
      </div>
    );
  }
}

export default PokemonIndex;
