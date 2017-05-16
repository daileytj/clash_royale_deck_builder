import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Card from '../components/card';

class DeckBuilder extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    const testCard = {
    "_id": "58d176a56d804500104b125d",
    "idName": "knight",
    "rarity": "Common",
    "type": "Troop",
    "name": "Knight",
    "description": "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone.",
    "arena": 0,
    "elixirCost": 3,
    "order": 4,
    "__v": 0
    }

    return(
      <div className = "deck-builder-container">
        <div className = "card-container deck-builder-deck slot1">
          <Card className = "blank" card = {testCard}/>
        </div>
        <div className = "card-container deck-builder-deck slot2">
          <Card className = "blank" card = {testCard}/>
        </div>
        <div className = "card-container deck-builder-deck slot3">
          <Card className = "blank" card = {testCard}/>
        </div>
        <div className = "card-container deck-builder-deck slot4">
          <Card className = "blank" card = {testCard}/>
        </div>
        <div className = "card-container deck-builder-deck slot5">
          <Card className = "blank" card = {testCard}/>
        </div>
        <div className = "card-container deck-builder-deck slot6">
          <Card className = "blank" card = {testCard}/>
        </div>
        <div className = "card-container deck-builder-deck slot7">
          <Card className = "blank" card = {testCard}/>
        </div>
        <div className = "card-container deck-builder-deck slot8">
          <Card className = "blank" card = {testCard}/>
        </div>
      </div>
    )
  }
}

export default connect()(DeckBuilder);
