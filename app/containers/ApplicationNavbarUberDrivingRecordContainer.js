import { connect } from 'react-redux';
import ApplicationNavbarUberDrivingRecordComponent from '../components/Application/ApplicationNavbarUberDrivingRecord';

const mapStateToProps = state => ({
  hasDrivingRecord: state.hasDrivingRecord,
})

const dispatchProps = dispatch => ({
});

const ApplicationNavbarUberDrivingRecord = connect(
  mapStateToProps,
  dispatchProps,
)(ApplicationNavbarUberDrivingRecordComponent);

export default ApplicationNavbarUberDrivingRecord;
