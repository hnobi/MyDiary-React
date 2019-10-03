import axios from 'axios';
// eslint-disable-next-line import/named
import { BaseUrl } from '../../constant';

const baseUrl = BaseUrl.herokulink;

const signUpRequest = data => axios.post(`${baseUrl}/auth/signup`, data);

const loginRequest = data => axios.post(`${baseUrl}/auth/signin`, data);

const newEntryRequest = data => axios.post(`${baseUrl}/entries?token=${data.token}`, data);

const fetchEntriesRequest = data => axios.get(`${baseUrl}/entries?token=${data.token}`);

const fetchEntryRequest = data => axios.get(`${baseUrl}/entries/${data.entryId}?token=${data.token}`);

const updateEntryRequest = data => axios.put(`${baseUrl}/entries/${data.entryId}?token=${data.token}`, data);

const fetchUserProfile = data => axios.get(`${baseUrl}/user/details?token=${data.token}`);

export {
  signUpRequest,
  loginRequest,
  newEntryRequest,
  fetchEntriesRequest,
  fetchEntryRequest,
  updateEntryRequest,
  fetchUserProfile
};
