import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/header';

class Decks extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <Header />
        <h1>Decks</h1>
      </div>
    )
  }
}

export default connect()(Decks);
