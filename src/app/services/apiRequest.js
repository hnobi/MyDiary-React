import axios from 'axios';

const baseUrl = 'https://your-diary.herokuapp.com/api/v1';

const signUpRequest = data => axios.post(`${baseUrl}/auth/signup`, data);

const loginRequest = data => axios.post(`${baseUrl}/auth/signin`, data);

const newEntryRequest = data => axios.post(`${baseUrl}/entries?token=${data.token}`, data);

const fetchEntriesRequest = data => axios.get(`${baseUrl}/entries?token=${data.token}`);

export {
  signUpRequest, loginRequest, newEntryRequest, fetchEntriesRequest
};
