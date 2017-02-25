import { connect } from 'react-redux';
import ServiceDetailsSecondaryComponent from '../components/ServiceDetails/ServiceDetailsSecondary';

const mapStateToProps = state => ({
  ServiceDetailsSecondary: state.ServiceDetailsSecondary,
})

const dispatchProps = dispatch => ({
  setApplyNow: (applyNow) => dispatch({ type: 'SET_APPLY_NOW', payload: applyNow })
});

const ServiceDetailsSecondary = connect(
  mapStateToProps,
  dispatchProps,
)(ServiceDetailsSecondaryComponent);

export default ServiceDetailsSecondary;
