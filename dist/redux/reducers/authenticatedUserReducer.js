import { USER_LOGIN_SUCCESS, USER_SIGNUP_SUCCESS } from '../constant/actionTypes';

const initialState = {
  userId: 0,
  email: '',
  token: '',
  image: ''
};

const authenticatedUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      const { data, token } = action.payload;
      return {
        ...state,
        token,
        userId: data.id,
        email: data.email
      };
    }
    case USER_SIGNUP_SUCCESS: {
      const { data, token } = action.payload;

      return {
        ...state,
        token,
        userId: data.id,
        email: data.email
      };
    }
    default:
      return state;
  }
};

export default authenticatedUserReducer;
