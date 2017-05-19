import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';
import Build from './build';

class Main extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className = "main">
        <Header {...this.props}/>
        {React.cloneElement(this.props.children, this.props)}
        <Footer />
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   state: state
// });

export default Main;
