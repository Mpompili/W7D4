import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route, Switch } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  componentDidMount () {
    this.props.requestAllPokemon();
  }

  render () {
    const { pokemon } = this.props; // pokemon: {pokemon1 pokemon2}
    const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    return (
      <div className='pokemon-page'>
        <ul className='pokemon-list'>
          { pokemonItems }
        </ul>
        <Route path="/pokemon/:pokemonId" component={ PokemonDetailContainer }/>
      </div>
    );
  }
}

export default PokemonIndex;
