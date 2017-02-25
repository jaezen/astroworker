const initialState = {
  dob: new Date('1/1/1990'),
  city: 'San Francisco',
  hasSSN: null,
  ssn: null,
  workerType: null,
  result:null,
  applyNow:null,
  car:null,
  drivingRecord:null,
  name:null,
  mobile:null,
  confirmCode:null,
  getChecked:null,
  submitApp:null,
  count:9,
  userId: null,
};

// function sync(state) {
//   // connect to mongo db
//   // send current state to database and store it by userId
// }

const reducer = (state = initialState, action) => {

  if (action.type === 'SET_WORKER_TYPE') {
    return {
      ...state,
      workerType: action.payload,
    }
  };

  switch (action.type) {
    case 'SET_DOB':
      debugger;
      return Object.assign({}, state, { dob: action.payload });
    case 'SET_CITY':
      return Object.assign({}, state, { location: action.payload });
    case 'SET_HAS_SSN':
      debugger;
      return Object.assign({}, state, { hasSSN: action.payload });
    case 'SET_SSN':
      return Object.assign({}, state, { ssn: action.payload });
    case 'SET_RESULTS':
      return Object.assign({}, state, { results: action.payload });
    case 'SET_APPLY_NOW':
      return Object.assign({}, state, { applyNow: action.payload });
    case 'SET_HAS_CAR':
      return Object.assign({}, state, { hasCar: action.payload });
    case 'SET_HAS_DRIVING_RECORD':
      return Object.assign({}, state, { hasDrivingRecord: action.payload });
    case 'SET_NAME':
      return Object.assign({}, state, { name: action.payload });
    case 'SET_MOBILE_NO':
      return Object.assign({}, state, { mobileNo: action.payload });
    case 'SET_CONFIRM_CODE':
      return Object.assign({}, state, { confirmCode: action.payload });
    case 'SET_GET_CHECKED':
      return Object.assign({}, state, { getChecked: action.payload });
    case 'SET_SUBMIT_APP':
      return Object.assign({}, state, { submitApp: action.payload });
    default:
      return state;
  }

  // sync(state);

}

export default reducer;
