import React from 'react';
import {connect} from 'react-redux';

class Card extends React.Component {
  constructor(props){
    super(props);
  }

  render(props){
    const image = this.props.image;
    const cardName = this.props.cardName;
    const idName = this.props.idName;
    const rarity = this.props.rarity;
    const type = this.props.type;
    const name = this.props.name;
    const description = this.props.description;
    const arena = this.props.arena;
    const elixirCost = this.props.elixerCost;


    return(
      <div className = "card">
        <p className = "hidden cardName">{cardName}</p>
        <p className = "hidden idName">{idName}</p>
        <p className = "hidden rarity">{rarity}</p>
        <p className = "hidden type">{type}</p>
        <p className = "hidden name">{name}</p>
        <p className = "hidden description">{description}</p>
        <p className = "hidden arena">{arena}</p>
        <p className = "hidden elixerCost">{elixerCost}</p>
        <img src = {image} alt = {cardName}/>
      </div>
    )
  }

}

export default connect()(Card);
