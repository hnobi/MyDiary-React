import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} from '../constant/actionTypes';

const initialState = {
  data: {}

};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        data: action.payload.data,
        status: 'success'
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        status: 'error'
      };
    default:
      return state;
  }
};

export default loginReducer;
