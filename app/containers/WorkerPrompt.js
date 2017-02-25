import { connect } from 'react-redux';
import WorkerPromptComponent from '../components/WorkerPrompt/WorkerPrompt';

const mapStateToProps = state => ({
  workerType: state.workerType,
})

const dispatchProps = dispatch => ({
  setWorkerType: (workerType) => dispatch({ type: 'SET_WORKER_TYPE', payload: workerType })
});

const WorkerPrompt = connect(
  mapStateToProps,
  dispatchProps,
)(WorkerPromptComponent);

export default WorkerPrompt;
