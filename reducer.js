const initialState = {
  dob: new Date('1/1/1990'),
  location: null,
  hasSSN: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DOB':
      debugger;
      return Object.assign({}, state, { dob: action.payload });
    case 'SET_LOCATION':
      return Object.assign({}, state, { location: action.payload });
    case 'SET_HAS_SSN':
      return Object.assing({}, state, { hasSSN: action.payload });
    default:
      return state;
  }
}

export default reducer;
