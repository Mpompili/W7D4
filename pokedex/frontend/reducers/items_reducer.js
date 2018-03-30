import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import  merge  from 'lodash/merge';

const itemReducer = (state={}, action) => {
  Object.freeze(state);
  let items;
  let newState;
  switch (action.type) {
    case (RECEIVE_POKEMON):
      items = action.payload.items;
      newState = {};
      newState[items.id] = items[items.id];
    return merge({}, state, newState);
    default:
      return state;
  }
};


export default itemReducer;
