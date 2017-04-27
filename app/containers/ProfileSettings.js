import { connect } from 'react-redux';
import ProfileSettingsComponent from '../components/Menu/ProfileSettings';

const mapStateToProps = state => ({
  firstName: state.firstName,
  lastName: state.lastName,
  mobileNo: state.mobileNo,
  city: state.city,
})

const dispatchProps = dispatch => ({
  setFirstName: (firstName) => dispatch({type: 'SET_FIRST_NAME', payload: firstName}),
  setLastName: (lastName) => dispatch({type: 'SET_LAST_NAME', payload: lastName}),
  setMobileNo: (mobileNo) => dispatch({type: 'SET_MOBILE_NO_NAME', payload: mobileNo}),
  setCity: (city) => dispatch({type: 'SET_CITY', payload: city}),
});

const ProfileSettings = connect(
  mapStateToProps,
  dispatchProps,
)(ApplicationNameComponent);

export default ProfileSettings;
