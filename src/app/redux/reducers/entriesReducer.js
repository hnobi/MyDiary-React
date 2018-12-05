import { FETCH_ENTRIES_SUCCESS, NEW_ENTRY_SUCCESS } from '../constant/actionTypes';

const initialState = [];

const entriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ENTRIES_SUCCESS:
      return [...state, ...action.payload];

    case NEW_ENTRY_SUCCESS:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default entriesReducer;
