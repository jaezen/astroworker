import { connect } from 'react-redux';
import DOBPromptComponent from '../components/DOBPrompt/DOBPrompt';

const mapStateToProps = state => ({
  dob: state.dob,
})

const dispatchProps = dispatch => ({
  setDOB: (date) => dispatch({ type: 'SET_DOB', payload: date })
});

const DOBPrompt = connect(
  mapStateToProps,
  dispatchProps,
)(DOBPromptComponent);

export default DOBPrompt;
