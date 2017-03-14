import { connect } from 'react-redux';
import ResultsComponent from '../components/Results/Results';

const mapStateToProps = state => ({
  result: state.result,
})

const dispatchProps = dispatch => ({
  setResults: (results) => dispatch({ type: 'SET_RESULTS', payload: results })
});

const Results = connect(
  mapStateToProps,
  dispatchProps,
)(ResultsComponent);

export default Results;
