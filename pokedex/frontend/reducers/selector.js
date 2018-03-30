import values from 'lodash/values';

export const selectAllPokemon = (state) => values(state.entities.pokemon);

export const selectPokeItems = (state, poke) => {
  console.log(poke);
  console.log(state);
  console.log(poke.name);
  return poke ? poke.item_ids.map(id => state.entities.items[id]) : [];
};

export const selectPokemonItem = (state, itemId) => values(state.entities.items[itemId]);
