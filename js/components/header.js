import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory} from 'react-router';
import Home from '../views/home';
import Build from '../views/build';
import Decks from '../views/decks';
import clashRoyaleLogo from '../../images/clash-royale-logo.png';

class Header extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
          <nav>
            <li><Link to = "/">
              <img src = {clashRoyaleLogo} alt = "Clash Royale Logo" />
              <h1> Deck Builder </h1>
            </Link></li>
            <li><Link to = "/build" activeClassName = "active">BUILD</Link></li>
            <li><Link to = "/decks" activeClassName = "active">DECKS</Link></li>
          </nav>
        );
    }
}

export default connect()(Header);
