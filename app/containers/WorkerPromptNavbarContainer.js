import { connect } from 'react-redux';
import WorkerPromptNavbarComponent from '../components/WorkerPrompt/WorkerPromptNavbar';

const mapStateToProps = state => ({
  workerType: state.workerType,
})

const dispatchProps = dispatch => ({
});

const WorkerPromptNavbar = connect(
  mapStateToProps,
  dispatchProps,
)(WorkerPromptNavbarComponent);

export default WorkerPromptNavbar;
