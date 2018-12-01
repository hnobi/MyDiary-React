import axios from "axios";
// import dotenv from 'dotenv'
//  dotenv.config()
const  base_url = 'https://your-diary.herokuapp.com/api/v1';

const signUpRequest = data => {
  return axios.post(base_url + "/auth/signup", {
    fullname: data.fullname,
    username: data.username,
    email: data.email,
    password: data.password
  });
};

export { signUpRequest };
