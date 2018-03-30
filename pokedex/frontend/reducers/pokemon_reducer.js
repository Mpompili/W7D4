import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import  merge  from 'lodash/merge';

const pokemonReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let poke;
  let newState;
  switch(action.type) {
    case (RECEIVE_ALL_POKEMON):
    return merge({}, state, action.pokemon);
    case (RECEIVE_POKEMON):
      poke = action.payload.pokemon;
      newState = {};
      console.log('under is poke in pokemon reducer');
      console.log(poke);
      newState[poke.id] = poke;
    return merge({}, state, newState);


    // console.log(action.pokemon);
    // console.log("it worked");
      // return action.pokemon;
    default:
      return state;
  }
};

export default pokemonReducer;
