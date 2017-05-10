import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import clashRoyaleLogo from '../../images/clash-royale-logo.png';
// <img src = {clashRoyaleLogo} alt = "Clash Royale Logo" />

class Header extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
          <nav>
            <li className = "app-heading" ><Link to = "/" className = "nav-link">
              <img className = "clash-logo" src = "https://vignette2.wikia.nocookie.net/clashroyale/images/6/6c/Clash_Royale_Logo.png/revision/latest?cb=20160104193540" alt = "Clash Royale Logo" />
              <h1> Deck Builder </h1>
            </Link></li>
            <ul className = "nav-wrapper" >
              <li><Link to = "/build" className = "nav-link" activeClassName = "active">BUILD</Link></li>
              <li><Link to = "/decks" className = "nav-link" activeClassName = "active">DECKS</Link></li>
              <li><Link to = "/cards" className = "nav-link" activeClassName = "active">ALL CARDS</Link></li>
            </ul>
          </nav>
        );
    }
}

export default connect()(Header);
