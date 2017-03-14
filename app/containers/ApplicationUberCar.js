import { connect } from 'react-redux';
import ApplicationUberCarComponent from '../components/Application/ApplicationUberCar';

const mapStateToProps = state => ({
  hasCarcar: state.hasCar,
})

const dispatchProps = dispatch => ({
  setHasCar: (hasCar) => dispatch({type: 'SET_HAS_CAR', payload: hasCar})
});

const ApplicationUberCar = connect(
  mapStateToProps,
  dispatchProps,
)(ApplicationUberCarComponent);

export default ApplicationUberCar;
