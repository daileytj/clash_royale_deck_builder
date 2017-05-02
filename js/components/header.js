import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory} from 'react-router';
import Home from '../views/home';
import Build from '../views/build';
import Decks from '../views/decks';

class Header extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
          <nav>
            <li><Link to = "/">
              <img src = 'http://cdn.supercell.com/supercell.com/170502141104/all/themes/supercell/img/parallax/cr_logo@2x.png'/>
              <h1> Deck Builder </h1>
            </Link></li>
            <li><Link to = "/build" activeClassName = "active">BUILD</Link></li>
            <li><Link to = "/decks" activeClassName = "active">DECKS</Link></li>
          </nav>
        );
    }
}

export default connect()(Header);
