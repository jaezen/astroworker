import { connect } from 'react-redux';
import WorkerPromptComponent from '../components/WorkerPrompt/WorkerPrompt';

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
