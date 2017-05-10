import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';

class Main extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div class = "main">
        <Header />
        {React.cloneElement(this.props.children, this.props)}
        <Footer />
      </div>
    )
  }
}

export default connect()(Main);
