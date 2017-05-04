import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class AvailableCardList extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){

    return(
      <div>
      </div>
    )
  }
}

export default connect()(AvailableCardList);
