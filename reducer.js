const initialState = {
  dob: new Date('1/1/1990'),
  city: 'San Francisco',
  hasSSN: null,
  ssn: null,
  workerType: null,
  result:null,
  applyNow:null,
  hasCar:null,
  hasDrivingRecord:null,
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
    };
  }

  if (action.type === 'SET_DOB') {
    return {
      ...state,
      dob: action.payload,
    };
  }

  if (action.type === 'SET_CITY') {
    return {
      ...state,
      city: action.payload,
    };
  }

  if (action.type === 'SET_HAS_SSN') {
    return {
      ...state,
      hasSSN: action.payload,
    };
  }

  if (action.type === 'SET_SSN') {
    return {
      ...state,
      ssn: action.payload,
    };
  }

  if (action.type === 'SET_RESULTS') {
    return {
      ...state,
      results: action.payload,
    };
  }

  if (action.type === 'SET_APPLY_NOW') {
    return {
      ...state,
      applyNow: action.payload,
    };
  }

  if (action.type === 'SET_APPLY_NOW') {
    return {
      ...state,
      applyNow: action.payload,
    };
  }

  if (action.type === 'SET_HAS_CAR') {
    return {
      ...state,
      hasCar: action.payload,
    };
  }

  if (action.type === 'SET_HAS_DRIVING_RECORD') {
    return {
      ...state,
      hasDrivingRecord: action.payload,
    };
  }

  if (action.type === 'SET_NAME') {
    return {
      ...state,
      name: action.payload,
    };
  }

  if (action.type === 'SET_MOBILE_NO') {
    return {
      ...state,
      mobileNo: action.payload,
    };
  }

  if (action.type === 'SET_CONFIRM_CODE') {
    return {
      ...state,
      confirmCode: action.payload,
    };
  }

  if (action.type === 'SET_GET_CHECKED') {
    return {
      ...state,
      getChecked: action.payload,
    };
  }

  if (action.type === 'SET_SUBMIT_APP') {
    return {
      ...state,
      submitApp: action.payload,
    };
  }

  // sync(state);

  return(state);

}

export default reducer;
