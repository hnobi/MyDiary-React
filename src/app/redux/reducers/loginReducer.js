import {
  LOGIN_SAVE_INPUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} from "../constant/actionTypes";

const initialState = {
  input: {
    username: "test",
    password: "test1234"
  },
  token: ""
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SAVE_INPUT:
      let newState = { ...state };
      let { field, value } = action.payload;
      newState.input[field] = value;
      return newState;
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload.token,status:'success'  };
    case USER_LOGIN_FAILURE:
      return { ...state, loading: false, message: action.payload ,status:'error' };
    default:
      return state;
  }
};

export default loginReducer;
