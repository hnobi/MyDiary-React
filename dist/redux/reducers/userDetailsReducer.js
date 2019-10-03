import { FETCH_USER_PROFILE_SUCCESS } from '../constant/actionTypes';

const initialState = {
  data: {}
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_SUCCESS:
      return { ...state, data: action.userDatails };
    default:
      return state;
  }
};

export default userProfileReducer;
