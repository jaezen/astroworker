import { connect } from 'react-redux';
import SSNPromptNavbarComponent from '../components/SSNPrompt/SSNPromptNavbar';

const mapStateToProps = state => ({
  hasSSN: state.hasSSN,
})

const dispatchProps = dispatch => ({
});

const SSNPromptNavbar = connect(
  mapStateToProps,
  dispatchProps,
)(SSNPromptNavbarComponent);

export default SSNPromptNavbar;
