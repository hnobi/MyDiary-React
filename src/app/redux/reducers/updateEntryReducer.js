import {
  UPDATE_ENTRY_SAVE_INPUT,
  UPDATE_ENTRY_REQUEST,
  UPDATE_ENTRY_SUCCESS,
  UPDATE_ENTRY_FAILURE
} from '../constant/actionTypes';

const initialState = {
  input: {}
};

const updateEntryReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ENTRY_SAVE_INPUT: {
      const newState = { ...state };
      const { field, value } = action.payload;
      newState.input[field] = value;
      return newState;
    }
    case UPDATE_ENTRY_REQUEST:
      return { ...state, loading: true };

    case UPDATE_ENTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        status: 'success'
      };

    case UPDATE_ENTRY_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
        status: 'error'
      };
    default:
      return state;
  }
};

export default updateEntryReducer;
