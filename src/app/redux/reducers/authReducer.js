import { SAVE_INPUT } from "../constant/actionType";

const authState = {
  input: {
    fullname:'hammed',
    email:'hboysoon@yahoo.com',
    password:'sasnecret1234',
    username:'hbouy'
  },
  token: "sasdasdsa"
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case SAVE_INPUT:
      let newState = { ...state };
      let { field, value } = action.payload;
      newState.input[field] = value;
    default:
      return state;
  }
};

export default authReducer;
