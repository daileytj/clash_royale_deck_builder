require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import * as actions from './actions/index';
// import store from './stores/store';

ReactDOM.render(
        //<Provider store={store}>
            <div> Hello World </div>,
        //</Provider>,
        document.getElementById('app')
    )
