import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';

class Build extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <Header />
        <h1>Build</h1>
        <Footer />
      </div>
    )
  }
}

export default connect()(Build);
