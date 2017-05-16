import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class DeckBuilder extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className = "deck-builder-container">
        I'm the deckbuilder.
      </div>
    )
  }
}

export default connect()(DeckBuilder);
