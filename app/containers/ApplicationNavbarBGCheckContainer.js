import { connect } from 'react-redux';
import ApplicationNavbarConfirmCodeComponent from '../components/Application/ApplicationNavbarConfirmCode';

const mapStateToProps = state => ({
  name: state.ssn,
  name: state.getChecked,
})

const dispatchProps = dispatch => ({
});

const ApplicationNavbarBGCheck = connect(
  mapStateToProps,
  dispatchProps,
)(ApplicationNavbarBGCheckComponent);

export default ApplicationNavbarBGCheck;
