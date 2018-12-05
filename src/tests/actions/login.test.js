import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import userLogin from '../../app/redux/actions/login';

import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS
} from '../../app/redux/constant/actionTypes';
import { BaseUrl } from '../../constant';

const baseUrl = BaseUrl.herokulink;

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mock = new MockAdapter(axios);

describe('Auth actions', () => {
  const data = {
    username: 'hammed',
    password: 'Pass1111'
  };
  it('Login Request', () => {
    const expectedActions = [
      {
        type: USER_LOGIN_REQUEST
      }
    ];
    const store = mockStore({});
    store.dispatch(userLogin(''));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });
  it('User login is successful', () => {
    mock.onPost(`${baseUrl}/auth/signin`).reply(200, {
      data,
      status: 'success'
    });

    const mockedActions = [
      {
        type: USER_LOGIN_REQUEST
      },
      {
        type: USER_LOGIN_SUCCESS,
        payload: {
          data: {
            username: 'hammed',
            password: 'Pass1111'
          },
          status: 'success'
        }
      }
    ];

    const store = mockStore({});
    return store.dispatch(userLogin(data)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('User login failure', () => {
    const error = {
      response: { data: { message: 'error login' } }
    };
    mock.onPost(`${baseUrl}/auth/signin`).reply(400, {
      data: error,
      message: error
    });

    const mockedActions = [
      {
        type: USER_LOGIN_REQUEST
      },
      {
        payload: {
          response: {
            data: { message: 'error login' }
          }
        },
        type: USER_LOGIN_FAILURE
      }
    ];

    const store = mockStore({});
    return store.dispatch(userLogin(error)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('User login network failure', () => {
    mock.onPost(`${baseUrl}/auth/signin`).networkError();
    const mockedActions = [
      {
        type: USER_LOGIN_REQUEST
      },
      {
        payload: 'An unexpected error occured. please check your internet connection and try again',

        type: USER_LOGIN_FAILURE
      }
    ];

    const store = mockStore({});
    return store.dispatch(userLogin(data)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
});
