import React from 'react';
import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { requestPokemon } from '../../actions/pokemon_actions';
import { selectPokemonItem } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => ({
  itemId: ownProps.match.params.itemId,
  item: selectPokemonItem(state, ownProps.match.params.itemId)
});



export default connect(
  mapStateToProps
)(ItemDetail);
