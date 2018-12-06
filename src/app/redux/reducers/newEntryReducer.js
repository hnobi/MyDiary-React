import {
  NEW_ENTRY_SAVE_INPUT,
  NEW_ENTRY_REQUEST,
  NEW_ENTRY_SUCCESS,
  NEW_ENTRY_FAILURE
} from '../constant/actionTypes';

const initialState = {
  input: {
    title: '',
    entry: ''
  },
  status: null
};

const newEntryReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_ENTRY_SAVE_INPUT: {
      const newState = { ...state };
      const { field, value } = action.payload;
      newState.input[field] = value;
      return newState;
    }
    case NEW_ENTRY_REQUEST:
      return { ...state, loading: true };
    case NEW_ENTRY_SUCCESS:

      return {
        ...state,
        loading: false,
        message: action.payload.message
      };
    case NEW_ENTRY_FAILURE:
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

export default newEntryReducer;
