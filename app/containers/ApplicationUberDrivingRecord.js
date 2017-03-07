import { connect } from 'react-redux';
import ApplicationUberDrivingRecordComponent from '../components/Application/ApplicationUberDrivingRecord';

const mapStateToProps = state => ({
  drivingRecord: state.drivingRecord,
})

const dispatchProps = dispatch => ({
  setDrivingRecord: (hasDrivingRecord) => dispatch({type: 'SET_HAS_DRIVING_RECORD', payload: hasDrivingRecord})
});

const ApplicationUberDrivingRecord = connect(
  mapStateToProps,
  dispatchProps,
)(ApplicationUberDrivingRecordComponent);

export default ApplicationUberDrivingRecord;
