import { connect } from 'react-redux';
import ApplicationNavbarUberCarComponent from '../components/Application/ApplicationNavbarUberCar';

const mapStateToProps = state => ({
  hasCar: state.hasCar,
})

const dispatchProps = dispatch => ({
});

const ApplicationNavbarUberCar = connect(
  mapStateToProps,
  dispatchProps,
)(ApplicationNavbarUberCarComponent);

export default ApplicationNavbarUberCar;
