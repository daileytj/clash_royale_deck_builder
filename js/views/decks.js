import React from 'react';
import {connect} from 'react-redux';

class Decks extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className = "decks-page">
        <h1>Decks</h1>
      </div>
    )
  }
}

export default connect()(Decks);
