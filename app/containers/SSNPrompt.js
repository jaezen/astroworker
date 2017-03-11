import { connect } from 'react-redux';
import SSNPromptComponent from '../components/SSNPrompt/SSNPrompt';

const mapStateToProps = state => ({
  hasSSN:state.hasSSN,
})

const dispatchProps = dispatch => ({
  setHasSSN: (hasSSN) => dispatch({type: 'SET_HAS_SSN', payload: hasSSN})
  // setSSN: (ssn) => dispatch({type: 'SET_SSN', payload: ssn})
});

const SSNPrompt = connect(
  mapStateToProps,
  dispatchProps,
)(SSNPromptComponent);

export default SSNPrompt;
