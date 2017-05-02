require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
// import * as actions from './actions/index';
import store from '../js/stores/store';
import {connect} from 'react-redux';
import 'isomorphic-fetch';
import Home from './views/home';
import Build from './views/build';
import Decks from './views/decks';

const routes = (
  <Route>
    <Route path="/" component={Home}></Route>
    <Route path="/build" component={Build}></Route>
    <Route path="/decks" component={Decks}></Route>
  </Route>
)

ReactDOM.render(
        <Provider store={store}>
          <Router history={hashHistory}>
            {routes}
          </Router>
        </Provider>,
        document.getElementById('app')
    )
