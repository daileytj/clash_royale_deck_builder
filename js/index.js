require('babel-polyfill');
import React from 'react';
import {render} from 'react-dom';

// Import Components
import App from './views/app';
import Home from './views/home';
import Build from './views/build';
import Decks from './views/decks';
import CardDetails from './views/cardDetails';
import Deck from './views/deck';
import AvailableCardList from './components/available_card_list';

// Import React Router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './stores/store';

const router = (
  <Provider store = {store}>
    <Router history = {history}>
      <Route path = '/' component = {App}>
        <IndexRoute component = {Home}></IndexRoute>
        <Route path = '/build' component = {Build} ></Route>
        <Route path = '/decks' component = {Decks} ></Route>
        <Route path = '/cards' component = {AvailableCardList} ></Route>
        <Route path = '/card/:cardId' component = {CardDetails} ></Route>
        <Route path = '/deck/:deckId' component = {Deck} ></Route>
      </Route>
    </Router>
</Provider>
)

render(router, document.getElementById('app'));
