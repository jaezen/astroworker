import { connect } from 'react-redux';
import ApplicationConfirmCodeComponent from '../components/Application/ApplicationConfirmCode';

const mapStateToProps = state => ({
  confirmCode: state.confirmCode,
})

const dispatchProps = dispatch => ({
  setConfirmCode: (confirmCode) => dispatch({type: 'SET_CONFIRM_CODE', payload: confirmCode})
});

const ApplicationConfirmCode = connect(
  mapStateToProps,
  dispatchProps,
)(ApplicationConfirmCodeComponent);

export default ApplicationConfirmCode;
