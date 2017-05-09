import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';

import Main from './main';

function mapStateToProps(state){
  return {
    cards: state.cards,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
