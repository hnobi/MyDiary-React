import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import userSignup from '../../app/redux/actions/signUp';
import {
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS
} from '../../app/redux/constant/actionTypes';
import { BaseUrl } from '../../constant';

const baseUrl = BaseUrl.herokulink;


const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mock = new MockAdapter(axios);

describe('Auth actions', () => {
  afterEach(() => {
    mock.reset();
  });

  const data = {
    fullname: 'hammed',
    username: 'hammed',
    email: 'email@wss.com',
    password: 'Pass1111'
  };
  it('Signup Request', () => {
    const expectedActions = [
      {
        type: USER_SIGNUP_REQUEST
      }
    ];
    const store = mockStore({});
    store.dispatch(userSignup(''));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });
  it('User signup is successful', () => {
    mock.onPost(`${baseUrl}/auth/signup`).reply(200, {
      data,
      status: 'success'
    });

    const mockedActions = [
      {
        type: USER_SIGNUP_REQUEST
      },
      {
        type: USER_SIGNUP_SUCCESS,
        payload: {
          data: {
            fullname: 'hammed',
            username: 'hammed',
            email: 'email@wss.com',
            password: 'Pass1111'
          },
          status: 'success'
        }
      }
    ];

    const store = mockStore({});
    return store.dispatch(userSignup(data)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('User signup failure', () => {
    const error = {
      response: { data: { message: 'error signing up' } }
    };
    mock.onPost(`${baseUrl}/auth/signup`).reply(400, {
      data: error,
      message: error
    });

    const mockedActions = [
      {
        type: USER_SIGNUP_REQUEST
      },
      {
        payload: {
          response: {
            data: { message: 'error signing up' }
          }
        },
        type: USER_SIGNUP_FAILURE
      }
    ];

    const store = mockStore({});
    return store.dispatch(userSignup(error)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('User signup failure', () => {
    // const message = 'Bad network';

    mock.onPost(`${baseUrl}/auth/signup`).networkError();

    const mockedActions = [
      {
        type: USER_SIGNUP_REQUEST
      },
      {
        payload: 'An unexpected error occured. please check your internet connection and try again',

        type: USER_SIGNUP_FAILURE
      }
    ];

    const store = mockStore({});
    return store.dispatch(userSignup(data)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
});
