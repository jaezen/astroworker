import { connect } from 'react-redux';
import ApplicationNavbarMobileNoComponent from '../components/Application/ApplicationNavbarMobileNo';

const mapStateToProps = state => ({
  name: state.mobileNo,
})

const dispatchProps = dispatch => ({
});

const ApplicationNavbarMobileNo = connect(
  mapStateToProps,
  dispatchProps,
)(ApplicationNavbarMobileNoComponent);

export default ApplicationNavbarMobileNo;
