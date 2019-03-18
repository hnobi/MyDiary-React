import { getAuthToken } from '../../services/AuthToken';
import { FETCH_USER_PROFILE_SUCCESS } from '../constant/actionTypes';
import { fetchUserProfile } from '../../services/apiRequest';

const getUserProfile = () => (dispatch) => {
  const userToken = getAuthToken();

  const data = {
    token: userToken
  };
  return fetchUserProfile(data).then((userInfo) => {
    dispatch({
      type: FETCH_USER_PROFILE_SUCCESS,
      userDatails: userInfo.data.data
    });
  });
};

export default getUserProfile;
