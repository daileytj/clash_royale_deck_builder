import React from 'react';
import {connect} from 'react-redux';

class Build extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Build</h1>
      </div>
    )
  }
}

export default connect()(Build);
