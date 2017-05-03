import React from 'react';
import {connect} from 'react-redux';

class Card extends React.Component {
  constructor(props){
    super(props);
  }

  render(props){
    const image = this.props.image;
    const cardName = this.props.cardName;

    return(
      <div className = "card">
        <p className = "hidden">{cardName}</p>
        <img src = {image} alt = {cardName}/>
      </div>
    )
  }

}

export default connect()(Card);
