import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import thunk from 'redux-thunk';

// Import the root reducer
import rootReducer from '../reducers/index';

import cards from '../data/cards';
import decks from '../data/decks';

// create an object for the default data
const defaultState = {
  cards,
  decks
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export const history = syncHistoryWithStore(hashHistory, store);

export default store;
