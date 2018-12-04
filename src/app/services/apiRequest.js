import axios from 'axios';

const baseUrl = 'https://your-diary.herokuapp.com/api/v1';

const signUpRequest = data => axios.post(`${baseUrl}/auth/signup`, data);
const loginRequest = data => axios.post(`${baseUrl}/auth/signin`, data);

export { signUpRequest, loginRequest };
