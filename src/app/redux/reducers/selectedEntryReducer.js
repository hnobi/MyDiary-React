import { SET_SELECTED_ENTRY, FETCH_ENTRY_SUCCESS } from '../constant/actionTypes';

const initialState = {
  currentId: 0,
  data: {}
};

const selectedEntryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ENTRY:
      return { ...state, currentId: action.payload };
    case FETCH_ENTRY_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default selectedEntryReducer;
