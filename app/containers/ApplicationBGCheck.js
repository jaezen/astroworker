import { connect } from 'react-redux';
import ApplicationBGCheckComponent from '../components/Application/ApplicationBGCheck';

const mapStateToProps = state => ({
  ApplicationBGCheck: state.ApplicationBGCheck,
})

const dispatchProps = dispatch => ({
  setSsn: (ssn) => dispatch({type: 'SET_SSN', payload: ssn}),
  setGetChecked: (getChecked) => dispatch({ type: 'SET_GET_CHECKED', payload: getChecked })
});

const ApplicationBGCheck = connect(
  mapStateToProps,
  dispatchProps,
)(ApplicationBGCheckComponent);

export default ApplicationBGCheck;
