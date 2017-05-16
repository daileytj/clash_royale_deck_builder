import React from 'react';
import {connect} from 'react-redux';
import Card from '../components/card';

class Deck extends React.Component {
  render(props){
    return(
      <div className = "deck">
        <h2>A Deck</h2>
        {this.props.cards.map((card,i) => <Card {...this.props} key = {i} i = {i} card = {card}/>)}
      </div>
    )
  }

}

export default connect()(Deck);
