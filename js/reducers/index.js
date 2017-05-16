import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cards from './cards';
import decks from './decks';

const rootReducer = combineReducers({cards, decks, routing: routerReducer});

export default rootReducer;
