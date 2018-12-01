import axios from 'axios';
// import dotenv from 'dotenv'
//  dotenv.config()
const baseUrl = 'https://your-diary.herokuapp.com/api/v1';

const signUpRequest = data => axios.post(`${baseUrl}/auth/signup`, {
  fullname: data.fullname,
  username: data.username,
  email: data.email,
  password: data.password
});
const loginRequest = data => axios.post(`${baseUrl}/auth/signin`, {
  username: data.username,
  password: data.password
});
export { signUpRequest, loginRequest };
