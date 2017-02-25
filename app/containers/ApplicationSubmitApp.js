import { connect } from 'react-redux';
import ApplicationSubmitAppComponent from '../components/Application/ApplicationSubmitApp';

const mapStateToProps = state => ({
  ApplicationSubmitApp: state.ApplicationSubmitApp,
})

const dispatchProps = dispatch => ({
  setSubmitApp: (submitApp) => dispatch({ type: 'SET_SUBMIT_APP', payload: submitApp})
});

const ApplicationSubmitApp = connect(
  mapStateToProps,
  dispatchProps,
)(ApplicationSubmitAppComponent);

export default ApplicationSubmitApp;
