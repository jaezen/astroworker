import { connect } from 'react-redux';
import ApplicationNavbarNameComponent from '../components/Application/ApplicationNavbarName';

const mapStateToProps = state => ({
  name: state.name,
})

const dispatchProps = dispatch => ({
});

const ApplicationNavbarName = connect(
  mapStateToProps,
  dispatchProps,
)(ApplicationNavbarNameComponent);

export default ApplicationNavbarName;
