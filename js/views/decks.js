import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';

class Decks extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <Header />
        <h1>Decks</h1>
        <Footer />
      </div>
    )
  }
}

export default connect()(Decks);
