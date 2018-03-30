import React from 'react';
import ReactDOM from 'react-dom';
import { receivePokemon, requestAllPokemon, requestPokemon } from './actions/pokemon_actions';
// import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';
// import { selectAllPokemon } from './reducers/selector';
import Root from './components/root';
import { fetchPokemon } from './util/api_util';


document.addEventListener('DOMContentLoaded', () => {
  // window.receiveAllPokemon = receiveAllPokemon;
  window.fetchPokemon = fetchPokemon;
  window.requestPokemon = requestPokemon;
  window.receivePokemon = receivePokemon;


  const store = configureStore();
  const rootEl = document.getElementById('root');
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, rootEl);
});
