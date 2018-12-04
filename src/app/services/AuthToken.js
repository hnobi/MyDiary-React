const saveAuthToken = (token) => {
  localStorage.setItem('diaryUserToken', token);
};

const removeAuthToken = () => {
  localStorage.removeItem('diaryUserToken');
};

const getAuthToken = () => localStorage.getItem('diaryUserToken');

export { saveAuthToken, getAuthToken, removeAuthToken };
