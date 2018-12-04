import axios from 'axios';

const baseUrl = process.env.BASE_URL;

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
