import { connect } from 'react-redux';
import ApplicationMobileNoComponent from '../components/Application/ApplicationMobileNo';

const mapStateToProps = state => ({
  mobileNo: state.mobileNo,
})

const dispatchProps = dispatch => ({
  setMobileNo: (mobileNo) => dispatch({type: 'SET_MOBILE_NO', payload: mobileNo}),
});

const ApplicationMobileNo = connect(
  mapStateToProps,
  dispatchProps,
)(ApplicationMobileNoComponent);

export default ApplicationMobileNo;
