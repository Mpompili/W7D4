import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {

  // this.props => key = '1', pokemon: bulbasaur, items, moves...

  render() {
    const { pokemon } = this.props; //single pokemon
    const image_url = pokemon.image_url;
    return (
      <div className="pokemon-index-item">
        <Link to={`/pokemon/${pokemon.id}`}>
          <img className="pii-child" src={image_url} />
          <li className="pii-child">{ pokemon.name }</li>
        </Link>
      </div>
    );
  }

}

export default PokemonIndexItem;
