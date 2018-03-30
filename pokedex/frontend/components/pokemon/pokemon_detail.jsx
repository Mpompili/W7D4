import React from 'react';
import { Route } from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';
import Item from '../items/item';
// it needs to have a routes  just one... and since pokemon index item will
// change the url to /pokemon/:pokemonId
// we will grab the pokemon id with this.props.match.params.pokemon_ID
//render the approrpiate pokemon

class PokemonDetail extends React.Component {

  componentDidMount() {
    console.log('what the fuck');
    console.log(this.props);
    this.props.requestPokemon(this.props.pokemon.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.pokemonId !== nextProps.match.params.pokemonId) {
     this.props.requestPokemon(nextProps.match.params.pokemonId);
   }
  }

  render() {

    const { pokemon, items } = this.props;

  if (!pokemon.moves) return null;
    console.log(pokemon.moves);
    console.log(items);
    const moves = pokemon.moves.join(', ');
    return (

      <div className="pokemon-detail">
        <img src={pokemon.image_url}/>
        <span>{pokemon.name}</span>
        <ul>
          <li>{pokemon.name}</li>
          <li>type: {pokemon.poke_type}</li>
          <li>attack: {pokemon.attack}</li>
          <li>defense: {pokemon.defense}</li>
          <li>moves: {moves}</li>
        </ul>

      </div>
    );
  }
}

// <ul className="items">
//   {items.map(item => <Item key={item.name} item={item} />)}
// </ul>
export default PokemonDetail;
