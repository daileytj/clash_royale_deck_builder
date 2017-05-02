import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/header';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <Header />
        <h1>Home</h1>
      </div>
    )
  }
}

export default connect()(Home);
