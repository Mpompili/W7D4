import React from 'react';
import { Link } from 'react-router-dom';

class Item extends React.Component {

  // this.props => key = '1', pokemon: bulbasaur, items, moves...

  render() {
    const { item } = this.props; //single pokemon
    return (
      <div>
        <Link to={`/pokemon/${item.pokemon_id}/item/${item.id}`}>
          <li>{ item.name }</li>
        </Link>
      </div>
    );
  }

}

export default Item;
