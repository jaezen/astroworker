import { connect } from 'react-redux';
import ApplicationNameComponent from '../components/Application/ApplicationName';

const mapStateToProps = state => ({
  firstName: state.firstName,
  lastName: state.lastName,
})

const dispatchProps = dispatch => ({
  setFirstName: (firstName) => dispatch({type: 'SET_FIRST_NAME', payload: firstName}),
  setLastName: (lastName) => dispatch({type: 'SET_LAST_NAME', payload: lastName}),
});

const ApplicationName = connect(
  mapStateToProps,
  dispatchProps,
)(ApplicationNameComponent);

export default ApplicationName;
