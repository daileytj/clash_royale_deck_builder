import React from 'react';
import {connect} from 'react-redux';

class Deck extends React.Component {
  constructor(props){
    super(props);
  }

  render(props){
    return(
      <div className = "deck">
        A Deck
      </div>
    )
  }

}

export default connect()(Deck);
