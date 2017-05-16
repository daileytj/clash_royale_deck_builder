import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class DeckBuildOptions extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className = "deck-builder-options-wrapper">
        I'm the deck builder options
      </div>
    )
  }
}

export default connect()(DeckBuildOptions);
