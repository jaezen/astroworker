import { connect } from 'react-redux';
import ApplicationNameComponent from '../components/Application/ApplicationName';

const mapStateToProps = state => ({
  name: state.name,
})

const dispatchProps = dispatch => ({
  setName: (name) => dispatch({type: 'SET_NAME', payload: name})
});

const ApplicationName = connect(
  mapStateToProps,
  dispatchProps,
)(ApplicationNameComponent);

export default ApplicationName;
