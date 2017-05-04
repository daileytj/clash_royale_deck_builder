import React from 'React';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class DeckBuilder extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}

export default connect()(DeckBuilder);
