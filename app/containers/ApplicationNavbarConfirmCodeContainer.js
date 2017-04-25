import { connect } from 'react-redux';
import ApplicationNavbarConfirmCodeComponent from '../components/Application/ApplicationNavbarConfirmCode';

const mapStateToProps = state => ({
  name: state.confirmCode,
})

const dispatchProps = dispatch => ({
});

const ApplicationNavbarConfirmCode = connect(
  mapStateToProps,
  dispatchProps,
)(ApplicationNavbarConfirmCodeComponent);

export default ApplicationNavbarConfirmCode;
