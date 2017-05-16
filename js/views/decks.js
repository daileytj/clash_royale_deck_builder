import React from 'react';
import {connect} from 'react-redux';
import Deck from './deck';

class Decks extends React.Component{
  //place after h2-> {this.props.decks.map((deck, i) => <Deck {...this.props} key = {i} i = {i} deck = {deck}/>)}
  render() {
    return(
      <div className = "decks-page">
        <h2>Decks</h2>
      </div>
    )
  }
}

export default connect()(Decks);
