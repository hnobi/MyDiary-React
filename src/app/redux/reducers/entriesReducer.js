import { FETCH_ENTRIES_SUCCESS, NEW_ENTRY_SUCCESS } from '../constant/actionTypes';

const initialState = {
  allEntries: []
};

const entriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ENTRIES_SUCCESS:
      return { ...state, allEntries: [...action.payload] };

    case NEW_ENTRY_SUCCESS:
      return [action.payload.data, ...state];
    default:
      return state;
  }
};

export default entriesReducer;
