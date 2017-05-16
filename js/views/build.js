import React from 'react';
import {connect} from 'react-redux';
import DeckBuilder from '../components/deck_builder';
import DeckBuildOptions from '../components/deck_build_options';
import AvailableCardList from '../components/available_card_list';

class Build extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className = "build-page">
        <h1>Build</h1>
        <DeckBuilder />
        <DeckBuildOptions />
        <AvailableCardList />
      </div>
    )
  }
}

export default connect()(Build);
