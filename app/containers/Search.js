import { connect } from 'react-redux';
import SearchComponent from '../components/Search/Search';

const mapStateToProps = state => ({
  worker: state.worker,
})

const dispatchProps = dispatch => ({
  setWorker: (workerType) => dispatch({ type: 'SET_WORKER_TYPE', payload: workerType })
});

const WorkerPrompt = connect(
  mapStateToProps,
  dispatchProps,
)(WorkerPromptComponent);

export default WorkerPrompt;
