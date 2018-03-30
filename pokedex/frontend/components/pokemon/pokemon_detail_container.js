import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestPokemon } from '../../actions/pokemon_actions';
import { selectPokeItems } from '../../reducers/selector';


const mapStateToProps = (state, ownProps) => {

  const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId];

  return {
    pokemon,
    items: selectPokeItems(state, pokemon)
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestPokemon: (pokemonId) => dispatch(requestPokemon(pokemonId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
