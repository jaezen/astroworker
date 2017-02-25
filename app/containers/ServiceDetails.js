import { connect } from 'react-redux';
import ServiceDetailsComponent from '../components/ServiceDetails/ServiceDetails';

const mapStateToProps = state => ({
  serviceDetails: state.serviceDetails,
})

const dispatchProps = dispatch => ({
  setApplyNow: (applyNow) => dispatch({ type: 'SET_APPLY_NOW', payload: applyNow })
});

const ServiceDetails = connect(
  mapStateToProps,
  dispatchProps,
)(ServiceDetailsComponent);

export default ServiceDetails;
