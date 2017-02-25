import { connect } from 'react-redux';
import SSNPromptComponent from '../components/SSNPrompt/SSNPrompt';

const mapStateToProps = state => ({
  ssn: state.ssn,
  count:state.count,
})

const dispatchProps = dispatch => ({
  setSSN: (ssn) => dispatch({type: 'SET_HAS_SSN', payload: hasSsn})
  // setSSN: (ssn) => dispatch({type: 'SET_SSN', payload: ssn})
});

const SSNPrompt = connect(
  mapStateToProps,
  dispatchProps,
)(SSNPromptComponent);

export default SSNPrompt;
