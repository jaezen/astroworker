import { connect } from 'react-redux';
import ApplicationUberCarComponent from '../components/Application/ApplicationUberCar';

const mapStateToProps = state => ({
  car: state.car,
})

const dispatchProps = dispatch => ({
  setCar: (car) => dispatch({type: 'SET_HAS_CAR', payload: hasCar})
});

const ApplicationUberCar = connect(
  mapStateToProps,
  dispatchProps,
)(ApplicationUberCarComponent);

export default ApplicationUberCar;
