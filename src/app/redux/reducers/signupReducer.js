import {
  SIGNUP_SAVE_INPUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE
} from "../constant/actionTypes";

const initialState = {
  input: {
    fullname: "test",
    email: "test@g.com",
    username: "test",
    password: 'test1234',
  },
  token: ""
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SAVE_INPUT:
      let newState = { ...state };
      let { field, value } = action.payload;
      
      newState.input[field] = value;
    case SIGNUP_SAVE_INPUT:

    case USER_SIGNUP_REQUEST:
      return { ...state, loading: true };
    case USER_SIGNUP_SUCCESS:
    return { ...state, loading: false, message: action.payload.message, status:'success' };    
    case USER_SIGNUP_FAILURE:
      return { ...state, loading: false, message: action.payload, status:'error' };
    default:
      return state;
  }
};

export default signupReducer;
