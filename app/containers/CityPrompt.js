import { connect } from 'react-redux';
import CityPromptComponent from '../components/CityPrompt/CityPrompt';

const mapStateToProps = state => ({
  city: state.city,
  dob: state.dob,
})

const dispatchProps = dispatch => ({
  setCity: (city) => dispatch({ type: 'SET_CITY', payload: city })
});

const CityPrompt = connect(
  mapStateToProps,
  dispatchProps,
)(CityPromptComponent);

export default CityPrompt;
